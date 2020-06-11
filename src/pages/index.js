import React, {useState} from "react"
import AddList from "../components/AddList"
import AllLists from '../components/AllLists'
import PickItem from '../components/PickItem'
import {pickRandomItemIndex, removeItemFromArr} from '../util'

export default function Home() {
  const [randomItem, setRandomItem] = useState(null);

  const pickRandom = (title) =>{
    const lists = JSON.parse(window.localStorage.getItem("lists")) || [];
    const listIndex = lists.findIndex(el =>el.title == title);
    const list = lists[listIndex];
    const randomIndex = pickRandomItemIndex(list.items);

    setRandomItem(list.items[randomIndex]);

    const newItems = removeItemFromArr(list.items, randomIndex);

    let newList = {...list};
    newList.items = newItems;
    const newLists = Object.assign([], lists, {[listIndex]: newList});
    console.log(newLists);
    window.localStorage.setItem("lists", JSON.stringify(newLists));
  }
  return(
    <>
      <AllLists 
        pickRandom = {pickRandom}
      />
      <PickItem 
        item={randomItem}
      />
      <AddList />
    </>
  )
}
