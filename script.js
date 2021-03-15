async function checkWeather() {
    var cityName = document.getElementById("search-city").value

    var key = "fdc0debbc876a5cc2325a3799fb72717"
    var fetchApi = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)

    var resp = await fetchApi
    var data = await resp.json()

    if (cityName == "" || cityName == " " || cityName == "  ") {
        alert("Please enter your city")
    }



    var sky_nature = data.weather[0].description

    var kelvin_val = data.main.temp
    var celsius = kelvin_val - 273.15
    celsius = Math.round(celsius)

    var city = data.name

    var h22 = document.getElementById("h2")
    h22.innerText = city + " Weather"




    var time = `${date.getHours()}:${date.getMinutes()}`


    var humidity = data.main.humidity

    var wind = data.wind.speed
    wind = Math.round(wind * 3.6)


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

    } else if (sky_nature == 'mist') {

        let sky_img = document.createElement('img');
        sky_img.src = "./img/fog.png";
        sky_div.append(sky_img)

        let sky_nature_para = document.createElement('p')
        sky_nature_para.innerHTML = "Mist"
        sky_div.append(sky_nature_para)


    }
    else if (sky_nature == 'smoke') {
        let sky_img = document.createElement('img');
        sky_img.src = "./img/partly_cloudy.png";
        sky_div.append(sky_img)

        let sky_nature_para = document.createElement('p')
        sky_nature_para.innerHTML = "Smoke"
        sky_div.append(sky_nature_para)

    } else if (sky_nature == 'few clouds') {

        let sky_img = document.createElement('img');
        sky_img.src = "./img/partly_cloudy.png";
        sky_div.append(sky_img)

        let sky_nature_para = document.createElement('p')
        sky_nature_para.innerHTML = "Few Clouds"
        sky_div.append(sky_nature_para)
    }
    else if (sky_nature == 'scattered clouds') {
        let sky_img = document.createElement('img');
        sky_img.src = "./img/partly_cloudy.png";
        sky_div.append(sky_img)

        let sky_nature_para = document.createElement('p')
        sky_nature_para.innerHTML = "Few Clouds"
        sky_div.append(sky_nature_para)
    }

    var temp_div = document.getElementById('temp-header')
    temp_div.innerHTML = ""
    var temp = document.createElement('p')
    temp.innerHTML = celsius + "&deg;"
    temp_div.append(temp)

    var time_div = document.getElementById("time-div")
    time_div.innerHTML = ""
    var time_para = document.createElement('p')

    time_para.innerHTML = 'As of ' + time + ' IST'
    time_div.append(time_para)


    // var temp_para_div = document.getElementById("temp-para")
    // temp_para_div.innerHTML = ""

    var humidity_para = document.getElementById('temp-para-p1')
    humidity_para.innerHTML = 'Humidity : ' + humidity + ' %'

    var wind_para = document.getElementById('temp-para-p2')
    wind_para.innerHTML = 'Wind : ' + wind + ' km/h'




    console.log(data)
    console.log(city, sky_nature, celsius, humidity);


}



var btn = document.getElementById("btn1")

btn.addEventListener("click", checkWeather)

// MODEL BOX

var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");




var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//model box end 
//model box content start


var date = new Date()
var newDate = date.toDateString();
var model_body_div = document.querySelector(".modal-body")

var more_date = document.createElement('p')
more_date.innerHTML = "Date : " + newDate
model_body_div.append(more_date)


