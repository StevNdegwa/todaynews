import React from "react";

import {MdCall, MdEmail} from "react-icons/md";

import Header from "../Header";
import {Content, Contacts, Item} from "./styles";

export default function ContactUs(){
  return (<>
    <Header search={false}/>
    <Content>
      <Contacts>
        <Item><h2>To reach out</h2></Item>
        <Item><MdEmail size="1.2em"/> <p>sndegwa.n@outlook.com</p></Item>
        <Item><MdCall size="1.2em"/> <p>0702 297 962</p></Item>
      </Contacts>
    </Content>
  </>)
}