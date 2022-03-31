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


  const handleChange = (event) => {
    setUseDarkMode(useDarkMode ? false : true);
  }



  useEffect(() => {
    const callAPI  = async() => {
      try{
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.391109&lon=126.967785&appid=4d9f8f2ea479e89af136da1d280c2431&lang=kr&units=metric")
        setWeatherData(result.data);
      } catch(err){
        setApiError(err);
      }
    }
    callAPI();
    console.log("component did mount")

  }, []);

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
        height: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <WeatherCard weatherData={weatherData} apiError={apiError}/>
      </Box>
      <Box sx={{
        height: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <Switch
          checked={useDarkMode}
          onChange={handleChange}
          color="secondary"
          inputProps={{ 'arial-label': 'controlled' }}
        />
        <Container maxWidth="lg" sx={{p:1}}>
          <UserCardList userDatas={userDatas} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
