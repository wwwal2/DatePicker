let date = new Date();

let monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let getDays = () => {
    return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
};

let currentDate = `${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;

let headline = document.getElementById("headline");
headline.innerText = currentDate;

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.innerText = currentDate;
btn2.innerText = currentDate;

let calendarVision = () => {
    
}


console.log(date, getDays());
