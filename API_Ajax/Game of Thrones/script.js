$(document).ready(function(){
    $(".houses").on("click", "img", function(){
        var houseID = this.id;
        $.get("http://anapioficeandfire.com/api/houses/"+houseID+"/", function(res) {
            $(".stats").html("<ul><li>House: "+res.name+"</li><li>Region: "+res.region+"</li><li>Words: "+res.words+"</li><li>Titles: "+res.titles[0]+"</li></ul>")
        }, "json");
         })
    });


    

