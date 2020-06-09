import React from "react";

import map from "../../data/world-map.json";

import {geoNaturalEarth1, geoPath, geoGraticule} from "d3-geo";
import {select} from "d3-selection";
import {format} from "d3-format";

import {Chart, Svg, CountriesStats} from "./styles";

export default function Globe({country}){
  const [countryStats, setCountryStats] = React.useState({})
  const svg = React.useRef();
  const numsFormat = format(",");
  
  var chart, update = false;
  
  React.useEffect(()=>{
    if(update){
      updateChart();
    }else{
      createChart()
    }
    getCountryStats();
  }, [country]);
  
  function getCountryStats(){
    let stats = map.features.find((c)=>{
      return c.properties.code === country;
    })
    if(stats){
      setCountryStats(stats.properties || {});
    }else{
      setCountryStats({})
    }
  }
  
  function createChart(){
    const height = svg.current.clientHeight, width = svg.current.clientWidth;
    const projection = geoNaturalEarth1().scale(100).translate([width/2,height/2]),
      path = geoPath().projection(projection),
      graticule = geoGraticule().outline();
      chart = select(svg.current).append("g");
      
    chart.selectAll("path").data(map.features).enter().append("path").attr("d",path).attr("stroke","white").attr("stroke-width",0.3)
    .attr("fill",(d,i)=>{
      return d.properties.code === country ? "red" : "#9e9e9e";
    })
    chart.selectAll("path.gr").data([graticule]).enter().append("path").classed("gr",true).attr("d",path).attr("stroke","#9e9e9e").attr("stroke-width",0.3).attr("fill","none");
    update = true;
  }
  
  function updateChart(){
    chart.transition().attr("fill",(d,i)=>{
      return d.properties.code === country ? "red" : "#9e9e9e";
    })
  }
  
  return (<>
    <Chart>
      <Svg ref={svg}></Svg>
    </Chart>
    <CountriesStats>
      <li><h3>{countryStats.name} ({country})</h3></li>
      <li><b>Continent:</b> {countryStats.continent}</li>
      <li><b>Population Estimate:</b> {countryStats.population ? numsFormat(countryStats.population) : "-"}</li>
    </CountriesStats>
  </>)
}