import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function infoBox({info}){
    
    const HOT_URL="https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwcGxhY2VzfGVufDB8fDB8fHww";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1672845514825-96db4b24c233?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW58ZW58MHx8MHx8fDA%3D";
    

    return (
    <div className="infoBox">
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80
            ?RAIN_URL
            :info.temp > 15
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity >80 
              ?<ThunderstormIcon/>
              :info.temp>15
              ?<WbSunnyIcon/>
              :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2"  color="text.secondary" component={"span"} >
            <p>Temperature = {info.temp}</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.minTemp}</p>
            <p>Max Temp = {info.maxTemp}</p>
            <p>The weather can be described as <i>{info.description}</i> and feels like {info.feelslike}&deg;C</p>
        
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
    );
}