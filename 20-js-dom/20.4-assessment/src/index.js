// import "./styles.css";
// console.log("hi")
/**
  Write the addheadings() function here
*/
function addHeadings(){
  //select all the article elements on the page - NodeList
  const articles = document.querySelectorAll("article");
  //for each article element in the allArticles nodeList do:
  for(let article of articles){
    // create an h2 element
    const h2 = document.createElement("h2");
    //set the h2 elements inner text to be the current article elements innerText
    h2.innerText = article.innerText;
    //clear out the articles inner text 
    article.innerText = "";
    //insert the h2 element inside the article element
    article.appendChild(h2)

    //Or you can just do this line below LOL
    // article.innerHTML = `<h2>${article.innerText}</h2>`;
  }
}
/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles(){
  //Some of the articles on the HTML are actually tutorials. You want these to be styled differently from the other articles. 

  //get access (select) to all the articles
  const allArticles = document.querySelectorAll('article');
  //For each article element on the HTML, do:
  for(let article of allArticles){
    //If the article contain the word "Tutorial," add the class tutorial. Otherwise, add the class article

    if(article.innerText.includes("Tutorial")){
      article.classList.add("tutorial")
    }else{
      article.classList.add("article")
    }
    // article.innerText.includes("Tutorial") 
    //   ? article.classList.add("tutorial")
    //   : article.classList.add("article")
  } 
}
/**
  Write the separateAllTutorials() function here
*/

/* 
REMOVING ELEMENT from the dom - .removeChild()

1. Identify the element we want to remove and put it in variable like elementToRemove
2. Identify the parent container of the element we want to remove like parentElement
3. parentElement.removeChild(elementToRemove)

*/
function separateAllTutorials(){
  //Remove all tutorials from the set of articles in the section with the class articles. 
  //Create a new section element with the class tutorials and add the tutorials to that new section. The new section should be appended to the div with class container. If there are no tutorials, then don't create the new section.

  //get access to all articles that are tutorials
  const allTutorials = document.querySelectorAll('.tutorial');

  //select the articles section that contains all the tutorials
  const articlesSection = document.querySelector(".articles");
  

  //Create a new section element with the class tutorials
  const tutorialsSection = document.createElement("section");
  tutorialsSection.classList.add("tutorials")

  //select the container div so that tutorialsSection can be inserted into it
  const container = document.querySelector(".container")
  //for each tutorial in allTutorial do:
  for(let tutorial of allTutorials){
    // parentElement.removeChild(elementToRemove)
    // articlesSection.removeChild(tutorial)

    //add the removed tutorial to the tutorialsSection
    tutorialsSection.appendChild(tutorial);
  }

  //insert the tutorialsSection as a child to container
  container.appendChild(tutorialsSection)
}
/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
