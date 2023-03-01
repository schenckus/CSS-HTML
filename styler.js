"use strict";

function mouseClickA(event) {
    document.getElementById('styleSheet').href ="styleA.css";
    event.preventDefault();
};

function mouseClickB(event) {
    document.getElementById('styleSheet').href ="styleB.css";
    event.preventDefault();
};

window.onload = function () {
    document.getElementById('styleA').addEventListener("click", mouseClickA)
    document.getElementById('styleB').addEventListener("click", mouseClickB);
};
