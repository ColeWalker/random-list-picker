import React, { useState } from "react"
import styled from "styled-components"
import EditList from "./EditList"

const Item = styled.li`
  border-radius: 5px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`

const Name = styled.button`
  font-size: 20px;
  font-weight: 700;
  font-family: "Red Hat Display";
  color: #120e21;
  text-decoration: none;
  background: none;
  padding: 0;
  box-shadow: none;
  border: none;
  cursor: pointer;
`

const Edit = styled.button`
  font-size: 20px;
  font-weight: 700;
  font-family: "Red Hat Display";
  color: #120e21;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`

export default function AllListItem({
  el,
  pickRandom,
  toggleShowRandom,
  updateLists,
  lists,
}) {
  const [showEdit, setShowEdit] = useState(false)

  const toggleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  return (
    <>
      <Item>
        <Name
          onClick={() => {
            pickRandom(el.title)
            toggleShowRandom()
          }}
          type="button"
        >
          {el.title}
        </Name>
        <Edit aria-label="Edit" type="button" onClick={toggleShowEdit}>
          <svg
            width="22"
            height="7"
            viewBox="0 0 22 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.75 3.375C13.75 5.24062 12.3664 6.75 10.6562 6.75C8.94609 6.75 7.5625 5.24062 7.5625 3.375C7.5625 1.50938 8.94609 0 10.6562 0C12.3664 0 13.75 1.50938 13.75 3.375ZM18.2188 0C16.5086 0 15.125 1.50938 15.125 3.375C15.125 5.24062 16.5086 6.75 18.2188 6.75C19.9289 6.75 21.3125 5.24062 21.3125 3.375C21.3125 1.50938 19.9289 0 18.2188 0ZM3.09375 0C1.38359 0 0 1.50938 0 3.375C0 5.24062 1.38359 6.75 3.09375 6.75C4.80391 6.75 6.1875 5.24062 6.1875 3.375C6.1875 1.50938 4.80391 0 3.09375 0Z"
              fill="black"
            />
          </svg>
        </Edit>
      </Item>
      <EditList
        lists={lists}
        list={el}
        updateLists={updateLists}
        show={showEdit}
        toggleShow={toggleShowEdit}
      />
    </>
  )
}
