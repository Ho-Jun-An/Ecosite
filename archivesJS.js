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
  const resultsDiv = document.getElementById("archive-search-results");

  // Clear archive-search-results
  resultsDiv.innerHTML = "";

  // Display title and archive-results-container
  var tempTitleDiv = document.createElement('div');
  tempTitleDiv.innerHTML = "<h1 id=\"search-results-title\">Search Results:</h1>";
  resultsDiv.append(tempTitleDiv.firstChild);

  var tempContainerDiv = document.createElement('div');
  tempContainerDiv.innerHTML = "<div id=\"archive-results-container\" class=\"article-archives-list\"></div>";
  resultsDiv.append(tempContainerDiv.firstChild);

  const resultsContainer = document.getElementById("archive-results-container");

  // Display articles
  for (a = 0; a < product.length; a++) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = product[a];
    resultsContainer.appendChild(tempDiv.firstChild);
  }

  //Add box to results
  resultsDiv.style.backgroundColor = '#9b9b9b';
  resultsDiv.style.borderStyle = 'solid';
  resultsDiv.style.borderColor = '#3b3b3b';
  resultsDiv.style.borderWidth = '5px';
}

// If the word or phrase is in the double quotes, 
// do something.
const trigger = 
[ 
  ["what", "we", "can", "do", "to", "live", "more", "sustainable", "lives"],  
  
  ["what", "ways", "has", "Singapore", "committed", "to", "creating", "a", "more", "sustainable", "country"],
];

// That something would be to reply with the word or phrase
// inside the double quotes.
const reply = 
[
  "<button class=\"articlesArchive-article\" onclick=\"window.location.href='articles/article1.html'\">" +
  "<img class=\"articlesArchive-thumbnail\" src=\"articles/article-images/article1.png\">" +
  "<section class=\"articlesArchive-text\">" +
      "<span class=\"articlesArchive-article-name\">What we can do to live more sustainable lives</span> <br>" +
      "<span class=\"articlesArchive-article-info\">By ???, 31/1/2022</span>" +
  "</section>" +
  "</button>",

  "<button class=\"articlesArchive-article\" onclick=\"window.location.href='articles/article2.html'\">" +
  "<img class=\"articlesArchive-thumbnail\" src=\"articles/article-images/article2.jpg\">" +
  "<section class=\"articlesArchive-text\">" +
      "<span class=\"articlesArchive-article-name\">What ways has Singapore committed to creating a more sustainable country</span> <br>" +
      "<span class=\"articlesArchive-article-info\">By ???, 31/1/2022</span>" +
  "</section>" +
  "</button>"
];

const noResults = ["<h1 id=\"search-results-no-results\">No Results</h1>"]

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
