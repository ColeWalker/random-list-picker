import React from "react"
import styled from "styled-components"
import AllListItem from "./AllListItem"

const Container = styled.div`
  max-width: 800px;
  margin-bottom: 75px;
`

const Title = styled.h1`
  font-size: 39px;
  font-weight: 900;
  font-family: "Red Hat Display";
  margin-bottom: 25px;
  margin-top: 25px;
`

const Wrapper = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
`

export default function AllLists({
  lists,
  toggleShowRandom,
  updateLists,
  pickRandom,
}) {
  return (
    <Container>
      <Title>Lists</Title>
      <Wrapper>
        {lists.map((el, index) => {
          return (
            <AllListItem
              el={el}
              pickRandom={pickRandom}
              lists={lists}
              updateLists={updateLists}
              key={el.title + index}
              toggleShowRandom={toggleShowRandom}
            />
          )
        })}
      </Wrapper>
    </Container>
  )
}
