"use client"

import { styled } from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'
import SearchInput from './search-input';


const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
`

const Logo = styled.a`
   color: var(--logo-color);
   font-weight: 400;
   font-size: 40px;
   line-height: 150%;
`

const Header = () => {
  return (
    <TagHeader>
        <SearchInput/>
        <Logo className={sairaStencil.className}>Capputeeno</Logo>
        <div></div>
    </TagHeader>
  )
}

export default Header