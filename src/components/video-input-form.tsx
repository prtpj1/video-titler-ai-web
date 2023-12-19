import { FileVideo, Upload } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Textarea } from './ui/textarea';
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from 'react';
import { loadFFmpeg } from '@/lib/ffmpeg';
import { fetchFile } from '@ffmpeg/util';
import { api } from '@/lib/axios';
import { useTranslation } from 'react-i18next';


type Status = "waiting" | "converting" | "uploading" | "generating" | "success"

const statusMessages = {
    converting: 'Converting video to audio...',
    uploading: 'Uploading video...',
    generating: 'Generating transcription...',
    success: 'Success!'
}

const statusColors = {
    waiting: "bg-gradient-to-t from-primary to-primary-light",
    converting: "bg-highlight text-background",
    uploading: "bg-highlight text-background",
    generating: "bg-highlight text-background",
    success: "bg-success text-background"
}

interface VideoInputFormProps {
    onVideoUploaded: (id: string) => void
    onTranscriptionChanged: (transcription: string) => void
}

export function VideoInputForm(props: VideoInputFormProps) {
    const [videoFile, setVideoFile] = useState<File | null>(null)
    const [status, setStatus] = useState<Status>('waiting')
    const keyWordsInputRef = useRef<HTMLTextAreaElement>(null)
    const { t } = useTranslation();

    async function convertVideoToAudio(video: File) {
        const ffmpeg = await loadFFmpeg()

        await ffmpeg.writeFile('input.mp4', await fetchFile(video))

        await ffmpeg.exec([
            '-i',
            'input.mp4',
            '-map',
            '0:a',
            '-b:a',
            '20k',
            'output.mp3',
        ])

        const data = await ffmpeg.readFile('output.mp3')
        const audioFileBlob = new Blob(
            [data],
            { type: 'audio/mpeg' }
        )
        const audioFile = new File(
            [audioFileBlob],
            'audio.mp3',
            { type: 'audio/mpeg' }
        )

        return audioFile

    }

    function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.currentTarget

        if (!files) {
            return
        }

        const selectedFile = files[0]

        return setVideoFile(selectedFile)
    }

    async function handleUploadVideo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const keyWords = keyWordsInputRef.current?.value
        if (!videoFile) return

        setStatus("converting")
        const audioFile = await convertVideoToAudio(videoFile)

        const data = new FormData()

        data.append('file', audioFile)

        setStatus("uploading")
        const response = await api.post('/videos', data)
        const videoId = response.data.video.id

        setStatus("generating")
        const transcriptionResponse = await api.post(`/videos/${videoId}/transcription`, { prompt: keyWords })

        const transcriptionText = transcriptionResponse.data.transcription;
        const transcriptionCapitalized = transcriptionText.charAt(0).toUpperCase() + transcriptionText.slice(1);

        setStatus("success")

        props.onVideoUploaded(videoId)
        props.onTranscriptionChanged(`Video transcription:\n${transcriptionCapitalized}`)
    }

    const previewURL = useMemo(() => {
        if (!videoFile) return null

        return URL.createObjectURL(videoFile)

    }, [videoFile])



    return (
        <form className='space-y-6' onSubmit={handleUploadVideo}>
            <Label
                className='aspect-video bg-gradient-to-t from-indigo-300/10 to-indigo-700/60 backdrop-blur-sm border border-dashed rounded-md cursor-pointer flex flex-col items-center justify-center gap-2 text-muted-foreground hover:bg-indigo-500/20'
                htmlFor='video'
            >
                {previewURL ? (
                    <video
                        className='h-full inset-0 pointer-events-none'
                        controls={false}
                        src={previewURL}
                    />
                ) : (
                    <>
                        <FileVideo size={24} />
                        {t('select.video')}
                    </>
                )}

            </Label>
            <Input
                accept='video/mp4'
                className='sr-only'
                id='video'
                onChange={handleFileSelected}
                type='file'
            />

            <Separator className='bg-gray-50/30' />

            <div className='space-y-2'>
                <Label htmlFor='transcription_keywords'>{t('title.keyWords')}</Label>
                <Textarea
                    className='bg-gradient-to-tr from-dark_gradient-start to-dark_gradient-end backdrop-blur-sm border-2 border-glass_panel-border h20 leading-relaxed resize-none'
                    disabled={status !== "waiting"}
                    id='transcription_keywords'
                    placeholder={t('placeholder.keyWords')}
                    ref={keyWordsInputRef}
                />
            </div>

            <Button
                className={`w-full ${statusColors[status]}`}
                disabled={status !== "waiting"}
                type='submit'
            >
                {status === "waiting" ? (
                    <>
                        {t('button.uploadToTranscription')}
                        <Upload className='ml-2' size={16} />
                    </>
                ) : (
                    statusMessages[status]
                )}
            </Button>
        </form>
    )
}

