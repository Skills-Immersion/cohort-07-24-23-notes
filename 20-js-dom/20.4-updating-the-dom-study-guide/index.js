/* 
1. addHeadingsAndImages-> make all <article>Puppy</article> look like 
        <article>
            <h3>Puppy</h3>
            <img src = "linkgoeshere">
        </article>
2. styleKittensandPuppies-> style all cats and dogs by adding the classlist "kitten" or "puppy" to the article containing either a kitten or a puppy
    eg: <article><h3>Puppy</h3></article> will look like <article class="puppy"><h3>Puppy 1</h3></article> and <article class="kitten"><h3>Kitten 1</h3></article>
3. separateCatsFromDogs
    -create a "kittens" section with the class of "kittens" to put kitten articles into
    -if the article has a kitten, remove it from that section and add it to a new section for kittens
*/



let images = [
    "https://media.tenor.com/BlHLysXBit4AAAAC/puppy-love-hi.gif",
    "https://media.tenor.com/PTBNHIGHS-kAAAAd/dog-smile.gif",
    "https://media.tenor.com/bK1qpWGyQKkAAAAM/kitty.gif",
    "https://media.tenor.com/avkEJ6QsXLcAAAAM/puppy.gif",
    "https://media.tenor.com/XybizgnL1zQAAAAM/kittens-cute.gif",
    "https://media.tenor.com/gZHJZ3gNDYwAAAAM/cute-cat.gif",
    "https://media.tenor.com/JMv_beVhW98AAAAM/perrete.gif",
    "https://media.tenor.com/g9bkJfFtovMAAAAM/dog.gif",
    "https://media.tenor.com/kKvpaWwGoPcAAAAM/stretch-kitty.gif",
    "https://media.tenor.com/WT7snNMnZoMAAAAM/luv-you-cute-kitten.gif"
];

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~solutions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


function addHeadingsAndImages(){
    let articles = document.querySelectorAll("article");
    for(let i = 0; i< articles.length; i++){
        let article = articles[i];
        let h2 = document.createElement("h2");
        let imgTag = document.createElement("img");
        imgTag.src = images[i];
        h2.innerText = article.innerText;
        article.innerText = "";
        article.appendChild(h2);
        article.appendChild(imgTag);
    }
}

// addHeadingsAndImages();




/**
  Write the addheadings() function here
*/

// function addHeadings(){
//     let articles = document.querySelectorAll("article");
//     for(let article of articles){
//       let h1 = document.createElement("h2");
//       h1.innerText = article.innerText;
//       article.innerText = "";
//       article.appendChild(h1);
//     }
//   }

//   addHeadings();
  
//   /**
//     Write the styleTutorialsAndArticles() function here
//   */
  
//   function styleTutorialsAndArticles(){
//     let articles = document.querySelectorAll("article");
//     for(let article of articles){
//       console.log(article.innerText)
//       if(article.innerText.toLowerCase().includes("tutorial")){
//         article.classList.add("tutorial")
//       }else{
//         article.classList.add("article")
//       }
//     }
//   }
  
//   /**
//     Write the separateAllTutorials() function here
//   */
  
//   function separateAllTutorials(){
//     let articles = document.querySelectorAll("article");
//     let articlesSection = document.querySelector(".articles")
//     let tutorialsSection = document.createElement("section");
//     tutorialsSection.classList.add("tutorials");
//     for(let article of articles){
     
//       if(article.innerText.toLowerCase().includes("tutorial")){
//         articlesSection.removeChild(article);
//         tutorialsSection.appendChild(article);
//       }
//     }
  
//     let container = document.querySelector(".container");
//     container.appendChild(tutorialsSection);
//   }

