import React from "react";


const PageLoader = React.memo(()=>{
  return (
    <div style={{minHeight:"200px",height:"100%",width:"100%", gridColumn:"1 /span 4", display:"flex",justifyContent:"center",alignItems:"center"}}>
      <svg width="200px" height="200px">
        <linearGradient id="paint1" x1="0" y1="0" x2="100%" y2="0" >
          <stop offset="0%" stopColor="#00e676"/>
          <stop offset="50%" stopColor="#b2ff59"/>
          <stop offset="100%" stopColor="#eeff41"/>
        </linearGradient>
        <linearGradient id="paint2" x1="0" y1="0" x2="100%" y2="0" >
          <stop offset="0%" stopColor="#b2ff59"/>
          <stop offset="50%" stopColor="#eeff41"/>
          <stop offset="100%" stopColor="#00e676"/>
        </linearGradient>
        <linearGradient id="paint3" x1="0" y1="0" x2="100%" y2="0" >
          <stop offset="0%" stopColor="#eeff41"/>
          <stop offset="50%" stopColor="#00e676"/>
          <stop offset="100%" stopColor="#b2ff59"/>
        </linearGradient>
        <text className="pageLoader" x="50%" y="95%" fontSize="100" fontWeight="bold" stroke="#00e676" strokeWidth="3" strokeLinejoin="round" fontStretch="ultra-expanded" fontFamily="Impact" textAnchor="middle" textDecoration="underline" fill="url(#paint1)" >
          TN
        </text>
      </svg>
    </div>
  )
})

export default PageLoader;