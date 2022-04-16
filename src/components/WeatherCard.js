import React, { useState, useEffect} from 'react';
import { Typography } from "@mui/material"
import axios from 'axios';
import Stack from '@mui/material/Stack';
import { weather_mapping_data, cityLatLon } from "../dataset/WeatherData"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function WeatherCard(props) {
    const { id } = props;
    // const defaultCityName = localStorage.getItem(id+'_city') || "서울";
    const defaultCityName = props.cityName;
    const [weatherData, setWeatherData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const findCity = cityLatLon.find(data=>data.name === defaultCityName);
    const [selectedCityData, setSelectedCityData] = useState(findCity);

    const selectHandleChange = (event) => {
        console.log(event.target.value)
        const cityName = event.target.value;
        const findCityLatLon = cityLatLon.find(data => data.name === cityName)
        setSelectedCityData(findCityLatLon);
        localStorage.setItem(id+'_city',findCityLatLon.name);
      }

    useEffect(() => {
        const cityName = selectedCityData.name;
        const cityGetDate = cityName+'_저장시간'
        if(Date.now() - localStorage.getItem(cityGetDate) / 1000 / 60 >= 60){
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&appid=4d9f8f2ea479e89af136da1d280c2431&lang=kr&units=metric`)
          .then(result => { 
            setWeatherData(result.data)
            localStorage.setItem(cityName, JSON.stringify(result.data))
            localStorage.setItem(cityGetDate, Date.now())
           })
          .catch(err => { setApiError(err) })
      } else {
        setWeatherData(JSON.parse(localStorage.getItem(cityName)))
      }
      }
        
    , [selectedCityData]);
   
    const makeWeatherInfo = () => {
        const { temp, temp_min, temp_max, feels_like, humidity} = weatherData.main;
        const { main, icon } = weatherData.weather[0];
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
        console.log(weather_mapping_data[main])
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Mist"]
    return <Stack direction="row" spacing={{ xs : 2, sm : 3, md: 3}}>
            <FormControl>
              <InputLabel id="selected-city-label">도시</InputLabel>
              <Select
                labelId="selected-city-label"
                id="selected-city"
                value={selectedCityData.name}
                label="도시"
                onChange={selectHandleChange}
              >
                {cityLatLon.map((city) => <MenuItem value={city.name}>{city.name}</MenuItem>)}
              </Select>
            </FormControl>
            <Typography>{`현재날씨: ${main}`}</Typography>
            <parseWeatherData.icon sx={{fontSize : 125, color: 'red'}}/>
            <img src={iconURL} alt="현재날씨 아이콘"/>
            <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
            <Typography>{`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃ 습도: ${humidity}%`}</Typography>
            </Stack>
    }

    return <>
    {apiError ? 
    <Typography>{apiError.message}</Typography>
    :
    weatherData ?
        makeWeatherInfo()
        :
        <Typography>날씨정보 없음</Typography>
    }
    </>
}

export default WeatherCard;