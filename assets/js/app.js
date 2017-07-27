/*  Capitalize first letters of passed string
 *      - used to format weather text
 */
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function updateHTML(info) {
    console.log("City: " + info.location);
    document.getElementById("city").innerHTML = info.location;

    console.log("C: " + info.temp);
    document.getElementById("temp").innerHTML = info.temp;
    document.getElementById("btnCel").classList.add("active");

    console.log(info.weather);
    document.getElementById("weather").innerHTML = info.weather;

    console.log(info.icon);
    $(".icon").html(info.icon);

}

var lat = 0;
var lon = 0;
var tempC = 0;
var tempF = 0;

var temp = document.getElementById('temp');
var btnC = document.getElementById('btnCel');
var btnF = document.getElementById('btnFar');

btnC.addEventListener('click', function(){
    temp.innerHTML = tempC;
    btnF.classList.remove("active");
    btnC.classList.add("active");
});

btnF.addEventListener('click', function(){
    temp.innerHTML = tempF;
    btnC.classList.remove("active");
    btnF.classList.add("active");
});

function getWeather() {
    // this is the html address
    var api = "http://api.openweathermap.org/data/2.5/weather?";
    // long and lat - unit was not necessary but was used so that temp will be in celcius
    var pos = "lat="+lat+"&lon="+lon+"&units=metric";
    // my appid on openweathermap
    var appid = "&APPID=d611de651509c1c8fb23cc14c69e9df3"

    /*JAVACRIPT GETJSON EQUIVALENT */
    var request = new XMLHttpRequest();
    var url = api + pos + appid;
    request.open('GET', url , true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = request.responseText;
        var dataJson = JSON.parse(data); //convert the data to JSON

        // info to display
        var city = dataJson.name;
        tempC = parseFloat(dataJson.main.temp).toFixed(2);
        tempF = parseFloat((tempC*(9/5))+32).toFixed(2);
        var country = dataJson.sys.country;
        var weather = dataJson.weather[0].description;
        var icon = dataJson.weather[0].icon;

        // depending on icon, one of these images will be used
        var svgIcon = {
            w01d:"clearsky.svg", w01n:"clearsky.svg",
            w02d:"clearsky.svg", w02n:"clearsky.svg",
            w03d:"fewbrokenclouds.svg", w03n:"fewbrokenclouds.svg",
            w04d:"fewbrokenclouds.svg", w04n:"fewbrokenclouds.svg",
            w09d:"showerrain.svg", w09n:"showerrain.svg",
            w10d:"rain.svg", w10n:"rain.svg",
            w11d:"thunderstorm.svg", w11n:"thunderstorm.svg",
            w13d:"snow.svg", w13n:"snow.svg",
            w50d:"mist.svg", w50n:"mist.svg"
        };
        var yourIcon = svgIcon['w'+icon];

        updateHTML({
            "location" : city+", "+country,
            "temp" : tempC,
            "weather" : toTitleCase(weather),
            "icon" : '<img src="assets/img/'+ yourIcon + '">',
        });

        document.getElementById('hideContainer').classList.remove("hide");
      } else {
        // We reached our target server, but it returned an error
        console.log('We reached our target server, but it returned an error');
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      console.log('There was a connection error of some sort');
    };

    request.send();

    /*JAVACRIPT GETJSON END */
}

function getLocation(callback) {
    navigator.geolocation.getCurrentPosition (
        function (position){
            callback(position.coords);
        },
        function(){
            alert("Geo Location not supported");
        }
    );
}

/* Execute getLocation */
getLocation(
    /* after it executes it runs this callback function where coords were returned */
    function(coords){
        /* get the lon and lat from coords */
        lon = coords.longitude;
        lat = coords.latitude;
        console.log(lat+" "+lon);
        /* when lon and lat is now available getWeather */
        getWeather();
    }
);

// show the info section
$('.more-info-btn').click(function() {
    $(".more-info").animate({top: 0}, 500);
    $('.more-info').css('display', 'block');
});

// close the info section
$('.close-btn').click(function() {
    console.log('hello');
    $(".more-info").animate({opacity: 0}, 500, function() {
        $('.more-info').css('display', 'none');
        $('.more-info').css('opacity', '1');
        $('.more-info').css('top', '100vh');
    });
});