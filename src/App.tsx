import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Wand2 } from "lucide-react";
import { VideoInputForm } from "./components/video-input-form";
import { PromptSelect } from "./components/prompt-select";
import { TemperatureSlider } from "./components/temperature-slider";
import { useState } from "react";
import { useCompletion } from "ai/react";
import imgHeader from './assets/video-titler-1.png';
import imgHeaderMini from './assets/video-titler-mini.png';
import LanguageSelector from './components/language-selector';
import { useTranslation } from 'react-i18next';

export function App() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [transcription, setTranscription] = useState<string>("");
  const [temperature, setTemperature] = useState(0.5);
  const { t } = useTranslation();
  const {
    input,
    setInput,
    completion,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useCompletion({
    api: `http://localhost:3333/ai/complete`,
    body: {
      videoId,
      temperature,
    },
    headers: {
      "Content-type": "application/json",
    },
  });
  return (
    <div className="bg-tech bg-cover flex flex-col min-h-screen">
      <nav>
        <LanguageSelector />
      </nav>

      <header className="bg-gradient-to-bl from-glass_panel-start to-glass_panel-end backdrop-blur-sm border-2 border-border rounded-md flex items-center justify-center h-32 w-auto mt-6 mx-6">
        <img className='hidden sm:block h-auto' src={imgHeader} alt='Video Titler Header Picture' />
        <img className='mini:block sm:hidden h-full' src={imgHeaderMini} alt='Video Titler Header Picture' />
      </header>

      <main className="grid grid-cols-1 sm:flex sm:flex-1 gap-6 p-6">
        <aside className="bg-gradient-to-tr from-glass_panel-start to-glass_panel-end  backdrop-blur-sm border-2 border-border h-auto rounded-md p-6 space-y-6 sm:h-max sm:w-80">
          <VideoInputForm
            onVideoUploaded={setVideoId}
            onTranscriptionChanged={setTranscription}
          />

          <Separator className="bg-gray-50/30" />

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label>{t('title.prePrompt')}</Label>
              <PromptSelect onPromptSelected={setInput} />
            </div>

            <Separator className="bg-gray-50/30" />

            <div className="space-y-2">
              <Label>{t('title.models')}</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-Turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block italic leading-relaxed text-muted-foreground text-xs">
                {t('text.models')}
              </span>
            </div>

            <Separator className="bg-gray-50/30" />

            <TemperatureSlider
              onTemperatureChange={(value) => setTemperature(value)}
            />

            <Separator className="bg-gray-50/30" />

            <Button
              className="bg-gradient-to-t from-primary to-primary-light w-full"
              disabled={isLoading}
              type="submit"
            >
              {t('button.generate')}
              <Wand2 className="ml-2" size={16} />
            </Button>
          </form>
        </aside>

        <section className="flex flex-col gap-5 sm:flex-1">
          <div className="flex flex-col gap-5 sm:flex-1 sm:grid sm:grid-cols-1 lg:grid-cols-3" id="main">
            <div className="sm:relative sm:col-span-2 lg:col-span-1" id="div1">
              <Textarea
                className="bg-gradient-to-bl from-glass_panel-start to-glass_panel-end backdrop-blur-sm border-2 border-border rounded-md cursor-not-allowed leading-relaxed no-scrollbar p-4 text-muted-foreground whitespace-pre-wrap h-60 sm:absolute sm:inset-0 sm:resize-none sm:h-auto sm:w-auto"
                placeholder={t('placeholder.transcription')}
                value={transcription}
                id="t1"
              />
            </div>
            <div className="flex flex-col gap-5 sm:flex-1 sm:col-span-2 sm:h-full" id="div2">
              <Textarea
                className="bg-gradient-to-bl from-glass_panel-start to-glass_panel-end  backdrop-blur-sm border-2 border-border rounded-md leading-relaxed no-scrollbar p-4 text-highlight h-60 sm:flex-auto sm:resize-none"
                onChange={handleInputChange}
                placeholder={t('placeholder.prompt')}
                value={input}
                id="t2"
              />
              <Textarea
                className="bg-gradient-to-bl from-glass_panel-start to-glass_panel-end  backdrop-blur-sm border-2 border-border rounded-md cursor-not-allowed leading-relaxed no-scrollbar p-4 h-60 sm:flex-1 flex-grow-2 sm:resize-none"
                placeholder={t('placeholder.result')}
                readOnly
                value={completion}
                id="t3"
              />
            </div>
          </div>
          <p className="italic text-muted-foreground text-sm">
            {t('text.rememberStart')}
            <code className="text-highlight">{" {transcription} "}</code>
            {t('text.rememberEnd')}
          </p>
        </section>

      </main>
    </div>
  );
}
