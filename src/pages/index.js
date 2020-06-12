import React, {useState, useEffect} from "react"
import AddList from "../components/AddList"
import AllLists from '../components/AllLists'
import PickItem from '../components/PickItem'
import {pickRandomItemIndex, removeItemFromArr} from '../util'

export default function Home() {
  const [randomItem, setRandomItem] = useState(null);
  const [lists, setLists] = useState(JSON.parse(window.localStorage.getItem("lists")) || [])

  const pickRandom = (title) =>{
    const listIndex = lists.findIndex(el =>el.title == title);
    const list = lists[listIndex] || null;
    if(!list)
      return
    const randomIndex = pickRandomItemIndex(list.items);

    setRandomItem(list.items[randomIndex]);

    const newItems = removeItemFromArr(list.items, randomIndex);

    let newList = {...list};
    newList.items = newItems;
    
    
    let newLists = Object.assign([], lists, {[listIndex]: newList});
    if(newItems.length == 0){
      newLists = removeItemFromArr(newLists, listIndex);
    }
    setLists(newLists)
    
  }

  const updateLists = (newLists)=>{
    setLists(newLists);
  }
  useEffect(()=>{
    window.localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists])


  return(
    <>
      <AllLists 
        pickRandom = {pickRandom}
        lists = {lists}
        updateLists = {updateLists}
      />
      <PickItem 
        item={randomItem}
      />
      <AddList
        updateLists={updateLists}
        lists = {lists}
      />
    </>
  )
}
