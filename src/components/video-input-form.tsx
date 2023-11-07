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

type Status = "waiting" | "converting" | "uploading" | "generating" | "success"

const statusMessages = {
    converting: 'Converting video to audio...',
    uploading: 'Uploading video...',
    generating: 'Generating transcription...',
    success: 'Success!'
}

export function VideoInputForm() {
    const [videoFile, setVideoFile] = useState<File | null>(null)
    const [status, setStatus] = useState<Status>('waiting')
    const keyWordsInputRef = useRef<HTMLTextAreaElement>(null)

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
        const videoID = response.data.video.id

        setStatus("generating")
        await api.post(`/videos/${videoID}/transcription`, { prompt: keyWords })

        setStatus("success")


    }

    const previewURL = useMemo(() => {
        if (!videoFile) return null

        return URL.createObjectURL(videoFile)

    }, [videoFile])



    return (
        <form className='space-y-6' onSubmit={handleUploadVideo}>
            <Label
                className='aspect-video border border-dashed cursor-pointer flex flex-col items-center justify-center gap-2 relative rounded-md text-muted-foreground hover:bg-primary'
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
                        Select a video file to upload...
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

            <Separator />

            <div className='space-y-2'>
                <Label htmlFor='transcription_keywords'>Key Words</Label>
                <Textarea
                    className='h20 leading-relaxed resize-none'
                    disabled={status !== "waiting"}
                    id='transcription_keywords'
                    placeholder='Add keywords mentioned in the video splitted by comma ( , )'
                    ref={keyWordsInputRef}
                />
            </div>

            <Button
                className='data-[success=true]:bg-emerald-500 data-[success=true]:text-black w-full'
                data-success={status === 'success'}
                disabled={status !== "waiting"}
                type='submit'
            >
                {status === "waiting" ? (
                    <>
                        Upload to transcription
                        <Upload className='ml-2' size={16} />
                    </>
                ) : (
                    statusMessages[status]
                )}
            </Button>
        </form>
    )
}

