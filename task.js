const apikey ="b59a2fc2773a996db1a32c806ce9865b";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric";
let sear=document.getElementById("inp");
let btn=document.querySelector(".button");
let img=document.querySelector(".imgs");
// let body=document.querySelector("body");

async function weather(n) {
   const response = await fetch(`${apiurl}&q=${n}&appid=${apikey}`);

    if(response.status==404){
      document.querySelector("h3").style.display="block";

      setTimeout(()=>{
      document.querySelector("h3").style.display="none";}
      ,1700)
    }
    var  data = await response.json();
    return showData(data);
  
}
weather();

function showData(newData) {

  document.querySelector(".city").innerHTML= newData.name;
  document.querySelector(".temp").innerHTML=Math.round( newData.main.temp) + "<sup>o</sup>c";
  document.querySelector(".humidity").innerHTML=newData.main.humidity + "%";
  document.querySelector(".wind").innerHTML=newData.wind.speed +"km/h";

      if(newData.weather[0].main=="Clouds"){
        img.src="clouds.png";
        let url="https://source.unsplash.com/random/?clouds";
        // body.style.background=`url(${url})`;
        // body.style.backgroundSize="cover";
      }
      else if(newData.weather[0].main=="clear"){
        img.src="clear.png";
        const url="https://source.unsplash.com/random/?clearsky";
        // body.style.background=`url(${url})`;
        //         body.style.backgroundSize="cover";
      }
      else if(newData.weather[0].main=="Drizzle"){
        img.src="drizzle.png";
        const url="https://source.unsplash.com/random/?drizzle";
        // body.style.background=`url(${url})`;
        //         body.style.backgroundSize="cover";
      }
      else if(newData.weather[0].main=="Rain"){
        img.src="rain.png";
        const url="https://source.unsplash.com/random/?rain";
        // body.style.background=`url(${url})`;
        //         body.style.backgroundSize="cover";
      }
      else if(newData.weather[0].main=="Haze"){
        img.src="mist.png";
        const url="https://source.unsplash.com/random/?sky";
        // body.style.background=`url(${url})`;
        //         body.style.backgroundSize="cover";
      }
      else if(newData.weather[0].main=="Snow"){
        img.src="snow.png";
        const url="https://source.unsplash.com/random/?snow";
        // body.style.background=`url(${url})`;
        //         body.style.backgroundSize="cover";
      }
}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    weather(sear.value);
    sear.value="";
  })
