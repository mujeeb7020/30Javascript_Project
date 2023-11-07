const apiKey='d896c2bf80103ad65136905f7de3e72c';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
const weatherInfo=document.querySelector(".weather");
const NoData=document.querySelector(".noData");

async function weatherChecker(city){
    const res=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data=await res.json();

    console.log(data)

    if(res.status==404){
        NoData.style.display="block";
        weatherInfo.style.display="none";
    }else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind["speed"] + "km/h";
    
       if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
       }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
       } else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
       } else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
       }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
       }
    
       weatherInfo.style.display="block";
       NoData.style.display="none";
    }
    
}

searchBtn.addEventListener("click", ()=>{
    weatherChecker(searchBox.value); 
})


