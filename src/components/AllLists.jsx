import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'


const Container = styled.div`
    max-width:700px;
    margin:0 auto;
    margin-bottom:75px;
`
const Title = styled.h1`
    font-size: 39px;
    font-weight: 900;
    font-family: "Red Hat Display";

`

const Wrapper = styled.ul`
    list-style:none;
    margin-left:0;
    padding-left:0;
    display:flex;
    flex-direction:column;
    
`
const Item = styled.li`List Name Goes here

    border-radius: 5px;
    padding: 10px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    flex: 1;
    
    &:not(:last-of-type){
        margin-bottom:30px;
    }
`

const Name = styled(Link)`
    font-size: 20px;
    font-weight: 700;
    font-family: "Red Hat Display";
    color: #120E21;
    text-decoration:none;
`

const Edit = styled(Link)`
    font-size: 20px;
    font-weight: 700;
    font-family: "Red Hat Display";
    color: #120E21;
    text-decoration:none;
`

export default function AllLists() {
    let [lists, setLists] = useState([])

    useEffect(()=>{
        const storedLists = JSON.parse(window.localStorage.getItem("lists")) || []
        setLists(storedLists)
    },[])

    return (
        <Container>
            <Title>Lists</Title>
            <Wrapper>
                {lists.map(el=>{return(<Item>
                    <Name>{el.title}</Name>
                    <Edit></Edit>
                </Item>)})}
            </Wrapper>
        </Container>
    )
}
