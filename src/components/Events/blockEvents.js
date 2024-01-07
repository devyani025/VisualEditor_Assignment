  /**
   * 
   * Motions Events 
   */
  export const RandomPositionBlockEvent = (event, selectedOption,t) => {
    debugger;
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
    else {
      div.style.position = 'relative';

      let divWidth = rect.right - rect.left;
      let divHeight = rect.bottom - rect.top;

      let left = Math.floor(Math.random() * divWidth);
      let top = Math.floor(Math.random() * divHeight);

      cat.style.left = left + 'px';
      cat.style.top = top + 'px';
    }

  }

  export const GlidePositionBlockEvent =(event, selectedOption,t) => {
    debugger;
    let cat = document.getElementById("Catty");
    cat.style.display = 'block';
    cat.style.position = 'absolute';
    let div = document.getElementById('PreviewArea');
    let rect = div.getBoundingClientRect();
    let tt=parseInt(t);
    if (selectedOption === "mouse") {
      div.style.position = '';

      let left = Math.max(rect.left, Math.min(event.clientX, rect.right));
      let top = Math.max(rect.top, Math.min(event.clientY, rect.bottom));
      cat.style.transition = `all ${tt}ms ease-out`;

      cat.style.left = left + 'px';
      cat.style.top = top + 'px';
    }
    else {
      div.style.position = 'relative';

      let divWidth = rect.right - rect.left;
      let divHeight = rect.bottom - rect.top;

      let left = Math.floor(Math.random() * divWidth);
      let top = Math.floor(Math.random() * divHeight);
      cat.style.transition = `all ${tt}ms ease-out`;

      cat.style.left = left + 'px';
      cat.style.top = top + 'px';
    }

  }

  export const StepsForwardBlockEvent = (e, text,t) => {
 debugger;
    let cat = document.getElementById("Catty");
    cat.style.display = 'block';
    cat.style.position = 'absolute';
    let div = document.getElementById('PreviewArea');
    let rect = div.getBoundingClientRect();

    let currentLeft = parseInt(window.getComputedStyle(cat).left);
    let currentRight = parseInt(window.getComputedStyle(cat).right);

    let newLeft = currentLeft + parseInt(text);
    let newRight_ = currentRight - parseInt(text);

    let catu = cat.getBoundingClientRect();
    let newLeft_ = Math.max(0, Math.min(rect.width - catu.width, newLeft));

    // Apply new left 
    if (newRight_ > 0)
      cat.style.left = `${newLeft}px`;


  }

  export const RotateBlockBlockEvent = (e, text,t) => {

    let cat = document.getElementById("Catty");
    cat.style.display = 'block';
    cat.style.position = 'absolute';
    let div = document.getElementById('PreviewArea');
    let rect = div.getBoundingClientRect();
    let matrix = window.getComputedStyle(cat).transform;
    let values = matrix == 'none' ? 0 : matrix.match(/matrix\(([^)]+)\)/i)[1].split(',').map(parseFloat);
    let rotation = values == 0 ? 0 : Math.atan2(values[1], values[0]) * (180 / Math.PI);
    if (e.target.id === 'RotateRightBlock') {
      rotation += parseInt(text);
    } else {
      rotation -= parseInt(text);
    }
    rotation = ((rotation % 360) + 360) % 360;
    cat.style.transform = `rotate(${rotation}deg)`;
  }
  export const blockEvents = (e, selectedOption, t) => {
    switch (e.target.id) {
      case "PositionBlock":
        RandomPositionBlockEvent(e, selectedOption, t);
        break;
      case "StepsForwardBlock":
        StepsForwardBlockEvent(e, selectedOption, t);
        break;
      case "RotateRightBlock":
        RotateBlockBlockEvent(e, selectedOption, t);
        break;
      case "RotateLeftBlock":
        RotateBlockBlockEvent(e, selectedOption, t);
      case "GlidePositionBlock":
        GlidePositionBlockEvent(e, selectedOption, t);
        break;
      default:
        break;
    }


  }

  /**
   *  Looks events 
   */
  export const SayEvent = (e, text,t) => {
       let cat = document.getElementById("Catty");
       let cloud = document.getElementById("cloud");
       cat.style.display = 'block';
       cat.style.position = 'absolute';

       let currentLeft = parseInt(window.getComputedStyle(cat).left);
       let currentRight = parseInt(window.getComputedStyle(cat).right);
      cloud.style.left = currentLeft ;
      cloud.style.right = currentRight ;
      //  let newLeft = currentLeft + parseInt(text);
      //  let newRight_ = currentRight - parseInt(text);
        // setCloudPosition({ currentLeft, currentRight });
   
     }
