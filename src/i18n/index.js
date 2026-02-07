import { Provider } from '../provider.js';
class __I18NProvider__ extends Provider{
    constructor(component, {lang, locals}){
        super(component)
        document.documentElement.lang = lang;
        Object.assign(globalThis.__Ziko__, {
            i18n : {
                locals
            }
        })
    }
}

export const I18NProvider = (component, {lang, locals}) => new __I18NProvider__(component, {lang, locals});