
document.querySelector("button").addEventListener("click", clicked);

function clicked(){
    this.style.backgroundColor = "red";
    var randomnumer1 = Math.floor(Math.random() * 6)+ 1;
    var link =  "images/" + "dice" + randomnumer1 + ".png";

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", link);

    var randomnumer2 = Math.floor(Math.random() * 6)+ 1;
    var link2 =  "images/" + "dice" + randomnumer2 + ".png";

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", link2);

    if(randomnumer1 > randomnumer2){
        document.querySelector("h1").innerHTML = "player 1 WON";
    }

    else if (randomnumer1 < randomnumer2){
        document.querySelector("h1").innerHTML = "player 2 WON";
    }

    else{
        document.querySelector("h1").innerHTML = "DRAW";
    }

}

