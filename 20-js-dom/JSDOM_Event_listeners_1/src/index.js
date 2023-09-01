// import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  //first select all the buttons with the class .expand_button
  const allExpandButtons = document.querySelectorAll(".expand_button");
  for(let expandButton of allExpandButtons){
    expandButton.addEventListener("click", (event)=>{
      //store the button that was clicked on in a variable
      const button = event.target;
      //figure out which element is the article associated with the button
      const associatedArticle = button.parentNode.parentNode.parentNode
      //from that article, select its article body div and update its display to be "block"
      const articleBody = associatedArticle.querySelector(".article_body")

      if(button.innerText === ">"){
        articleBody.style.display = "block";
        //change the buttons inner text to be v
        button.innerText = "V";
      }else{
        articleBody.style.display = "none";
        //change the buttons inner text to be v
        button.innerText = ">";
      }
    })
  }
}

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  // first select all buttons with the class .highlightBtn
  const allHighlightBtns = document.querySelectorAll(".highlightBtn")

  allHighlightBtns.forEach((highlightBtn,idx)=>{
    //tell each highlighBtn to listen for a "click" event
    highlightBtn.addEventListener("click",(event)=>{
      //button that was clicked
      const button = event.target;
      //Find the article in which the button that was clicked belongs
      const associatedArticle = button.parentNode.parentNode;
      // console.log(associatedArticle)
      if(button.innerText === "+"){
        //then add the .highlight class to the article and set the text on the button to -
        associatedArticle.classList.add("highlight");
        button.innerText = "-";
      }else{
        associatedArticle.classList.remove("highlight");
        button.innerText = "+";
      }
    })
  })
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
