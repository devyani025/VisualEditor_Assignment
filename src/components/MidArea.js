import React , {useContext} from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./DnD/DragTypes";
import { Block } from "./Common/block";
import { blockEvents } from "./Events/blockEvents";
import { useRef } from "react";
import { AppContext } from "../App";


export const  MidArea =(props ) => {

  let context = useContext(AppContext)
  const [list , setList] = React.useState([]);
  const blockRefs = useRef([]);
  function calculateBlockPosition(clientOffset) {
    // Convert the client offset to pixels
    const x = clientOffset.x / window.devicePixelRatio;
    const y = clientOffset.y / window.devicePixelRatio;
   
    // Return the block position
    return { x, y };
   }
  const handleDrop=(item,monitor)=>{
     const clientOffset = monitor.getClientOffset();

     // Calculate the block position
     const blockPosition = calculateBlockPosition(clientOffset);
    
     // Create a new block object
     const newBlock = {
       id: Math.random().toString(),
       blockType: item.type,
       position: blockPosition,
     };
    
     // Add the new block to the list
     setList((prevList) => [...prevList, newBlock]);
    // setList([...list,l]);
  }
  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemTypes.MOTION,
    drop : (item,monitor) => {
      console.log(item)
      handleDrop(item,monitor)
    }
  }),[list])

  const handleClean=()=>{
    setList([]);
  }

  const handleReload = () => {
    window.location.reload();
  };

  const handleParentClick = (e) => {
    props.midAreaRef.current.forEach((block) => {
      block.triggerOnClick(e)
    });
    // context.setShowCloud(false)
  };
 

  return <div className="flex-1 h-full overflow-auto" ref={drop}> 
   
    <buttonDiv className="buttonDiv">
    <button className="ButtonMidS" onClick={handleParentClick}>Run me</button>
    <button className="ButtonMidS" onClick={handleClean}>Clear</button>
    <button className="ButtonMidS" onClick={handleReload}>Reset</button>
   </buttonDiv>
     {list.map((item,index)=>{
        return <Block 
        style={{ position: 'absolute', top: item.position.y, left: item.position.x }}
         
        ref={(ref) => (props.midAreaRef.current[index] = ref)}
        type={item.blockType} 
        onclick={(e, se,t) => {
           blockEvents(e, se,t) 
          }} />
      })}
    </div>;
}
