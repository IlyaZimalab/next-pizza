import { ReactNode } from 'react';
import { Checkbox } from '../ui/index'

export interface FilterCheckboxProps {
    text: string;
    value: string;
    endAdornment?: ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox = ({
    text,
    value,
    checked,
    endAdornment,
    onCheckedChange,
}:FilterCheckboxProps) => {
    return (
        <div className='flex items-center space-x-2'>
            <Checkbox 
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className='rounded-[8px] w-6 h-6'
                id={`checkbox-${String(value)}`}
            />
            <label htmlFor={`checkbox-${String(value)}`} className='leading-none cursor-pointer flex-1 '>
                {text}
            </label>
            {endAdornment}
        </div>
    )
}