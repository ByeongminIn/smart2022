import React, { useState, useEffect } from 'react';
import "./App.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import WeatherCard from './components/WeatherCard';
import UserCardList from './components/UserCardList';
import { makeUserDatas } from "./Utils";

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


  const handleChange = (event) => {
    setUseDarkMode(useDarkMode ? false : true);
  }

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
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
            {/* {
              [1,2,3,4,5,6,7,8,9].map((no)=> {
               return <WeatherCard id={no}/>
              })
            } */}
            <WeatherCard cityName="안양"/>
            <WeatherCard cityName="서울"/>
            <WeatherCard cityName="부산"/>
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
