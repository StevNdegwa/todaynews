import React from "react";

import map from "../../data/world-map.json";

import * as d3 from "d3";

export default function Globe({country}){
  const svg = React.useRef();
  
  var chart, update = false;
  const width = 700, height = 400;
  const projection = d3.geoNaturalEarth1().scale(120).translate([width/2,height/2]),
    path = d3.geoPath().projection(projection),
    graticule = d3.geoGraticule().outline();
  
  React.useEffect(()=>{
    if(update){
      updateChart();
    }else{
      createChart()
    }
  }, [country])
  
  function createChart(){
    chart = d3.select(svg.current).attr("width",width).attr("height",height).append("g");
    chart.selectAll("path").data(map.features).enter().append("path").attr("d",path).attr("stroke","white").attr("stroke-width",0.3)
    .attr("fill",(d,i)=>{
      return d.properties.CountryCode === country ? "red" : "#eeeeee";
    })
    chart.selectAll("path.gr").data([graticule]).enter().append("path").classed("gr",true).attr("d",path).attr("stroke","black").attr("stroke-width",0.3).attr("fill","none");
    update = true;
  }
  
  function updateChart(){
    chart.transition().attr("fill",(d,i)=>{
      return d.properties.CountryCode === country ? "red" : "#eeeeee";
    })
  }
  
  return (<div><svg ref={svg}></svg></div>)
}