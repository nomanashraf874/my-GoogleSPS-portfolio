// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
 function addRandomGreeting() {
    const greetings =
        ["There are only two great tragedies in life: one is not getting what you want and the other is getting it. -Oscar Wilde", "Acummalation is the scariest thing. -Noman Ashraf", "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. -Albert Einstein", "Life can only be understood backwards; but it must be lived forwards.”-Søren Kierkegaard"];
  
    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    const languageCode = document.getElementById('language').value;
    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    if(languageCode=="en")
    {
        greetingContainer.innerText = greeting;
    }
    else
    {
        greetingContainer.innerText = 'Loading...';

        const params = new URLSearchParams();
        params.append('text', greeting);
        params.append('languageCode', languageCode);

        fetch('/translate', {
            method: 'POST',
            body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
            greetingContainer.innerText = translatedMessage;
        });
    }
}
 
async function showGreeting() {
    const responseFromServer = await fetch('/hello');
    const greet = await responseFromServer.json();
    const greetings =  [greet.lang0, greet.lang1, greet.lang2,greet.lang3, greet.lang4];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    const greetContainer = document.getElementById('quote-container');
    greetContainer.innerText = greeting;
}
function message() {
    const targetDiv = document.getElementById("third");
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } 
    else {
        targetDiv.style.display = "block";
    }
}
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  function Random8ball()
  {
      const balls=['/images/ball1@3x.png','/images/ball2@3x.png','/images/ball3@3x.png','/images/ball4@3x.png','/images/ball5@3x.png'];
      const ball=balls[Math.floor(Math.random() * balls.length)];
      document.getElementById('img2').src=ball;
  }