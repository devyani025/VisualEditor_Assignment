import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./DnD/DragTypes";

export const  MidArea =( ) => {

 // for ref follow below links
/**
 * https://codesandbox.io/p/sandbox/admiring-cannon-nrtpfq?file=%2Fsrc%2FGame.js%3A10%2C4
 * https://react-dnd.github.io/react-dnd/docs/tutorial#make-the-board-squares-droppable
 * https://react-dnd.github.io/react-dnd/docs/tutorial
 */
  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: ItemTypes.MOTION,
  /**
   * drop is a onDrop kya kerna wala function
   */
  //   drop: () => moveKnight(x, y),
  //   collect: monitor => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }), [x, y])
const [list , setList] = React.useState([])

  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemTypes.MOTION,
    drop : () => {
      console.log(" I AM DROPPED !!!!")
    }
  }),[list])



  return <div className="flex-1 h-full overflow-auto" ref={drop}> 
    {"mid area"} 
    {list}
    </div>;
}
