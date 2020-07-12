import React from "react";
import {createPortal} from "react-dom";
import {CSSTransition} from "react-transition-group";
import {Wrapper} from "./styles";

export default function DialogContainer({children, show, close}){
  
  return createPortal(<CSSTransition in={show} timeout={200} classNames="fade-in">
    <Wrapper show={show}>
      {children}
      <section className="free-space" onClick={close}></section>
    </Wrapper>
  </CSSTransition>, document.getElementById("root"));
}