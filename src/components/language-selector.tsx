import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from './ui/switch';
import { Label } from './ui/label';


export function LanguageSelector() {
    const [isEnglish, setIsEnglish] = useState(true);
    const { i18n } = useTranslation();

    function handleChangeLanguage() {
        const newLanguage = !isEnglish
        setIsEnglish(newLanguage)
        i18n.changeLanguage(newLanguage ? 'br' : 'en')
    }

    return (
        <div className='absolute flex items-center justify-around w-24 right-10 top-1 z-10'>
            <Label htmlFor='language'>EN</Label>
            <Switch checked={isEnglish} id='language' onClick={handleChangeLanguage}>
                {isEnglish ? 'en' : 'br'}
            </Switch>
            <Label htmlFor='language'>BR</Label>
        </div>
    )
}

export default LanguageSelector;
