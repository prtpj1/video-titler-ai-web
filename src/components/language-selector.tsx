import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useTranslation } from 'react-i18next';


export function LanguageSelector() {
    const { i18n } = useTranslation();

    function changeLanguage(value: string) {
        i18n.changeLanguage(value)
    }

    return (
        <div className='absolute right-8 top-8 text-white w-fit z-10'>
            <Select onValueChange={changeLanguage} >
                <SelectTrigger>
                    <SelectValue placeholder='English' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='en'>English</SelectItem>
                    <SelectItem value='br'>Português</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default LanguageSelector;