import React from 'react';
import Editable from './editable';
import Dropdown from './dropdown';
import { useDrag } from 'react-dnd'
import { useRef, forwardRef,useImperativeHandle } from "react";
import { mergeRefs } from "react-merge-refs";
import { ItemTypes } from '../DnD/DragTypes';
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { StepsForwardBlockEvent,RandomPositionBlockEvent } from '../Events/blockEvents';

export const Block =  forwardRef((props, ref) => {
 
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.MOTION,
    item: { type:props.type },
 
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  const [selectedOption, setSelectedOption] = React.useState("mouse");
  const [text, setText] = React.useState('10');


  const MainBlock = () => {
    switch (props.type) {
      case "postionBlock":
        return PositionBlock()
      case "stepsForward":
        return StepsForwardBlock()
      case "randomDropdown1":
        return RandomBlock()
      case "rotateLeftBlock":
        return RotateLeftBlock();
      case "rotateRightBlock":
        return RotateRightBlock();
        case "glidePositionBlock":
          return GlidePositionBlock();
      default:
        return <></>
    }
  }
  useImperativeHandle(ref, () => ({
   
    triggerOnClick: ( ) => {
      switch (props.type) {
        case "postionBlock":
          return RandomPositionBlockEvent(null,selectedOption,text)
        case "stepsForward":
          return StepsForwardBlockEvent(null,text,selectedOption)
        case "randomDropdown1":
          return StepsForwardBlockEvent(null,text,selectedOption)
        case "rotateLeftBlock":
          return StepsForwardBlockEvent(null,text,selectedOption)
        case "rotateRightBlock":
          return RandomPositionBlockEvent(null,selectedOption,text)
          case "glidePositionBlock":
            return RandomPositionBlockEvent(null,selectedOption,text)
    }
   
    },
    }));

  const GlidePositionBlock=()=>{
    
    const handleInputChange = (e) => {
      setText(e.target.value);
    };
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };
    return (
      <>
        <div ref={mergeRefs([drag, ref])}
          id="GlidePositionBlock"
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
          }} class="flex flex-row flex-wrap bg-blue-500 text-white cursor-pointer blockPosition" onClick={(e) => { props.onclick(e, selectedOption,  text) }}>
          {"glide  "}
          <Editable id="glidePositionEdit" text={text} onchange={(e) => { handleInputChange(e) }} />
          {"secs to"}
          <Dropdown id="PositionGlideDropdown" selectedOption={selectedOption} onchange={(e) => { handleSelectChange(e) }} />
        </div>
      </>
    )

  }
  const PositionBlock = () => {

    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };
    return (
      <>
     <div ref={mergeRefs([drag, ref])}
          id="PositionBlock"
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
          }} class="flex flex-row flex-wrap bg-blue-500 text-white cursor-pointer blockPosition" onClick={(e) => { props.onclick(e, selectedOption,null) }}>
          {"go to  "}<Dropdown id="PositionDropdown" selectedOption={selectedOption} onchange={(e) => { handleSelectChange(e) }} />
        </div>
      </>
    )

  }

  const StepsForwardBlock = () => {

    const handleInputChange = (e) => {
      setText(e.target.value);
    };
    return (
      <>

<div ref={mergeRefs([drag, ref])}
          id="StepsForwardBlock"
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
          }} class="flex flex-row flex-wrap bg-blue-500 text-white cursor-pointer blockPosition"
          onClick={(e) => { props.onclick(e, text,null) }}>
          {"Move"}
          <Editable id="StepsForwardEdit" text={text} onchange={(e) => { handleInputChange(e) }} />
          {"steps"}
        </div>
      </>

    )
  }

  const RotateLeftBlock = () => {

    const handleRotateChange = (e) => {
      setText(e.target.value);
    };
    return (
      <>

<div ref={mergeRefs([drag, ref])}
          id="RotateLeftBlock"
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
          }} class="flex flex-row flex-wrap bg-blue-500 text-white cursor-pointer blockPosition"
          onClick={(e) => { props.onclick(e, text,null) }}>
          {"turn"}
          <FaArrowRotateLeft style={{
            alignSelf: "center",
            margin: "0.2rem"
          }} />
          <Editable id="StepsForwardEdit" text={text} onchange={(e) => { handleRotateChange(e) }} />
          {"degrees"}
        </div>
      </>

    )
  }

  const RotateRightBlock = () => {
    const handleRotateChange = (e) => {
      setText(e.target.value);
    };
    return (
      <>

<div ref={mergeRefs([drag, ref])}
          id="RotateRightBlock"
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
          }} class="flex flex-row flex-wrap bg-blue-500 text-white cursor-pointer blockPosition"
          onClick={(e) => { props.onclick(e, text,null) }}>
          {"turn"}
          <FaArrowRotateRight style={{
            alignSelf: "center",
            margin: "0.2rem"
          }} />
          <Editable id="StepsForwardEdit" text={text} onchange={(e) => { handleRotateChange(e) }} />
          {"degrees"}
        </div>
      </>

    )
  }

  const RandomBlock = () => {
    return (
      <div ref={mergeRefs([drag, ref])}
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move',
          }}
          className="flex flex-column flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"Move"}
          <Editable />
          {"steps"}
        </div>

    )
  }

  return <>{MainBlock()}</>
})
