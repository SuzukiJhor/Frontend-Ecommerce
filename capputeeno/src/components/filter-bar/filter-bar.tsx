"use client";
import FilterByType from './filter-by-type';
import { styled } from 'styled-components'



const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

const FilterBar = () => {
  return (
    <FilterContainer>
        <FilterByType/>
    </FilterContainer>
  )
}

export default FilterBar