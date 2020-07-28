import React from "react";

import {geoNaturalEarth1, geoMercator, geoPath, geoGraticule, geoCentroid, geoCircle} from "d3-geo";
import {scaleSequential, scaleLinear} from "d3-scale";
import {axisBottom} from "d3-axis";
import {interpolateBlues, interpolateTurbo} from "d3-scale-chromatic";
import {interpolateRgb} from "d3-interpolate";
import {extent} from "d3-array";
import {select} from "d3-selection";
import {format} from "d3-format";

import map from "../../data/world-map.json";
import {Chart, Svg, CountriesStats} from "./styles";

export default function Globe({country, dataset}){
  const [countryStats, setCountryStats] = React.useState({});
  const [chart, setChart] = React.useState(null);
  
  let svg = React.useRef();
  let numsFormat = format(",");
  
  let  height = 400, width = 600;
  
  let projection = geoNaturalEarth1().scale(100).translate([width / 2, height / 2]),
      graticule = geoGraticule().outline(),
      path = geoPath().projection(projection),
      circle = geoCircle().radius(20),
      totalConfirmedextent = extent(dataset.Countries, (d)=>d.TotalConfirmed),
      paint = scaleSequential(totalConfirmedextent, interpolateRgb("#9696f5", "#0000ff")),
      xScale = scaleLinear(totalConfirmedextent, [0, 300]),
      legend  = axisBottom(scaleLinear(totalConfirmedextent, [0, 400])).ticks(5)
      
  React.useEffect(()=>{
    if(chart){
      
      updateChart();
    
    }else{
      
      createChart();
    
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
    let chart = select(svg.current).select("g.chart");
    
    setChart(chart);
    
    chart.selectAll("path.map")
      .data(map.features)
      .join("path")
      .classed("map", true)
      .attr("d", path)
      .attr("stroke", "white")
      .attr("stroke-width", 0.5)
      .attr("fill", (d)=>{
        try{
          
          if(d.properties.code === country){
            
            circle.center(geoCentroid(d));
            
            return "red";
          }
          
          return paint(dataset.Countries.find((c)=>c.CountryCode === d.properties.code).TotalConfirmed);
          
        }catch(error){
          
          return "#9e9e9e";
          
        }
      })
      
      chart.append("path")
        .datum(graticule)
        .classed("gr", true)
        .attr("d", path)
        .attr("stroke", "#9e9e9e")
        .attr("stroke-width", 0.5)
        .attr("fill","none");
        
      chart.append("path")
        .datum(circle())
        .classed("indicator", true)
        .attr("d", path)
        .attr("stroke", "red")
        .attr("stroke-width", 0.5)
        .attr("fill","none")
        
    select(svg.current).select("g.legend").call(legend);
    
    select(svg.current)
      .select("g.legend")
      .append("text")
      .attr("x", "150")
      .attr("y", "40")
      .attr("font-size", "1.5em")
      .attr("fill", "black")
      .text("Total Confirmed Cases.");
  }
  
  function updateChart(){
    chart.selectAll("path.map")
      .attr("fill", (d)=>{
        try{
          
          if(d.properties.code === country){
            
            circle.center(geoCentroid(d));
            
            return "red";
          }
          
          return paint(dataset.Countries.find((c)=>c.CountryCode === d.properties.code).TotalConfirmed);
          
        }catch(error){
          
          return "#9e9e9e";
          
        }
      });
      
    chart.select("path.indicator").datum(circle()).attr("d", path);
  }
  
  return (<>
    <Chart>
      <Svg ref={svg} width={width} height={height}>
        <g className="chart"></g>
        <g className="legend" transform="translate(100, 350)"></g>
      </Svg>
    </Chart>
    <CountriesStats>
      <li><h3>More details...</h3></li>
      <li><b>Continent:</b> {countryStats.continent}</li>
      <li><b>Population Estimate:</b> {countryStats.population ? numsFormat(countryStats.population) : "-"}</li>
    </CountriesStats>
  </>)
}