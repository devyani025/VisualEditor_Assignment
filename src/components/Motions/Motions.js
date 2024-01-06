import React from 'react'
import { Block } from '../Common/block';

export const Motions = () => {

  const clickBlock=()=>{
    let cat =document.getElementById("Catty");

    cat.style.height=200;

  }
  return (
    <>
   <Block type="randomDropdown" onclick={clickBlock}/>
 
    </>
  )
}
