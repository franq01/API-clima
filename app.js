const APIKEY = '9b5d5835650e2da653cc53957800a0d4';
const URLBASE = 'https://api.openweathermap.org/data/2.5/weather?';
const container = document.getElementById('container')
const cityName = document.getElementById('city')
const body =  document.getElementById('body')
const Search = document.getElementById('Search')


async function getClima (city){
    const url = URLBASE + `q=${city}&appid=${APIKEY}`
    await fetch (url).then((Response)=>{
        return Response.json()
    }).then((data)=>{
        updateDom(data.temp,data.name,data.weather[0].main)
    }).catch((err)=>{
        console.log(err)
    })
    
}
function updateDom(temperature,city,){

    const celcius = temperature -273.15
    container.innerHTML = `<h2>Ciudad: ${city}</h2>
    <h2>temperatura: ${Math.floor(celcius)}</h2>
    `
    if(celcius >= 11&& celcius <=30){
        body.style.backgroundColor = 'orange'
    }else if (celcius >= 31&& celcius <= 40){
        body.style.backgroundColor= 'green'
    }else if (celcius <=10){
        body.style.backgroundColor= 'white'
        
        
    }
}
Search.addEventListener('click',async ()=>{   
 await getClima(cityName.value)
 cityName.value = ''
 
})