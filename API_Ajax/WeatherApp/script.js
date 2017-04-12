$(document).ready(function(){
    $('button').click(function(){
        var city = $('#city').val()
        var country = $('#country').val()
        console.log(city)
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid=190568a61fdc6cffdf0c88f249e6dfda", function(response){
            // $('body').html(response);
            console.log(response)
            var temp = Math.floor(1.8 * (response.main.temp - 273) + 32)
            $('.results').append("<h1>Location: "+response.name+"</h1>")
            $('.results').append("<h3>Forcast: "+response.weather[0].description+"</h3>")
            $('.results').append("<h4>Temp: "+temp+"</h4>")
        })
    })
})