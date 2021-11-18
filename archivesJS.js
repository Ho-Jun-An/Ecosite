/* JS file for archives search bar */

// DOMContentLoaded runs only when HTML code has 
// finished loading.
// EventListener responds when a key is pressed.
document.addEventListener("DOMContentLoaded", () => 
{
  const resultsDiv = document.getElementById("archive-results-container");
  const inputField = document.getElementById("search-article");

  // Detect keypresses for inputField.
  inputField.addEventListener("keydown", function(e) 
  {
    // In this case, it would be the Enter key.
    if (e.code === "Enter") 
    {
      // Clear results box (This includes title)
      resultsDiv.innerHTML = "";

      // Get user input from <input> in EcoChat.html once Enter is pressed
      let input = document.getElementById("search-article").value;

      //clear input value
      document.getElementById("search-article").value = "";

      output(input);
    }
  });
});

function output(input) 
{
  let product = [];
  // Removes everything but word charaters, whitespaces 
  // and digits.
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  const textWords = text.split(" ");
  
searchResults = compare(trigger, reply, textWords);

  if (searchResults.length == 0) {
    product = noResults;
  } else {
    product = searchResults;
  }

  // Displays results.
  displayResults(product);
}

function displayResults(product) 
{
  const resultsDiv = document.getElementById("archive-results-container");

  // Display search bar, title and archive-results-container
  document.getElementById("archive-results-container").innerHTML = "<h1 id=\"search-results-title\">Search Results</h1>"

  // Display articles
  for (a = 0; a < product.length; a++) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = product[a];
    resultsDiv.appendChild(tempDiv.firstChild);
  }
}

// If the word or phrase is in the double quotes, 
// do something.
const trigger = 
[ 
  ["sustainability", "in", "our", "generation", "why", "is", "it", "important"],  
  
  ["fast", "fashion", "an", "epidemic"]
];

// That something would be to reply with the word or phrase
// inside the double quotes.
const reply = 
[
  "<button class=\"articleList-article\" onclick=\"window.location.href='articles/sustainabilityInOurGeneration.html'\">" +
   "<span class=\"articleList-name\">Sustainability in our generation: why is it important?</span> <br>" +
   "<span class=\"articleList-author\">By Author</span> <br>" +
   "<span class=\"articleList-date\">17th November 2021</span>" +
   "</button>",

  "<button class=\"articleList-article\" onclick=\"window.location.href='articles/fastFashionAnEpidemic.html'\">" +
   "<span class=\"articleList-name\">Fast Fashion: an epidemic</span> <br>" +
   "<span class=\"articleList-author\">By Author</span> <br>" +
   "<span class=\"articleList-date\">17th November 2021</span>" +
   "</button>"
];

const noResults = ["<button class=\"articleList-article\"> <span class=\"articleList-name\">No Results</span> <br> </button>"]

function compare(triggerArray, replyArray, textWords) 
{
  const results = [];

  for (let w = 0; w < textWords.length; w++) {
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < triggerArray[x].length; y++) {
        let checkWord = triggerArray[x][y];
        let word = textWords[w];

        if (checkWord == word) {
          let status = 0;

          for (let r = 0; r < results.length; r++) {
            if (results[r] == replyArray[x]) {
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
