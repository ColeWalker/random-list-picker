import React, { useState, useEffect } from "react"
import AddList from "../components/AddList"
import AllLists from "../components/AllLists"
import PickItem from "../components/PickItem"
import { pickRandomItemIndex, removeItemFromArr } from "../util"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FAD1E8;
  }
`

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  max-width: 1350px;
  margin: auto;
  > * {
    flex: 1;
  }

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`

const Left = styled.div`
  padding-right: 70px;

  @media screen and (max-width: 800px) {
    ${props =>
      props.showRandomItem &&
      `
      display: none;
    `}
    padding-right: 0;
  }
`
const Right = styled.div`
  @media screen and (max-width: 800px) {
    ${props =>
      !props.showRandomItem &&
      `
      display: none;
    `}
  }
`

export default function Home() {
  const [randomItem, setRandomItem] = useState(null)
  const [selectedList, setSelectedList] = useState("")
  const [showRandomItem, setShowRandomItem] = useState(false)

  const [lists, setLists] = useState(
     []
  )

  const pickRandom = title => {
    const listIndex = lists.findIndex(el => el.title === title)
    const list = lists[listIndex] || null
    if (!list) return
    const randomIndex = pickRandomItemIndex(list.items)

    setSelectedList(title)
    setRandomItem(list.items[randomIndex])

    const newItems = removeItemFromArr(list.items, randomIndex)

    let newList = { ...list }
    newList.items = newItems

    let newLists = Object.assign([], lists, { [listIndex]: newList })
    if (newItems.length === 0) {
      newLists = removeItemFromArr(newLists, listIndex)
    }
    setLists(newLists)
  }

  const updateLists = newLists => {
    setLists(newLists)
  }

  const toggleShow = () => {
    setShowRandomItem(!showRandomItem)
  }
  useEffect(()=>{
    setLists(JSON.parse(window.localStorage.getItem("lists")) || [])
  },[])
  useEffect(() => {
    window.localStorage.setItem("lists", JSON.stringify(lists))
  }, [lists])

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Left showRandomItem={showRandomItem}>
          <AllLists
            pickRandom={pickRandom}
            toggleShowRandom={toggleShow}
            lists={lists}
            updateLists={updateLists}
          />
          <AddList updateLists={updateLists} lists={lists} />
        </Left>
        <Right showRandomItem={showRandomItem}>
          {randomItem && (
            <PickItem
              selectedList={selectedList}
              toggleShow={toggleShow}
              item={randomItem}
            />
          )}
        </Right>
      </Wrapper>
    </>
  )
}
