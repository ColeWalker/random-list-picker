import React, {useState} from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'
import {removeItemFromArr} from '../util'
const Wrapper = styled.form`
    border-radius: 5px;
    padding:10px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction:column;
    max-width:700px;
    margin: auto;
`

const FormLabel = styled.label`
    font-size: 20px;
    font-weight: 700;
    font-family: "Red Hat Display";
    padding-bottom:10px;
    padding-top:15px;
`

const TextInput = styled.input`
    font-size: 16px;
    font-family: "Red Hat Display";
    color: #4F4F4F;
    border-radius: 8px;
    padding: 7px;
    border: 2px solid #828282;
    flex:1;
`

const AddItemWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

const AddItemButton = styled.button`
    background: #04A449;
    border-radius: 5px;
    padding:10px 25px;
    font-family:'Alegreya Sans', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    border: 2px solid #04A449;
    margin-left: 10px;
`

const SaveButton = styled.button`

background: #04A449;
border-radius: 5px;
padding: 10px 45px;
border:none;

font-family: Alegreya Sans;
font-style: normal;
font-weight: bold;
font-size: 22px;

align-self:flex-end;
width: 25%;
color: #FFFFFF;


`

export default function AddList() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");
    const [pendingItem, setPendingItem] = useState("");

    const addItem = (item) =>{
        setItems([...items, item]);
    }

    const removeItem = (index) =>{
        setItems(removeItemFromArr(items, index));
    }

    const updateTitle = (event) =>{
        setTitle(event.target.value);
    }

    const updatePendingItem = (event) =>{
        setPendingItem(event.target.value);
    }

    const handleAddItem = () =>{
        addItem(pendingItem);
        setPendingItem("");
    }

    const handleSave = () =>{
        const currentItems = JSON.parse(localStorage.getItem('lists')) || [];
        window.localStorage.setItem("lists", JSON.stringify([
        ...currentItems,
        {
            title,
            items
        }
        ]))
    }

    return (
        <Wrapper>
            <FormLabel htmlFor="title-input">Title</FormLabel>
            <TextInput 
                id="title-input" 
                type="text"
                onChange = {updateTitle}
            />

            <FormLabel htmlFor="add-item">Items</FormLabel>
            
            <AddItemWrapper>
                <TextInput 
                    id="add-input" 
                    type="text" 
                    onChange = {updatePendingItem}
                    value = {pendingItem}
                />
                <AddItemButton 
                    type="button"
                    onClick = {handleAddItem}
                >Add +</AddItemButton>
            </AddItemWrapper>

            <ItemList 
                items={items} 
                removeItem = {removeItem}
            />

            <SaveButton 
                type="button"
                onClick={handleSave}
            >Save</SaveButton>
            
        </Wrapper>
    )
}
