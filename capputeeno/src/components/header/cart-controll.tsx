"use client"

import { styled } from 'styled-components'
import { CartIcon } from './cart-icon';
import { useLocalStorage } from '@/hooks/useLocalStorage';


const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    background-color: var(--delete-color);
    color: white;
    font-size: 10px;

    margin-left: -10px;
    `

const Container = styled.div`
    position: relative;
`

const CartControl = () => {
    const { value } = useLocalStorage('cart-items', [])
    console.log(value)
    return (
        <Container>
            <CartIcon/>
            {value && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}

export default CartControl