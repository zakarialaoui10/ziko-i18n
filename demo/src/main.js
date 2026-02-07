import { 
  DirectionProvider,
  I18NProvider
} from 'ziko-providers';
import {tags} from 'ziko/ui'

const l = {
  'start' : 'commencer',
  'end' : 'temriner'
}

globalThis.app = 
I18NProvider(
  DirectionProvider(
    tags.p('hello from provider ', l['start']),
    { dir : 'ltr'}
  ),
  { lang : 'en'}
)


document.body.append(app.element)