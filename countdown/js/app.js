const endDate = "7 May 2024 5:01 pm "

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;

    if(diff < 0) return;
    console.log(diff);
    //convert into days
    inputs[0].value = Math.floor(diff/3600/24);
    // convert into hours
    inputs[1].value = Math.floor(diff/3600)%24
    // convert into Minutes
    inputs[2].value = (Math.floor(diff/60)%60);
    //convert into seconds
    inputs[3].value = Math.floor(diff % 60)

}
//Initial Calls
clock();

/**
 * 1 day = 24hrs
 * 1 hr =60 mins
 * 1 min = 3600 sec
 */

setInterval(() => {
        clock()
},1000)
