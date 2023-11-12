import { useState } from 'react';
import { Label } from './ui/label';
import { Slider } from './ui/slider';

export function TemperatureSlider() {
    const [temperature, setTemperature] = useState(0.5)

    return (
        <div className='space-y-4'>
            <div className='flex justify-between items-center'>
                <Label>Temperature</Label>
                <span className='text-muted-foreground text-xs'>{temperature}</span>
            </div>
            <Slider
                defaultValue={[temperature]}
                min={0}
                max={1}
                step={0.1}
                value={[temperature]}
                onValueChange={value => setTemperature(value[0])}
            />
            <span className='block italic leading-relaxed text-muted-foreground text-xs'>
                Higher values means more creative results, but with more possibility of errors
            </span>
        </div>
    )
}