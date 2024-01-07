import React from 'react'
import { Block } from '../Common/block';

export const Motions = (list) => {
  


  const RandomPositionBlockEvent = (event, selectedOption) => {
    let cat = document.getElementById("Catty");
    cat.style.display = 'block';
    cat.style.position = 'absolute';
    let div = document.getElementById('PreviewArea');
    let rect = div.getBoundingClientRect();
   
    if (selectedOption === "mouse") {
      div.style.position = '';

      let left = Math.max(rect.left, Math.min(event.clientX, rect.right));
      let top = Math.max(rect.top, Math.min(event.clientY, rect.bottom));
      cat.style.left = left + 'px';
      cat.style.top = top + 'px';
    }
    else{
      div.style.position = 'relative';

     let divWidth = rect.right - rect.left;
     let divHeight = rect.bottom - rect.top;
    
     let left = Math.floor(Math.random() * divWidth);
     let top = Math.floor(Math.random() * divHeight);

     cat.style.left = left + 'px';
      cat.style.top = top + 'px';
    }

  }

  const StepsForwardBlockEvent=(e,text)=>{
  console.log(e);
  console.log(text);

  }

  const blockEvents = (e, selectedOption) => {
    switch (e.target.id) {
      case "PositionBlock":
        RandomPositionBlockEvent(e, selectedOption);
        break;
        case "StepsForwardBlock":
          StepsForwardBlockEvent(e, text);
        break;

        

      default:
        break;
    }


  }
  return (
    <>
       {list.list.list.map((item)=>{
        return <Block type={item.blockType} onclick={(e, se) => { blockEvents(e, se) }} />
      })}
      {/* <Block type="postionBlock" onclick={(e, se) => { blockEvents(e, se) }} /> */}
      
      {/* <Block type="stepsForward" onclick={(e, se) => { blockEvents(e, se) }} /> */}

    </>
  )
}
