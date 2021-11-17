/* JS file for ecoChat bot */

// DOMContentLoaded runs only when HTML code has 
// finished loading.
// EventListener responds when a key is pressed.
document.addEventListener("DOMContentLoaded", () => 
{
  const mainDiv = document.getElementById("main");
  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  let greeting = "Hi! Welcome to EcoChat. Ask me about unsustainable/ sustainable or (non-)environmentally friendly brands";
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
  //speak(product);
}

// If the word or phrase is in the double quotes, 
// do something.
const trigger = 
[ 
  ["unsustainable"],  
  
  ["non-environmentally friendly"],

  ["shein"], 

  ["victorias secret"], 

  ["mango"],

  // ["sustainable"],
  
  // ["eco friendly"],

  // ["environmentally friendly"],

  // ["alternative choices"],

  ["1", "2"],

  ["xiaomi, samsung"]

];

// That something would be to reply with the word or phrase
// inside the double quotes.
const reply = 
[
  ["Here are some unsustainable brands:" + 
  "<ul>" +
    "<li>" +
      "Shein" +
    "</li>" +
    "<li>" +
      "Victoria\'s Secret" +
    "</li>" +
    "<li>" +
      "Mango" +
    "</li>" +
  "</ul>" +
  "<br> Pick one to know why."],

  ["Here are some unsustainable brands:" + 
  "<ul>" +
    "<li>" +
      "Shein" +
    "</li>" +
    "<li>" +
      "Victoria\'s Secret" +
    "</li>" +
    "<li>" +
      "Mango" +
    "</li>" +
  "</ul>" +
  "<br> Pick one to know why."],

  ["Shein: <br> Although Shein has a social responsibility website to show the company\'s commitments to giving back to society. There have been no forms of third-party certification to verify that Shein has been genuinely contributing to becoming more sustainable environmentally and in other aspects. <br> Shein has been shown to sell their clothes at relatively lower prices compared to other fashion companies and has a fast turnaround time due to their transportation of their goods via airplanes which consumes large amount of fossil fuels, thus having a larger carbon footprint. In addition, there is no evidence to show that Shein pays their factory workers a proper wage which allows the company to operate with low overhead costs. This allows for the company to sell their products at such low prices.<br> <a href = 'https://www.greenmatters.com/p/is-shein-bad'> Find out more here. </a>"],
 
  ["Victoria\'s Secret: <br> Victoria\'s Secret has little eco-friendly materials in its collection. It has also signed up with Greeenpeace\'s “Detox My Fashion” program back in 2011 which set a deadline to eliminate hazardous chemicals by 2020 from their products. <br> However, the company has not produced any evidence of their progress towards their set goal. The brand has received 21%-30% in the Fashion Transparency Index, thus making them less trustworthy. With the onset of the COVID-19 pandemic, Victoria\'s Secret has shown the lack of policies in protecting suppliers and workers in it supply chain from the impacts of the pandemic. <br> <a href = 'https://goodonyou.eco/how-ethical-is-victorias-secret/'> Find out more here. </a>"],

  ["Mango: <br> The company although disclosing the number of its factories\' greenhouse gas emissions, it has yet to set a target to lower them and have yet to have a plan on how to cut down on such emissions. Mango\'s Code of Conduct has also shown that it only pays their workers the legal minimum wage and not the recommended wages. <br> <a href = 'https://www.independent.co.uk/news/uk/home-news/which-british-high-street-shops-do-not-pay-their-garment-workers-living-wage-9223733.html'> Find out more here. </a> <br> <a href = 'https://www.sustainably-chic.com/blog/fast-fashion-brands-to-avoid'> and here. </a>"],

  ["1", "2"],

  ["Android"]
  
];

// If the bot didn't use any of the triggers, it can use
// these instead.
alternative = 
[
  "I'm sorry?",
  "I didn't catch that.",
  "Please try again",
  "Come again?",
  "I couldn't quite understand your query."
];

function compare(triggerArray, replyArray, text) 
{
  let item;

  // for (let a = 0; a < triggerArray.length; a++)
  // {
  //   if (triggerArray[a] == text)
  //   {
  //     item = replyArray[a];
  //     return item;
  //   }
  // }

  for (let x = 0; x < triggerArray.length; x++) 
  {
    for (let y = 0; y < triggerArray[x].length; y++) 
    {
      if (triggerArray[x][y] == text) 
      {

        if (triggerArray[x].length == replyArray[x].length)
        {
          console.log(triggerArray[x][y] + " / " + replyArray[x][y]);
          item = replyArray[x][y];
          break;
        }
    {
      
    }
      }
    }
  }

  return item;
}
