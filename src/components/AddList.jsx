import React, { useState } from "react"
import styled from "styled-components"
import ItemList from "./ItemList"
import { removeItemFromArr } from "../util"
const Wrapper = styled.form`
  border-radius: 5px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
`

const FormLabel = styled.label`
  font-size: 20px;
  font-weight: 700;
  font-family: "Red Hat Display";
  padding-bottom: 10px;
  padding-top: 15px;
`

const TextInput = styled.input`
  font-size: 16px;
  font-family: "Red Hat Display";
  color: #4f4f4f;
  border-radius: 8px;
  padding: 7px;
  border: 2px solid #828282;
  flex: 1;
`

const AddItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const AddItemButton = styled.button`
  background: #04a449;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Alegreya Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  border: 2px solid #04a449;
  margin-left: 10px;
`

const SaveButton = styled.button`
  background: #04a449;
  border-radius: 5px;
  padding: 10px 45px;
  border: none;

  font-family: Alegreya Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;

  align-self: flex-end;
  width: 25%;
  color: #ffffff;
`

const ShowButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 700px;
  margin: auto;
`

const ShowButton = styled.button`
  background: #04a449;
  border-radius: 5px;
  padding: 10px 45px;
  border: none;
  font-family: Alegreya Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
  align-self: flex-end;
  width: 25%;
  color: #ffffff;
`

const HideButton = styled.button`
  background: none;
  padding: 10px;
  margin: 0;
  border: none;
  cursor: pointer;
  align-self: flex-end;
`

export default function AddList({ updateLists, lists }) {
  const [items, setItems] = useState([])
  const [title, setTitle] = useState("")
  const [pendingItem, setPendingItem] = useState("")
  const [show, setShow] = useState(false)

  const addItem = item => {
    setItems([...items, item])
  }

  const removeItem = index => {
    setItems(removeItemFromArr(items, index))
  }

  const updateTitle = event => {
    setTitle(event.target.value)
  }

  const updatePendingItem = event => {
    setPendingItem(event.target.value)
  }

  const handleAddItem = () => {
    addItem(pendingItem)
    setPendingItem("")
  }

  const handleSave = () => {
    updateLists([...lists, { title, items }])
  }

  const toggleShow = () => {
    setShow(!show)
  }

  if (show) {
    return (
      <Wrapper>
        <HideButton type="button" aria-label="Delete Item" onClick={toggleShow}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.24 0.929993L7.93627 6.23249L2.63377 0.929993L0.866272 2.69749L6.16877 7.99999L0.866272 13.3025L2.63377 15.07L7.93627 9.76749L13.24 15.07L15.0075 13.3025L9.70502 7.99999L15.0075 2.69749L13.24 0.929993Z"
              fill="#4F4F4F"
            />
          </svg>
        </HideButton>
        <FormLabel htmlFor="title-input">Title</FormLabel>
        <TextInput id="title-input" type="text" onChange={updateTitle} />

        <FormLabel htmlFor="add-item">Items</FormLabel>

        <AddItemWrapper>
          <TextInput
            id="add-input"
            type="text"
            onChange={updatePendingItem}
            value={pendingItem}
          />
          <AddItemButton type="button" onClick={handleAddItem}>
            Add +
          </AddItemButton>
        </AddItemWrapper>

        <ItemList items={items} removeItem={removeItem} />

        <SaveButton type="button" onClick={handleSave}>
          Save
        </SaveButton>
      </Wrapper>
    )
  } else {
    return (
      <ShowButtonWrapper>
        <ShowButton type="button" onClick={toggleShow}>
          New List
        </ShowButton>
      </ShowButtonWrapper>
    )
  }
}
