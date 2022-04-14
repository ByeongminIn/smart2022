import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import BlurOnIcon from '@mui/icons-material/BlurOn';
export const  cityLatLon = [
    { name : "서울", lat: 37.5326 , lon: 127.0246},
    { name : "안양", lat: 37.3911 , lon: 126.9677},
    { name : "부산", lat: 35.1666 , lon: 129.0666},
    { name : "대전", lat: 36.4535 , lon: 127.4319},
    { name : "광주", lat: 35.1798 , lon: 126.8781},
    { name : "울산", lat: 37.7678 , lon: 129.3114},
    { name : "시흥", lat: 37.4183 , lon: 126.7940},
    { name : "파리", lat: 48.8556 , lon: 2.3552},
]

export const weather_mapping_data = {
    ThunderStorm : {
        name : "폭우",
        icon : ThunderstormIcon
    },
    Drizzle: {
        name : "이슬비",
        icon : UmbrellaIcon
    },
    Rain : {
        name : "비",
        icon : BeachAccessIcon
    },
    Snow : {
        name : "눈",
        icon : AcUnitIcon
    },
    Clear : {
        name : "맑음",
        icon : WbSunnyIcon
    },
    Clouds : {
        name : "흐림",
        icon : CloudIcon
    },
    Mist : {
        name : "안개",
        icon : BlurOnIcon
    }
}