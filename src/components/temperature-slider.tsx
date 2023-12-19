import { useState } from 'react';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { useTranslation } from 'react-i18next';

interface TemperatureChangeProps {
    onTemperatureChange: (value: number) => void
}

export function TemperatureSlider(props: TemperatureChangeProps) {
    const [temperature, setTemperature] = useState(0.5)
    const { t } = useTranslation();

    return (
        <div className='space-y-4'>
            <div className='flex justify-between items-center'>
                <Label>{t('title.temperature')}</Label>
                <span className='text-muted-foreground text-xs'>{temperature}</span>
            </div>
            <Slider
                defaultValue={[temperature]}
                min={0}
                max={1}
                step={0.1}
                value={[temperature]}
                onValueChange={value => {
                    setTemperature(value[0]);
                    props.onTemperatureChange(value[0]);
                }}
            />
            <span className='block italic leading-relaxed text-muted-foreground text-xs'>
                {t('text.temperature')}
            </span>
        </div>
    )
}