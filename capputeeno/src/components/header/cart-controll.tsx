"use client"

import { styled } from 'styled-components'
import { CartIcon } from './cart-icon';
import { useLocalStorage } from '@/hooks/useLocalStorage';


const CartCount = styled.span`
    width: 17px;
    height: 17px;
    background-color: var(--delete-color);
    position: absolute;
    color: white;
`

const Container = styled.div`
    position: relative;
`

const CartControll = () => {
    const { value } = useLocalStorage('item')
  return (
    <div>
        <CartIcon/>
        {value && <CartCount>{value.length}</CartCount>}
    </div>
  )
}

export default CartControll