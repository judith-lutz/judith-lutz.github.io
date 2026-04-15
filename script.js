"use strict"; // das kann man auch ausschalten

// navigation 
function show(id) {
  let target = document.getElementById(id);
  if (target){
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(function(s) {
      s.classList.remove('active');
    });
    // Remove active from all nav links
    document.querySelectorAll('nav a').forEach(function(a) {
      a.classList.remove('active');
    });
    // Show the target section
    target.classList.add('active');
      
    // Mark the clicked nav link as active
    let link = document.querySelector('nav a[href="#' + id + '"]');
    if (link) link.classList.add('active');
    // Prevent default anchor scroll
    return false;
  }

}



let player1 = true;
let symbol = "#";
function click_button(row, column) {
    if (player1) {
        document.getElementById("button" + row + column).innerHTML = "x";
        document.getElementById("button" + row + column).style.backgroundColor = "red";
    }
    else {
        document.getElementById("button" + row + column).innerHTML = "o";
        document.getElementById("button" + row + column).style.backgroundColor = "green";
    }
    document.getElementById("button" + row + column).disabled = true;
    check_win(row, column);
    change_player();
}

function change_player() {
    if (player1) {
        player1 = false;
        document.getElementById("turn").innerHTML = "Player 2 turn";
    }
    else {
        player1 = true;
        document.getElementById("turn").innerHTML = "Player 1 turn";
    }
}

function win() {
    if (player1) { document.getElementById("winner").innerHTML = "Player 1 wins"; }
    else { document.getElementById("winner").innerHTML = "Player 2 wins"; }
    for (let row = 1; row < 4; row++) {
        for (let column = 1; column < 4; column++) {
            document.getElementById("button" + row + column).disabled = true;
        }
    }
}

function check_win_horizontal(row, column, symbol) {
    for (let column_new = 1; column_new < 4; column_new++) {
        if (document.getElementById("button" + row + column_new).innerHTML != symbol) {
            return;
        }
    }
    win();
}

function check_win_diagonal(row, column, symbol) {
    if ((row + column) == 4) {
        for (let difference = 0; difference < 3; difference++) {
            if (document.getElementById("button" + (1 + difference) + (3 - difference)).innerHTML != symbol) {
                return;
            }

        }
        win();
    }

    if (row == column) {
        for (let value = 1; value < 4; value++) {
            if (document.getElementById("button" + value + value).innerHTML != symbol) {
                return;
            }
        }
        win();
    }
}

function check_win_vertical(row, column, symbol) {

    for (let row_new = 1; row_new < 4; row_new++) {
        if (document.getElementById("button" + row_new + column).innerHTML != symbol) {
            return;
        }
    }
    win();
}

function check_win(row, column) {
    if (player1) { symbol = "x"; }
    else { symbol = "o"; }
    check_win_horizontal(row, column, symbol);
    check_win_vertical(row, column, symbol);
    if ((column + row) % 2 == 0) {
        check_win_diagonal(row, column, symbol);
    }
}

function restart_game() {
    for (let row = 1; row < 4; row++) {
        for (let column = 1; column < 4; column++) {
            document.getElementById("button" + row + column).innerHTML = "#";
            document.getElementById("button" + row + column).disabled = false;
            document.getElementById("button" + row + column).style.backgroundColor = "white";
        }
    }
    player1 = true;
}
let list_input = [];
function click_game(number) {
    list_input.append(number);
}

function change_canvas(){
let c = document.getElementById("canvas_tsa_1");
let ctx = c.getContext("2d");
const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];
//ctx.fillText("Hello World", 10, 50);

// Plot Scatter
ctx.fillStyle = "red";
for (let i_1 = 0; i_1 < xArray.length; i_1++) {
  let x = xArray[i_1]*400/150;
  let y = yArray[i_1]*400/15;
  ctx.beginPath();
  ctx.ellipse(x, y, 2, 3, 0, 0, Math.PI * 2);
  ctx.fill();
  document.getElementById("demo").innerHTML = "erfolg";
}
}
// IIFE for email
(function () {
  let mail_char = [106, 117, 100, 105, 116, 104, 108, 117, 116, 122, 64, 112, 111, 115, 116, 101, 111, 46, 100, 101];
  let mail_string = mail_char.map(function(c){ return String.fromCharCode(c); }).join('');
  let link = 'mailto:' + mail_string;
  ['email-footer', 'email-impressum'].forEach(function(id){
    let element1 = document.getElementById(id);
    if (element1) { 
        element1.href = link; 
        element1.textContent = mail_string; 
    }
  });
})();
// IIFE for address
(function () {
  let address_char = [65, 109, 32, 87, 97, 108, 100, 102, 114, 105, 101, 100, 104, 111, 102, 32, 55];
  let address_string = address_char.map(function(c){ return String.fromCharCode(c); }).join('');
  ['address'].forEach(function(id){
    let element1 = document.getElementById(id);
    if (element1) { 
        element1.textContent = address_string; 
    }
  });
})();


function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}




const x = document.getElementById("result");

if (typeof (Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    localStorage.setItem("bgcolor", "yellow");
    // Retrieve
    x.innerHTML = localStorage.getItem("lastname");
    x.style.backgroundColor = localStorage.getItem("bgcolor");
} else {
    x.innerHTML = "Sorry, no Web storage support!";
}

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
// this is  a comment
//############################################################################################################

// document.getElementById("banner-title").innerHTML = "changed";