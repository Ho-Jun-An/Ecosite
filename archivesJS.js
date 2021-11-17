/* JS file for archives search bar */

// DOMContentLoaded runs only when HTML code has 
// finished loading.
// EventListener responds when a key is pressed.
document.addEventListener("DOMContentLoaded", () => 
{
  const resultsDiv = document.getElementById("archive-search-results");
  /*let botDiv = document.createElement("div");
  botDiv.id = "bot";
  let greeting = "Hi! Welcome to EcoChat. Ask me about unsustainable/ sustainable or (non-)environmentally friendly brands";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${greeting}</span>`;
  mainDiv.appendChild(botDiv);
  // speak(product);*/


  // Get input as inputField.
  const inputField = document.getElementById("search-article")
  // Detect keypresses for inputField.
  inputField.addEventListener("keydown", function(e) 
  {
    // In this case, it would be the Enter key.
    if (e.code === "Enter") 
    {
      // Get user input from <input> in EcoChat.html once Enter is pressed
      let input = document.getElementById("search-article").value;

      output(input); 

      // output(input);
    }
  });
});

function output(input) 
{
  let product;
  // Removes everything but word charaters, whitespaces 
  // and digits.
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  textWords = text.split(" ")
  
  if (compare(trigger, reply, text)) 
  {
    product = compare(trigger, reply, text);
  } else 
      {
      // Come up with a random phrase within that group.
      product = alternative[Math.floor(Math.random() * 
        alternative.length)];
      }

  //clear input value
  document.getElementById("search-article").value = "";

  window.location.href = "archive-search-results.html";

  // Updates DOM.
  displayResults(product);
}

function displayResults(product) 
{
  const resultsDiv = document.getElementById("archive-search-results");

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  resultsDiv.appendChild(botDiv);
  //speak(product);
}

// If the word or phrase is in the double quotes, 
// do something.
const trigger = 
[ 
  ["Sustainability", "in", "our", "generation", "why", "is", "it", "important"],  
  
  ["Fast", "Fashion", "an", "epidemic"]

];

// That something would be to reply with the word or phrase
// inside the double quotes.
const reply = 
[
  ["<button class=\"articleList-article\" onclick=\"window.location.href='articles/sustainabilityInOurGeneration.html'\">" +
   "<span class=\"articleList-name\">Sustainability in our generation: why is it important?</span> <br>" +
   "<span class=\"articleList-author\">By Author</span> <br>" +
   "<span class=\"articleList-date\">17th November 2021</span>" +
   "</button>"],

  ["<button class=\"articleList-article\" onclick=\"window.location.href='articles/fastFashionAnEpidemic.html'\">" +
   "<span class=\"articleList-name\">Fast Fashion: an epidemic</span> <br>" +
   "<span class=\"articleList-author\">By Author</span> <br>" +
   "<span class=\"articleList-date\">17th November 2021</span>" +
   "</button>"]

];

// If the bot didn't use any of the triggers, it can use
// these instead.
alternative = 
[
  "<button class=\"articleList-article\">" +
  "<span class=\"articleList-name\">No Results</span> <br>" +
  "</button>"
];

function compare(triggerArray, replyArray, text) 
{
  let item;

  for (let x = 0; x < triggerArray.length; x++) 
  {
    for (let y = 0; y < triggerArray[x].length; y++) 
    {
      var endPattern = new RegExp('(\\w*'+ triggerArray[x][y]+'\\w*)','gi')
      if (text.match(endPattern)) 
      {
        if (triggerArray[x].length == replyArray[x].length)
        {
          item = replyArray[x][y];
          break;
        }
        else
        {
          item = replyArray[x][0];
          break;
        }
      }
    }
  }
  return item;
}
