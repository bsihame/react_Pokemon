import React, { useState, useEffect } from "react";
import axios from "axios"

const Pokemon = () => {
  const [num, setNum] = useState();
  const[name, setName] = useState();
  const [moves, setMoves] = useState();


  useEffect(()=> {
    async function getData () {
     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
     setName((res.data.name).toUpperCase());
     setMoves(res.data.moves.length)
     console.log(res.data.moves);

    }
    getData()
  })
  

  return(
   <>
   <h1>You choose <span style={{color:"red"}}> {num} </span></h1>
   <h1>My name is <span>{name}</span></h1>
   <h1>I have <span>{moves}</span></h1>
   <select name="" id="" onChange={(e)=>setNum(e.target.value)}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
   </select>
   </>
  )
}
export default Pokemon;