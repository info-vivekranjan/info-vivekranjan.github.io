

async function checkWeather() {
    var cityName = document.getElementById("search-city").value
    var key = "fdc0debbc876a5cc2325a3799fb72717"
    var fetchApi = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)

    var resp = await fetchApi
    var data = await resp.json()




    var sky_nature = data.weather[0].description

    var kelvin_val = data.main.temp
    var celsius = kelvin_val - 273.15
    celsius = Math.round(celsius)

    var city = data.name

    var h22 = document.getElementById("h2")
    h22.innerText = city + " Weather"


    var date = new Date()

    var time = `${date.getHours()}:${date.getMinutes()}`


    var humidity = data.main.humidity

    var sky_div = document.getElementById("clearSky_pic")
    sky_div.innerHTML = ""

    if (sky_nature == 'clear sky') {

        let sky_img = document.createElement('img');
        sky_img.src = "./img/sunny.png";
        sky_div.append(sky_img)

        let sky_nature_para = document.createElement('p')
        sky_nature_para.innerHTML = "Clear"
        sky_div.append(sky_nature_para)

    } else if (sky_nature == 'haze') {
        let sky_img = document.createElement('img');
        sky_img.src = "./img/fog.png";
        sky_div.append(sky_img)

        let sky_nature_para = document.createElement('p')
        sky_nature_para.innerHTML = "Haze"
        sky_div.append(sky_nature_para)

    } else if (sky_nature == 'smoke') {
        let sky_img = document.createElement('img');
        sky_img.src = "./img/partly_cloudy.png";
        sky_div.append(sky_img)

        let sky_nature_para = document.createElement('p')
        sky_nature_para.innerHTML = "Smoke"
        sky_div.append(sky_nature_para)

    }

    var temp_div = document.getElementById('temp-header')
    temp_div.innerHTML = ""
    var temp = document.createElement('p')
    temp.innerHTML = celsius + "&deg;"
    temp_div.append(temp)

    var temp_para_div = document.getElementById("temp-para")
    temp_para_div.innerHTML = ""

    var humidity_para = document.createElement('p')
    humidity_para.innerHTML = 'Humidity : ' + humidity + ' %'
    temp_para_div.append(humidity_para)



    console.log(data)
    console.log(city, sky_nature, celsius, humidity);
    console.log(date);
    console.log(time);
}



var btn = document.getElementById("btn1")
btn.addEventListener("click", checkWeather)