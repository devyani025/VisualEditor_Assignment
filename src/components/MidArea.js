import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./DnD/DragTypes";
import { Block } from "./Common/block";
import { blockEvents } from "./Events/blockEvents";

export const  MidArea =(props ) => {

  const [list , setList] = React.useState([])
  const handleDrop=(item)=>{
     let l= {id : 1 , blockType:item.type }
    setList([...list,l]);
  }
  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemTypes.MOTION,
    drop : (item) => {
      console.log(item)
      handleDrop(item)
    }
  }),[list])



  return <div className="flex-1 h-full overflow-auto" ref={drop}> 
    {"mid area"} 
    
       {list.map((item)=>{
        return <Block type={item.blockType} onclick={(e, se,t) => { blockEvents(e, se,t) }} />
      })}
    </div>;
}
