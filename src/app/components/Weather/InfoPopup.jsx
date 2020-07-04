import React from "react";
import {MdInfoOutline} from "react-icons/md";

const InfoPopup = React.memo(({children})=>{
  return (<div className="info">
    <MdInfoOutline size="20px"/>
    <p>{children}</p>
  </div>)
});

export default InfoPopup;