import React from "react";

import {select, selectAll} from "d3-selection";
import {arc, pie} from "d3-shape";
import {schemeSet1 as paint} from "d3-scale-chromatic";
import {format} from "d3-format";

import {Wrapper, Svg} from "./styles";

export default function PieChart({data}){
  const [canvas, setCanvas] = React.useState(null);
  let svg = React.useRef();
  
  let innerArc = arc().innerRadius(20).outerRadius(100),
      outerArc = arc().innerRadius(20).outerRadius(200),
      Pie = pie().value((d)=>{
        return d.value;
      })
  let numsFormat = format(",");
  let indicatorExtensionLn = 30;
      
  React.useEffect(()=>{
    if(canvas){
      updateChart();
    }else{
      createChart();
    }
  },[data])
  
  function createChart(){
    let canvas = select(svg.current).append("g").classed("canvas", true).attr("transform", "translate(250, 200)");
    setCanvas(canvas);
    //Arcs
    canvas.selectAll("path.inner-arcs").data(Pie(data)).enter().append("path").classed("inner-arcs", true).attr("d",innerArc)
    .attr("fill", (d,i)=>{
      return paint[i];
    }).append("title")
    .text((d,i)=>{
      return d ? numsFormat(d.data.value) : 0
    })
    
    //Label  Indicators
    canvas.selectAll("polyline.indicators").data(Pie(data)).enter().append("polyline").classed("indicators", true)
    .attr("points", (d,i)=>{
      let p1 = innerArc.centroid(d), //first point
          p2 = outerArc.centroid(d), //second point
          p3 = [...p2]; //Third Point
          p3[0] += p2[0] > 0 ? indicatorExtensionLn : -(indicatorExtensionLn);
      return `${p1},${p2},${p3}`;
    }).attr("stroke", "#212121").attr("fill", "none")
    
    //Data Labels
    canvas.selectAll("text.labels").data(Pie(data)).enter().append("text").classed("labels",  true)
    .attr("x", (d,i)=>{
      let x = outerArc.centroid(d)[0];
          x += x > 0 ? indicatorExtensionLn : -(indicatorExtensionLn);
      return x;
    }).attr("y", (d,i)=>{
      return outerArc.centroid(d)[1];
    }).attr("text-anchor", (d,i)=>{
      return outerArc.centroid(d)[0] > 0 ? "start" : "end";
    }).text((d,i)=>{
      return d.data.label;
    })
  }
  
  function updateChart(){
    //Update chart pieces
    canvas.selectAll("path.inner-arcs").data(Pie(data)).attr("d", innerArc).select("title")
    .text((d)=>{
      return d ? numsFormat(d.data.value) : 0;
    });
    
    //Update Label Indicators
    canvas.selectAll("polyline.indicators").data(Pie(data))
    .attr("points", (d,i)=>{
      let p1 = innerArc.centroid(d), //first point
          p2 = outerArc.centroid(d), //second point
          p3 = [...p2]; //Third Point
          p3[0] += p2[0] > 0 ? indicatorExtensionLn : -(indicatorExtensionLn);
      return `${p1},${p2},${p3}`;
    })
    
    //Update Labels
    canvas.selectAll("text.labels").data(Pie(data))
    .attr("x", (d,i)=>{
      let x = outerArc.centroid(d)[0];
          x += x > 0 ? indicatorExtensionLn : -(indicatorExtensionLn);
      return x;
    }).attr("y", (d,i)=>{
      return outerArc.centroid(d)[1];
    }).attr("text-anchor", (d,i)=>{
      return outerArc.centroid(d)[0] > 0 ? "start" : "end";
    })
  }
  
  return (<Wrapper>
    <Svg ref={svg}></Svg>
  </Wrapper>)
}