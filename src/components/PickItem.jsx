import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
max-width:700px;
display:flex;
justify-content:center;
align-items:center;
margin: 25px auto;
`
const Item = styled.p`
font-family: "Red Hat Display";
font-weight: 700;
font-size: 39px;
padding: 30px 15px;

`
export default function PickItem({item}) {
    
    return (
        <Wrapper>
            <Item>{item}</Item>
        </Wrapper>
    )
}
