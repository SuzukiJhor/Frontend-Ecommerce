"use client"

import { useState } from 'react'

export const useLocalStorage = (item: string)=>{
    
    const storedValue = localStorage.getItem(item);
    const [value, setValue] = useState<T>(storedValue ? JSON.parse(storedValue) : '');
    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    };

    return [value, updateLocalStorage];
}