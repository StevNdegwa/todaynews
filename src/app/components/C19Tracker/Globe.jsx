import React from "react";

import map from "../../data/world-map.json";

import {geoNaturalEarth1, geoPath, geoGraticule} from "d3-geo";
import {select} from "d3-selection";

export default function Globe({country}){
  const svg = React.useRef();
  
  var chart, update = false;
  const width = 700, height = 400;
  const projection = geoNaturalEarth1().scale(120).translate([width/2,height/2]),
    path = geoPath().projection(projection),
    graticule = geoGraticule().outline();
  
  React.useEffect(()=>{
    if(update){
      updateChart();
    }else{
      createChart()
    }
  }, [country])
  
  function createChart(){
    chart = select(svg.current).attr("width",width).attr("height",height).append("g");
    chart.selectAll("path").data(map.features).enter().append("path").attr("d",path).attr("stroke","white").attr("stroke-width",0.3)
    .attr("fill",(d,i)=>{
      return d.properties.CountryCode === country ? "red" : "#eeeeee";
    })
    chart.selectAll("path.gr").data([graticule]).enter().append("path").classed("gr",true).attr("d",path).attr("stroke","#eeeeee").attr("stroke-width",0.3).attr("fill","none");
    update = true;
  }
  
  function updateChart(){
    chart.transition().attr("fill",(d,i)=>{
      return d.properties.CountryCode === country ? "red" : "#eeeeee";
    })
  }
  
  return (<div><svg ref={svg}></svg></div>)
}