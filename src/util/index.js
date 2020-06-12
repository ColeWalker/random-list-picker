export const pickRandomItemIndex = (arr) =>{
    const randIndex = (Math.floor(Math.random() * Math.floor(arr.length-1)));
    return randIndex;
}

export const removeItemFromArr = (arr, index) =>{
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

