import { Github, FileVideo, Upload, Wand2 } from 'lucide-react'
import { Button } from "./components/ui/button"
import { Separator } from './components/ui/separator'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Slider } from './components/ui/slider'

export const App = () => {
  return (
      <div className='min-h-screen flex flex-col'>
        <header className="px-6 py-3 flex items-center justify-between border-b">
          <h1 className="text-xl font-bold">Upload.ai</h1>

          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Desenvolvido no NLW da Rocketseat
            </span>

            <Separator orientation='vertical' className='h-6' />

            <Button variant='outline'>
              <Github className='w-4 h-4 mr-2' />
              Github
            </Button>
          </div>
        </header>

        <main className='flex-1 p-6 flex gap-6'>
          <div className="flex flex-col flex-1 gap-4">
            <div className="grid grid-rows-2 gap-4 flex-1">
              <Textarea 
                className='resize-none p-4 leading-relaxed'
                placeholder='Inclua o prompt para a IA...' 
              />
              <Textarea 
                className='resize-none p-4 leading-relaxed'
                placeholder='Resultado gerado pela IA...' 
                readOnly 
              />
            </div>
            <p className='text-sm text-muted-foreground'>
              Lembre-se: você pode utilizar a variavel <code className='text-blue-400'>{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do video selecionado.
            </p>
          </div>

          <aside className="w-80 space-y-6">
            <form className='space-y-6'>
              <label 
                htmlFor="video"
                className='border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5'
              >
                <FileVideo className='w-4 h-4' />
                Selecione um video
                <input type="file" id="video" accept='video/mp4' className='sr-only' />
              </label>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor='transcription-propmt'>Prompt de transcrição</Label>
                <Textarea 
                  id='transcription-propmt' 
                  className='h-20 p-4 leading-relaxed resize-none' 
                  placeholder='Inclua palavras-chave mencionadas no video separadas por virgula (,)'
                />
              </div>

              <Button type="submit" className='w-full'>
                Carregar video
                <Upload className='w-4 h-4 ml-2' />
              </Button>
            </form>

            <Separator />

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor='prompt'>Prompt</Label>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Selecione um prompt...' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='title'>Titulo do youtube</SelectItem>
                    <SelectItem value='description'>Descrição do youtube</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor='model'>Modelo</Label>
                <Select disabled defaultValue='gpt3.5'>
                  <SelectTrigger className='w-full'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className='block text-xs text-muted-foreground italic leading-relaxed'>
                  Você podera customizar essa opção em breve
                </span>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label htmlFor='temperature'>Temperatura</Label>
                <Slider
                  id='temperature'
                  min={0}
                  max={1}
                  step={0.1}
                />
                <span className='block text-xs text-muted-foreground italic leading-relaxed'>
                  Valores mais altos tendem a deixar o resultado mais criativo e com possiveis erros.
                </span>
              </div>

              <Separator />

              <Button type="submit" className='w-full'>
                Executar
                <Wand2 className='w-4 h-4 ml-2' />
              </Button>
            </form>
          </aside>
        </main>
      </div>
  )
}