/* JS file for ecoChat bot */

// DOMContentLoaded runs only when HTML code has 
// finished loading.
// EventListener responds when a key is pressed.

function closeWindow()
{
  window.top.close();
}

document.addEventListener("DOMContentLoaded", () => 
{
  const mainDiv = document.getElementById("main");
  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  let greeting = "Hi! Welcome to EcoChat. Ask me about unsustainable/ sustainable or (non-)environmentally friendly brands.";
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
  } 
  else 
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
  [""],

  ["unsustainable", "non environmentally friendly"],

  ["shein", "victorias secret", "mango"],

  ["sustainable", "eco friendly", "environmentally friendly", "alternative choices", "alternate choices", "alternative options", "alternate options"],

  ["levis", "uniqlo", "zalora"],

  ["why", "reason"]
];

// That something would be to reply with the word or phrase
// inside the double quotes.
const reply = 
[
  ["Hello, may I help you?"],

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

  ["Shein: <br> Although Shein has a social responsibility website to show the company\'s commitments to giving back to society. There have been no forms of third-party certification to verify that Shein has been genuinely contributing to becoming more sustainable environmentally and in other aspects. <br> Shein has been shown to sell their clothes at relatively lower prices compared to other fashion companies and has a fast turnaround time due to their transportation of their goods via airplanes which consumes large amount of fossil fuels, thus having a larger carbon footprint. In addition, there is no evidence to show that Shein pays their factory workers a proper wage which allows the company to operate with low overhead costs. This allows for the company to sell their products at such low prices.<br> <a href = 'https://www.greenmatters.com/p/is-shein-bad'> Find out more here. </a>", 
  "Victoria\'s Secret: <br> Victoria\'s Secret has little eco-friendly materials in its collection. It has also signed up with Greeenpeace\'s “Detox My Fashion” program back in 2011 which set a deadline to eliminate hazardous chemicals by 2020 from their products. <br> However, the company has not produced any evidence of their progress towards their set goal. The brand has received 21%-30% in the Fashion Transparency Index, thus making them less trustworthy. With the onset of the COVID-19 pandemic, Victoria\'s Secret has shown the lack of policies in protecting suppliers and workers in it supply chain from the impacts of the pandemic. <br> <a href = 'https://goodonyou.eco/how-ethical-is-victorias-secret/'> Find out more here. </a>",
  "Mango: <br> The company although disclosing the number of its factories\' greenhouse gas emissions, it has yet to set a target to lower them and have yet to have a plan on how to cut down on such emissions. Mango\'s Code of Conduct has also shown that it only pays their workers the legal minimum wage and not the recommended wages. <br> <a href = 'https://www.independent.co.uk/news/uk/home-news/which-british-high-street-shops-do-not-pay-their-garment-workers-living-wage-9223733.html'> Find out more here. </a> <br> <a href = 'https://www.sustainably-chic.com/blog/fast-fashion-brands-to-avoid'> and here. </a>"],

  ["Here are some sustainable brands:" + 
  "<ul>" +
    "<li>" +
      "Levi\'s " +
    "</li>" +
    "<li>" +
      "UNIQLO" +
    "</li>" +
    "<li>" +
      "Zalora" +
    "</li>" +
  "</ul>" +
  "<br> Pick one to know why."],

  ["Levis: <br> Known for their denim wear, the company has introduced Water < Less which uses up to 96% less water in the creation of the material which is known for its huge requirements in terms of water usage. In addition, Levi\'s has pledged to gear their entire design and manufacturing process towards sustainability via the usage of 100% sustainably sourced cotton and recycling old jeans into home insulation. <br> <a href = 'https://www.forbes.com/sites/blakemorgan/2020/02/24/11-fashion-companies-leading-the-way-in-sustainability/?sh=3bb630916dba'> Find out more here. </a>", 
  "Uniqlo: <br> Uniqlo has set targets to reduce emission of harmful gasses in its supply chain, however it does not publicly declare its progress in such goals. In terms of labour conditions, it was given the 31-40% on the Fashion Transparency Index. Uniqlo has also failed to provide evidence that it ensures their workers are paid a living wage. <br> <a href = 'https://goodonyou.eco/how-ethical-is-uniqlo/'> Find out more here. </a>",
  "Zalora: <br> Zalora has shown their commitment to further their sustainability through introducing concrete measures that are geared towards their People and Planet Positive Agenda. The introduction of Earth Edit, Zalora\'s sustainable shopping edit with carefully defined sustainable criteria which includes 5% of Zalora\'s retail branded portfolio. A significant reduction in the impact of its own operations, including diverting 86% of fulfilment centre waste from landfills main to recycling, and sourcing 68% of its delivery and internal packaging from sustainable materials. <br> <a href = 'https://global-fashion-group.com/2021/04/22/global-fashion-group-announces-the-release-of-its-inaugural-sustainability-report-in-southeast-asia/ '> Find out more here."]
];

// If the bot didn't use any of the triggers, it can use
// these instead.
alternative = 
[
  "I'm sorry?",
  "I didn't catch that.",
  "Please try again",
  "Come again?",
  "I couldn't quite understand your query.",
  "I hate programming this stupid bot."
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
      
      // if (triggerArray[x][y] == text) 
      // {
      //   if (triggerArray[x].length == replyArray[x].length)
      //   {
      //     item = replyArray[x][y];
      //     break;
      //   }
      //   else
      //   {
      //     item = replyArray[x][0];
      //     break;
      //   }
      // }
    }
  }
  return item;
}
