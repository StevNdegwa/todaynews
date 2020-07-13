import React from "react";
import {createPortal} from "react-dom";
import {CSSTransition} from "react-transition-group";
import {Wrapper} from "./styles";

const DialogContainer = React.forwardRef(({children, show, close}, ref)=>{
  
  return createPortal(<CSSTransition in={show} timeout={200} classNames="fade-in">
    <Wrapper show={show} id="dialogcontainer" ref={ref}>
      {children}
      <section className="free-space" onClick={close}></section>
    </Wrapper>
  </CSSTransition>, document.getElementById("root"));
});

export default DialogContainer;