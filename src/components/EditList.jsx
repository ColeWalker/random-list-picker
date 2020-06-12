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
  margin: 15px auto;

  ${props =>
    !props.show &&
    `

    display: none;

  `}
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
  cursor: pointer;
`

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 45px;
  border: none;
  margin-top: 10px;
  font-family: Alegreya Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;

  width: 25%;
  color: #ffffff;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const SaveButton = styled(Button)`
  background: #04a449;
`

const DeleteButton = styled(Button)`
  background: #6e3031;
  margin-right: 10px;
`

const HideButton = styled.button`
  background: none;
  padding: 10px;
  margin: 0;
  border: none;
  cursor: pointer;
  align-self: flex-end;
`

export default function EditList({
  lists,
  updateLists,
  list,
  show,
  toggleShow,
}) {
  const [items, setItems] = useState(list.items || [])
  const [title, setTitle] = useState(list.title || "")
  const [pendingItem, setPendingItem] = useState("")

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
    const listIndex = lists.findIndex(el => el.title === title)
    const newList = { title, items }
    let newLists = Object.assign([], lists, { [listIndex]: newList })
    updateLists(newLists)
  }

  const handleDelete = () => {
    const listIndex = lists.findIndex(el => el.title === title)
    const newLists = removeItemFromArr(lists, listIndex)
    updateLists(newLists)
  }

  return (
    <Wrapper show={show}>
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
      <TextInput
        id="title-input"
        type="text"
        onChange={updateTitle}
        value={title}
      />

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
      <ButtonWrapper>
        <DeleteButton type="button" onClick={handleDelete}>
          Delete
        </DeleteButton>
        <SaveButton type="button" onClick={handleSave}>
          Save
        </SaveButton>
      </ButtonWrapper>
    </Wrapper>
  )
}
