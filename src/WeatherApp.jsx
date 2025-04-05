import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState} from "react";

export default function WeatherApp(){
   const [WeatherInfo,setWeatherInfo]=useState({
    city:"Delhi",
    feels_like: 24.84,
    temp:25.06,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    weather:"haze",
   });
  

   let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
   }
    return(
    <div  className="WeatherApp">
        <h2> Weather App by me</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={WeatherInfo}/>
    </div>
    );
}