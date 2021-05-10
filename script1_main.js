    /* function to get current date on the main page*/

    function updateDate() {
    var d = new Date();
    var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById("dt").innerHTML=months[d.getMonth()] + ", " + d.getFullYear();
            }
