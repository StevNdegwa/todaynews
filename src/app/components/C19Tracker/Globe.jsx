import React from "react";

import map from "../../data/world-map.json";

import {geoNaturalEarth1, geoPath, geoGraticule, geoCentroid, geoCircle} from "d3-geo";
import {select} from "d3-selection";
import {format} from "d3-format";

import {Chart, Svg, CountriesStats} from "./styles";

export default function Globe({country}){
  const [countryStats, setCountryStats] = React.useState({});
  const [created, setCreated] = React.useState(false);
  
  const svg = React.useRef();
  const numsFormat = format(",");
  
  const height = 400, width = 600;
  
  const projection = geoNaturalEarth1().scale(100).translate([width/2,height/2]),
      graticule = geoGraticule().outline(),
      path = geoPath().projection(projection),
      circle = geoCircle().radius(20);
      
  React.useEffect(()=>{
    if(created){
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
    var chart = select(svg.current).append("g");
    chart.selectAll("path.map").data(map.features).enter().append("path").classed("map", true).attr("d",path).attr("stroke","white").attr("stroke-width",0.3)
    .attr("fill",(d,i)=>{
      if(d.properties.code === country){
        circle.center(geoCentroid(d));
        return "red"
      }else{
        return "#9e9e9e";
      }
    })
    chart.append("path").classed("indicator",true).datum(circle()).attr("d",path).attr("stroke","red").attr("stroke-width",0.5).attr("fill","none");
    chart.selectAll("path.gr").data([graticule]).enter().append("path").classed("gr",true).attr("d",path).attr("stroke","#9e9e9e").attr("stroke-width",0.5).attr("fill","none");
    
    setCreated(true);
  }
  
  function updateChart(){
    var chart = select(svg.current);
    chart.selectAll("path.map").attr("fill",(d,i)=>{
      if(d.properties.code === country){
        circle.center(geoCentroid(d));
        return "red"
      }else{
        return "#9e9e9e";
      }
    })
    chart.select("path.indicator").datum(circle()).attr("d",path)
  }
  
  return (<>
    <Chart>
      <Svg ref={svg}></Svg>
    </Chart>
    <CountriesStats>
      <li><h3>More details...</h3></li>
      <li><b>Continent:</b> {countryStats.continent}</li>
      <li><b>Population Estimate:</b> {countryStats.population ? numsFormat(countryStats.population) : "-"}</li>
    </CountriesStats>
  </>)
}