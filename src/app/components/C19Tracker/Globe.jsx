import React from "react";

import map from "../../data/world-map.json";

import {geoNaturalEarth1, geoPath, geoGraticule} from "d3-geo";
import {select} from "d3-selection";

import {Svg} from "./styles";

export default function Globe({country}){
  const svg = React.useRef();
  
  var chart, update = false;
  
  
  React.useEffect(()=>{
    if(update){
      updateChart();
    }else{
      createChart()
    }
  }, [country])
  
  function createChart(){
    const height = svg.current.clientHeight, width = svg.current.clientWidth;
    const projection = geoNaturalEarth1().scale(100).translate([width/2,height/2]),
      path = geoPath().projection(projection),
      graticule = geoGraticule().outline();
      chart = select(svg.current).append("g");
      
    chart.selectAll("path").data(map.features).enter().append("path").attr("d",path).attr("stroke","white").attr("stroke-width",0.3)
    .attr("fill",(d,i)=>{
      return d.properties.CountryCode === country ? "red" : "#9e9e9e";
    })
    chart.selectAll("path.gr").data([graticule]).enter().append("path").classed("gr",true).attr("d",path).attr("stroke","#9e9e9e").attr("stroke-width",0.3).attr("fill","none");
    update = true;
  }
  
  function updateChart(){
    chart.transition().attr("fill",(d,i)=>{
      return d.properties.CountryCode === country ? "red" : "#9e9e9e";
    })
  }
  
  return (<div><Svg ref={svg}></Svg></div>)
}