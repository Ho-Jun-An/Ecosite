/* JS file for archives search bar */

// DOMContentLoaded runs only when HTML code has 
// finished loading.
// EventListener responds when a key is pressed.
document.addEventListener("DOMContentLoaded", () => 
{
  const resultsDiv = document.getElementById("archive-search-results");
  const inputField = document.getElementById("search-article");

  // Detect keypresses for inputField.
  inputField.addEventListener("keydown", function(e) 
  {
    // In this case, it would be the Enter key.
    if (e.code === "Enter") 
    {
      // Get user input from <input> in EcoChat.html once Enter is pressed
      let input = document.getElementById("search-article").value;

      // Clear results box (This includes search bar and title)
      resultsDiv.innerHTML = "";

      output(input);
    }
  });
});

function output(input) 
{
  let product;
  // Removes everything but word charaters, whitespaces 
  // and digits.
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  const textWords = text.split(" ");
  
  if (compare(trigger, reply, textWords) == []) {
    // Display no results box
    product = alternative;
  }
  else {
    product = compare(trigger, reply, textWords);
  }

  // Displays results.
  displayResults(product);
}

function displayResults(product) 
{
  //const resultsDiv = document.getElementById("archive-search-results");

  // Display search bar and title
  document.getElementById("archive-search-results").innerHTML = "<input id=\"search-article\" class=\"archives-search\" type=\"text\" placeholder=\"Search for article...\" autocomplete=\"off\" />"

  // Display articles
  /*for (articleResult in product) {
    resultsDiv.appendChild(articleDiv);
  }*/
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

function compare(triggerArray, replyArray, textWords) 
{
  const results = [];

  for (word in textWords) {
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < triggerArray[x].length; y++) {
        if (triggerArray[x][y] == word) {
          let status = 0;

          for (searchResult in results) {
            if (searchResult = replyArray[x]) {
              status = 1;
            }
          }

          if (status == 1) {
            break;
          }
          else {
            results.push(replyArray[x])
          }
        }
      }
    }
  }

  return results;
}
