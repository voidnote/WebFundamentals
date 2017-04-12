$(document).ready(function(){
    $("button").click(function(){
        for (var i = 1; i <= 150; i++){
            $(".gallery").append("<img id='"+i+"' src='http://pokeapi.co/media/img/"+i+".png'>");
        }
    })
    $(".gallery").on("click", "img", function(){
        $(".pokestats, .pokepic").empty();
        var pokeID = this.id;
        $.get("http://pokeapi.co/api/v1/pokemon/"+pokeID+"/", function(res) {
        $(".pokestats").append("<ul><li>Name: "+res.name+"</li><li>Type: "+res.types[0].name+"</li><li>Attack: "+res.attack+"</li><li>Defense: "+res.defense+"</li></ul>")
        }, "json");
        $(".pokepic").append("<img src='http://pokeapi.co/media/img/"+pokeID+".png'>")
    })
});


        // console.log(res);
        // console.log(res.name);
        // console.log(res.types[0].name);
        // console.log(res.types[1].name);
        // console.log(res.attack);
        // console.log(res.evolutions[0].to);

