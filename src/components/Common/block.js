import React from 'react';
import Editable from './editable';
import Dropdown from './dropdown';
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../DnD/DragTypes';

export const Block = (props) => {

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.MOTION,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const MainBlock=()=>{

    switch (props.type) {
      case "random":
        return RandomBlock()
        break;
    
      default:
        return<></>
        break;
    }
  }
  
  const RandomBlock=()=>{
    return (
      <>
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
        }} 
      className="flex flex-column flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"Move"} 
            <Editable/>
          {"steps"}
      </div>
      </>
  
    )
  }
  
  return <>{MainBlock()}</>
}
