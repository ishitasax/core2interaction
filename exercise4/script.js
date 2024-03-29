let word1 = ["chaotic", "silly", "happy", "peaceful"];
let word2 = ["work and partying", "coffee and bagels", "delis and michelin stars" ];
let word3 = ["peace", "calm", "happiness", "chaos"];

let span1 = document.getElementById('word1');
let span2 = document.getElementById('word2');
let span3 = document.getElementById('word3');

let randomBustling = Math.floor(Math.random() * word1.length);
let randomDreamsAndAspirations = Math.floor(Math.random() * word2.length);
let randomSolace = Math.floor(Math.random() * word3.length);

span1.innerHTML = " " + word1[randomBustling] + " ";
span2.innerHTML = " " + word2[randomDreamsAndAspirations] + " ";
span3.innerHTML = " " + word3[randomSolace] + " ";