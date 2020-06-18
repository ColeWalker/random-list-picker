import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;
`

const Item = styled.p`
  font-family: "Red Hat Display";
  font-weight: 700;
  font-size: 39px;
  padding: 30px 15px;
`

const HideButton = styled.button`
  background: none;
  padding: 15px;
  margin: 0;
  border: none;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    align-self: flex-end;
    padding-top: 0;
  }
`
const Title = styled.h2`
  font-size: 39px;
  font-weight: 900;
  font-family: "Red Hat Display";
  margin-top: 25px;
  margin-bottom: 25px;
`

export default function PickItem({ item, selectedList, toggleShow }) {
  return (
    <>
      <Title>{selectedList}</Title>
      <Wrapper>
        <HideButton type="button" onClick={toggleShow}>
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
        <Item>{item}</Item>
      </Wrapper>
    </>
  )
}
