import { Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import { weather_mapping_data } from "../dataset/WeatherData"

function WeatherCard(props) {
    const { weatherData, apiError} = props;
   
    const makeWeatherInfo = () => {
        const { temp, temp_min, temp_max, feels_like, humidity} = weatherData.main;
        const { main, icon } = weatherData.weather[0];
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
        console.log(weather_mapping_data[main])
        const parseWatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Mist"]
    return <Grid item xs={2} sm={4} md={4}>
            <Typography>{`현재날씨: ${main}`}</Typography>
            <parseWatherData.icon sx={{fontSize : 125, color: 'red'}}/>
            <img src={iconURL} alt="현재날씨 아이콘"/>
            <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
            <Typography>{`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃ 습도: ${humidity}%`}</Typography>
            </Grid>
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