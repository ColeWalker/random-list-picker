import React from "react"
import AddList from "../components/AddList"
import AllLists from '../components/AllLists'


export default function Home() {
  return(
    <>
      <AllLists />
      <AddList />
    </>
  )
}
