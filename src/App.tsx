
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Separator } from './components/ui/separator'
import { Slider } from './components/ui/slider'
import { Textarea } from './components/ui/textarea'
import { Wand2, Upload } from 'lucide-react';

export function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='border-b flex items-center justify-between px-6 py-3'>Header</header>
      <main className='flex flex-1 gap-6 p-6'>
        <aside>
          <form className='space-y-6'>
            <Label
              className='aspect-video border border-dashed cursor-pointer flex flex-col items-center justify-center gap-2 relative rounded-md text-muted-foreground hover:bg-primary'
            >Select a video file to upload...</Label>

            <Separator />

            <div className='space-y-2'>
              <Label>Key Words</Label>
              <Input className='text-xs' placeholder='Add keywords mentioned in the video splitted by comma ( , )' />
            </div>

            <Button className='w-full' type='submit'>
              Upload to transcription
              <Upload className='ml-2' size={16} />
            </Button>

            <Separator />

            <div className='space-y-2'>
              <Label>Pre-defined Prompts</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select one prompt...'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Video-Title'>Titles for a video</SelectItem>
                  <SelectItem value='Video-Title'>Description for a video</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className='space-y-2'>
              <Label>Model</Label>
              <Select defaultValue='gpt3.5' disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-Turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className='block italic leading-relaxed text-muted-foreground text-xs'>
                You will can choose another models in the future
              </span>
            </div>

            <Separator />

            <div className='space-y-4'>
              <div className='flex justify-between items-center'>
                <Label>Temperature</Label>
                <span className='text-muted-foreground text-xs'>0.5</span>
              </div>
              <Slider
                defaultValue={[0.5]}
                min={0}
                max={1}
                step={0.1}
              />
              <span className='block italic leading-relaxed text-muted-foreground text-xs'>
                Higher values means more creative results, but with more possibility of errors
              </span>
            </div>

            <Separator />

            <Button className='w-full' type='submit'>
              Generate
              <Wand2 className='ml-2' size={16} />
            </Button>
          </form>
        </aside>

        <section
          className='flex flex-col flex-1 gap-4'
        >
          <div className='flex-1 gap-4 grid grid-rows-2'>
            <Textarea
              className='leading-relaxed p-4 resize-none'
              placeholder='Type your instructions for AI here or select on the side menu a pre-defined prompt (Title or Description)!'
            />
            <Textarea
              className='bg-indigo-900 cursor-not-allowed leading-relaxed p-4 resize-none'
              placeholder='The result generated by AI using the instructions above will be shown here...'
              readOnly
            />
          </div>
          <p className='italic text-muted-foreground text-sm'>
            Remember: you can use the<code className='text-indigo-600'>
              {' {transcription} '}</code>variable in your prompt to add a transcription content to uploaded video!
          </p>
        </section>
      </main>
    </div>
  )
}
