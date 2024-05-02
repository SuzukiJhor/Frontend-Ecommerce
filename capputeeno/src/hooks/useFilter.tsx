

import React from 'react'
import { FilterContext } from '../context/filter-context';



export const useFilter = ()=> {
    return React.useContext(FilterContext)
}