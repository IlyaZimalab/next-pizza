import { ReactNode } from 'react';
import { Checkbox } from '../ui/index'

export interface FilterCheckboxProps {
    text: string;
    value: string;
    endAdornment?: ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
    name?: string;
}

export const FilterCheckbox = ({
    text,
    value,
    checked,
    endAdornment,
    onCheckedChange,
    name
}:FilterCheckboxProps) => {
    return (
        <div className='flex items-center space-x-2'>
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className='rounded-[8px] w-6 h-6 cursor-pointer'
                id={`checkbox-${name}-${value}`}
            />
            <label htmlFor={`checkbox-${name}-${value}`} className='leading-none cursor-pointer flex-1 '>
                {text}
            </label>
            {endAdornment}
        </div>
    )
}