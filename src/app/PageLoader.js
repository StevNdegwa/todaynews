import React from "react";

const PageLoader = React.memo(()=>{
  return (
    <div style={{minHeight:"200px",height:"100%",width:"100%", gridColumn:"1 /span 4", display:"flex",justifyContent:"center",alignItems:"center"}}>
      <svg width="200px" height="200px">
        <linearGradient id="paint1" x1="0" y1="0" x2="100%" y2="0" >
          <stop offset="0%" stop-color="#00e676"/>
          <stop offset="50%" stop-color="#b2ff59"/>
          <stop offset="100%" stop-color="#eeff41"/>
        </linearGradient>
        <linearGradient id="paint2" x1="0" y1="0" x2="100%" y2="0" >
          <stop offset="0%" stop-color="#b2ff59"/>
          <stop offset="50%" stop-color="#eeff41"/>
          <stop offset="100%" stop-color="#00e676"/>
        </linearGradient>
        <linearGradient id="paint3" x1="0" y1="0" x2="100%" y2="0" >
          <stop offset="0%" stop-color="#eeff41"/>
          <stop offset="50%" stop-color="#00e676"/>
          <stop offset="100%" stop-color="#b2ff59"/>
        </linearGradient>
        <text x="50%" y="95%" fontSize="100" fontWeight="bold" stroke="#00e676" strokeWidth="3" strokeLinejoin="round" fontStretch="ultra-expanded" fontFamily="Impact" textAnchor="middle" textDecoration="underline">
          <animate attributeName="fill" dur="1s" values="url(#paint1);url(#paint2);url(#paint3)" repeatCount="indefinite"/>
          <animate attributeName="opacity" dur="1s" values="0.5;1" repeatCount="indefinite"/>
          TN
        </text>
      </svg>
    </div>
  )
})

export default PageLoader;