import React from "react";

import {geoNaturalEarth1, geoPath, geoGraticule, geoCentroid, geoCircle} from "d3-geo";
import {scaleSequential} from "d3-scale";
import {interpolateBlues} from "d3-scale-chromatic";
import {max, range} from "d3-array";
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
  
  let projection = geoNaturalEarth1().scale(110).translate([width / 2, height*0.45]),
      graticule = geoGraticule().outline(),
      path = geoPath().projection(projection),
      circle = geoCircle().radius(20),
      totalConfirmedextent = [0, max(dataset.Countries, (d)=>d.TotalConfirmed)],
      paint = scaleSequential(totalConfirmedextent, interpolateBlues),
      scale = scaleSequential([0, 10], interpolateBlues);
      
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
      .attr("stroke", "#9e9e9e")
      .attr("stroke-width", 0.8)
      .attr("fill", (d)=>{
        try{
          
          if(d.properties.code === country){
            
            circle.center(geoCentroid(d));
            
            return "red"
          }
          
          return paint(dataset.Countries.find((c)=>c.CountryCode === d.properties.code).TotalConfirmed);
          
        }catch(error){
          
          return "#9e9e9e";
          
        }
      })
      .on("mouseenter", function(d,i){
        if(d.properties.code === country){
          select(this).attr("stroke", "red")
        }
      })
      .on("mouseleave", function(d,i){
        select(this).attr("stroke", "#9e9e9e")
      })
      
      chart.append("path")
        .datum(graticule)
        .classed("gr", true)
        .attr("d", path)
        .attr("stroke", "gray")
        .attr("stroke-width", 0.5)
        .attr("fill","none");
        
      chart.append("path")
        .datum(circle())
        .classed("indicator", true)
        .attr("d", path)
        .attr("stroke", "red")
        .attr("stroke-width", 0.5)
        .attr("fill","none")
        
    let legend = select(svg.current).select("g.legend")
    
    legend.selectAll("rect.box")
        .data(range(0, 10))
        .join("rect")
        .classed("box", true)
        .attr("x", (d,i)=>{
          return i * 40;
        })
        .attr("y", 10)
        .attr("width", 40)
        .attr("height", 20)
        .attr("fill", (d,i)=>{
          return scale(d);
        })
        
    legend.append("text").text("Total confirmed cases.")
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
        <g className="legend" transform="translate(100, 360)"></g>
      </Svg>
    </Chart>
    <CountriesStats>
      <li><h3>More details...</h3></li>
      <li><b>Continent:</b> {countryStats.continent}</li>
      <li><b>Population Estimate:</b> {countryStats.population ? numsFormat(countryStats.population) : "-"}</li>
    </CountriesStats>
  </>)
}