/* JS file for ecoChat bot */

// DOMContentLoaded runs only when HTML code has 
// finished loading.
// EventListener responds when a key is pressed.
document.addEventListener("DOMContentLoaded", () => 
{
  const mainDiv = document.getElementById("main");
  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  let greeting = "Hi! Welcome to EcoChat. What would you like to know today?";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${greeting}</span>`;
  mainDiv.appendChild(botDiv);
  // speak(product);


  // Get input as inputField.
  const inputField = document.getElementById("input")
  // Detect keypresses for inputField.
  inputField.addEventListener("keydown", function(e) 
  {
    // In this case, it would be the Enter key.
    if (e.code === "Enter") 
    {
      // Get user input from <input> in EcoChat.html once Enter is pressed
      let input = document.getElementById("input").value;

      output(input); 

      // output(input);
    }
    if (e.code === "Control" + "W")
    {
      alert("Thank you!")
    }
  });
});

function output(input) 
{
  let product;
  // Removes everything but word charaters, whitespaces 
  // and digits.
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
  // Replaces everything on the left of the comma 
  // inside the bracket .
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  
  if (compare(trigger, reply, text)) 
  {
    console.log("text =", text);
    product = compare(trigger, reply, text);
  } else 
      {
      // Come up with a random phrase within that group.
      product = alternative[Math.floor(Math.random() * 
        alternative.length)];
      }

  //clear input value
  document.getElementById("input").value = "";

  // Updates DOM.
  addChat(input, product);
}

function addChat(input, product) 
{
  const mainDiv = document.getElementById("main");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  speak(product);
}

// If the word or phrase is in the double quotes, 
// do something.
const trigger = 
[
  //0 
  ["hi", "hey", "hello"],
  
  //1
  ["how are you", "how are things"],
  
  //2
  ["what is going on", "what is up"],
  
  //3
  ["happy", "good", "well", "fantastic", "cool"],
  
  //4
  ["bad", "bored", "tired", "sad"],
  
  //5
  ["tell me story", "tell me joke"],
  
  //6
  ["thanks", "thank you"],
  
  //7
  ["bye", "good bye", "goodbye"]
  
  //8
  ["unsustainable", "non-environmentally friendly"]
];


// That something would be to reply with the word or phrase
// inside the double quotes.
const reply = 
[
  //0 
  ["Hello!", "Hi!", "Hey!", "Hi there!"], 
  
  //1
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  
  //2
  [
    "Nothing much",
    "Exciting things!"
  ],
  
  //3
  ["Glad to hear it"],
  
  //4
  ["Why?", "Cheer up buddy"],
  
  //5
  ["What about?", "Once upon a time..."],
  
  //6
  ["You're welcome", "No problem"],
  
  //7
  ["Goodbye", "See you later"]

  //8
  ["Here are some unsustainable brands: Shein\nVictoria’s Secret\nMango\nPick one to know why."]
];

// If the bot didn't use any of the triggers, it can use
// these instead.
const alternative = 
[
  "I'm sorry?",
  "I didn't catch that.",
  "Please try again",
  "Come again?",
  "I couldn't quite understand your query."
];

function compare(triggerArray, replyArray, text) 
{
  // Create variable "item".
  let item;
  // While x = 0 and less than the length of triggerArray,
  // add 1 to it and... 
  for (let x = 0; x < triggerArray.length; x++) 
  {
    // ...while y = 0 and less than the length 
    // of replyArray, add 1 to it and... 
    for (let y = 0; y < replyArray.length; y++) 
    {
      // ... check if anything in triggerArray[x][y] matches 
      // the user input, if so, assign replyArray[x] to items
      // and choose a random phrase in replyArray[x] to return
      if (triggerArray[x][y] == text) 
      {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}