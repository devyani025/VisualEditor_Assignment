import React from 'react'
import { Block } from '../Common/block';
import { blockEvents } from '../Events/blockEvents';
import { useRef } from 'react';
export const Looks = (props) => {
  const blockRefs = useRef([]);
  return (
    <>
       {props.list.map((item,index)=>{
        return <Block  
        key={index}
        ref={(ref) => {
          blockRefs.current[index] = ref;
        }} type={item.blockType} onclick={(e, se,t) => { blockEvents(e, se,t) }} />
      })}
  
    </>
  )
}
