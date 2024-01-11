var inputvalue=document.querySelector('#city input')
var btn=document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "34bbf182546135246c76f0dfd26c6d1f"
function convertion(val) 
{
    return(val - 273).toFixed(3)
}

btn.addEventListener("click", function()
{
    fetch('https://api.open-meteo.com/v1/forecast?city='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temperature = data['main']['temp']
            var windspeed = data['wind']['speed']


            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML=`Temperature: <span>${convertion(temperature)} C</s`
            description.innerHTML=`Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML=`Wind Speed: <span>${windspeed} km/h<span>`

        })

        .catch(err => alert('You entered the wrong city name'))
})