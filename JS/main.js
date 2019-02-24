function foto() {

    document.getElementById("foto").style.opacity = 0;

    var timer = setInterval(function() {
        var calculo = Math.floor(Math.random() * 8);
        switch (calculo) {
            case 1:
                document.getElementById("foto").src = "PLAYERS/PL1.png";
                break;

            case 2:
                document.getElementById("foto").src = "PLAYERS/PL2.png";
                break;

            case 3:
                document.getElementById("foto").src = "PLAYERS/PL3.png";
                break;

            case 4:
                document.getElementById("foto").src = "PLAYERS/PL4.png";
                break;

            case 5:
                document.getElementById("foto").src = "PLAYERS/PL5.png";
                break;

            case 6:
                document.getElementById("foto").src = "PLAYERS/PL6.png";
                break;
            case 7:
                document.getElementById("foto").src = "PLAYERS/PL7.png";
                break;
        }
        clearInterval(timer);
        document.getElementById("foto").style.opacity = 100;

    }, 2800);
}

// setInterval(function() {
//     document.getElementById("foto").style.opacity = 0;
//     var timer = setInterval(function() {
//         document.getElementById("foto").src = "Packs/P6.jpg";
//         document.getElementById("foto").style.opacity = 100;
//         clearInterval(timer);
//     }, 2000);
// }, 10000);