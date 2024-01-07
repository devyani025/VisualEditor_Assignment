import React from 'react'
import { Block } from '../Common/block';
import { blockEvents } from '../Events/blockEvents';
export const Motions = (props) => {
  


  return (
    <>
       {props.list.map((item)=>{
        return <Block type={item.blockType} onclick={(e, se,t) => { blockEvents(e, se,t) }} />
      })}
      {/* <Block type="postionBlock" onclick={(e, se) => { blockEvents(e, se) }} /> */}
      
      {/* <Block type="stepsForward" onclick={(e, se) => { blockEvents(e, se) }} /> */}
      {/* <Block type="postionBlock" onclick={(e, se) => { blockEvents(e, se) }} />
      <Block type="postionBlock" onclick={(e, se, t) => { blockEvents(e, se, t) }} />

      <Block type="stepsForward" onclick={(e, se, t) => { blockEvents(e, se, t) }} />

      <Block type="rotateLeftBlock" onclick={(e, se, t) => { blockEvents(e, se, t) }} />

      <Block type="rotateRightBlock" onclick={(e, se, t) => { blockEvents(e, se, t) }} />

      <Block type="glidePositionBlock" onclick={(e, se, t) => { blockEvents(e, se, t) }} />
 */}

    </>
  )
}
