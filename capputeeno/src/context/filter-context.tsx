"use client"

import React from 'react'
import { FilterType } from '../types/filter-type';
import { useState } from 'react';

export const FilterContext = React.createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,

  
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
})
interface ProviderProps  {
    children: ReactNode
}

export const FilterContextProvider = ({children}:ProviderProps)=>{
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
        return (
            <FilterContext.Provider value={search, page, type, setSearch, setPage, setType}>
                {children}
            </FilterContext.Provider>
        )
}