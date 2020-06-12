import React from "react"
import styled from "styled-components"
import AllListItem from "./AllListItem"

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 75px;
`

const Title = styled.h1`
  font-size: 39px;
  font-weight: 900;
  font-family: "Red Hat Display";
`

const Wrapper = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
`

export default function AllLists({ lists, updateLists, pickRandom }) {
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
            />
          )
        })}
      </Wrapper>
    </Container>
  )
}
