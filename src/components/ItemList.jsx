import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
display:flex;
flex-direction:column;
list-style:none;
padding-left:0;
`

const Item = styled.p`
font-family: Red Hat Display;
color: #4F4F4F;
`
const ItemWrapper =styled.li`
list-style:none;
font-family: Red Hat Display;
margin-left: 0;
font-size: 18px;
color: #4F4F4F;
padding: 6px;
display:flex;
flex-direction:row;
justify-content:space-between;

&:not(:last-of-type){
    border-bottom: 1px solid #E0E0E0;
}
`

const DeleteButton= styled.button`
background:none;
padding:none;
margin:0;
border:none;
cursor:pointer;
`
export default function ItemList({items, removeItem}) {
    return (
        <Wrapper>
            {items.length >0 && items.map((item, index)=>{
                return <ItemWrapper key={item + "" + index}>
                        <Item>{item}</Item>
                        <DeleteButton
                        type="button"
                        aria-label="Delete Item"
                        onClick= {()=>{removeItem(index)}}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.24 0.929993L7.93627 6.23249L2.63377 0.929993L0.866272 2.69749L6.16877 7.99999L0.866272 13.3025L2.63377 15.07L7.93627 9.76749L13.24 15.07L15.0075 13.3025L9.70502 7.99999L15.0075 2.69749L13.24 0.929993Z" fill="#4F4F4F"/>
                            </svg>
                        </DeleteButton>
                        

                    </ItemWrapper>
            })}
        </Wrapper>
    )
}
