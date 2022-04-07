import React, { useState, useEffect } from 'react';
import "./App.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import UserCardList from './components/UserCardList';
import { makeUserDatas } from "./Utils";
import { cityLatLon } from './dataset/WeatherData';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';


const userDatas = makeUserDatas(5000);
/*
async function callAPI(){
  try{
    const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.391109&lon=126.967785&appid=4d9f8f2ea479e89af136da1d280c2431&lang=kr&units=metric")
    console.log(result)
  } catch(err){
    console.log(err)
  }
}
  
callAPI()
*/
function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [selectedCityData, setSelectedCityData] = useState({ name: "서울", lat: 37.5326, lon: 127.0246 });


  const handleChange = (event) => {
    setUseDarkMode(useDarkMode ? false : true);
  }

  const selectHandleChange = (event) => {
    console.log(event.target.value)
    const cityName = event.target.value;
    const findCityLatLon = cityLatLon.find(data => data.name === cityName)
    setSelectedCityData(findCityLatLon);
  }



  useEffect(() => {
  }, []);

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&appid=4d9f8f2ea479e89af136da1d280c2431&lang=kr&units=metric`)
      .then(result => { setWeatherData(result.data) })
      .catch(err => { setApiError(err) })
  }, [selectedCityData])

  useEffect(() => {
    console.log(`theme 병경됨 -> ${useDarkMode}`)
  }, [useDarkMode]);


  return (
    <ThemeProvider theme={createTheme({
      palette: {
        mode: useDarkMode ? 'dark' : 'light',
      },
    })
    }>
      <Box sx={{
        minheight: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <Container maxWidth="lg" sx={{ p: 1 }}>
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
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
          <WeatherCard weatherData={weatherData} apiError={apiError} />
          <WeatherCard weatherData={weatherData} apiError={apiError} />
          <WeatherCard weatherData={weatherData} apiError={apiError} />
          </Grid>
          <Switch
            checked={useDarkMode}
            onChange={handleChange}
            color="secondary"
            inputProps={{ 'arial-label': 'controlled' }}
          />

          <UserCardList userDatas={userDatas} />
        </Container>
      </Box>
    </ThemeProvider >
  );
}

export default App;
