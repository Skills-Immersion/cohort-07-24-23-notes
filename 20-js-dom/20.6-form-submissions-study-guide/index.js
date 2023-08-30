/* ~~~~~~~~~~~~~~~~~~~~~~~~ 20.6 form submissions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
  
  1. Validate the form
      Ensure that the form is not blank. Here, blank means an empty string or a string containing only spaces. If the form is blank, display an error message by creating and appending a new error element to the end of the form. The error element must take the following form:

      <div class="error" id="searchError">Please enter a search term</div>
    If the form is not blank, the error element should not be on the form.


  2. Perform the search
     Perform a case-insensitive search of the titles of the articles (that is, the innerHTML values of the h2 elements). If the search term matches any part of the title, the article should be displayed. If the search term doesn't match any part of the title, the article should be hidden.

     To hide an article, add the class hidden to the article element. To make it visible again, remove the class hidden from the article element.

     If a second search is conducted, articles hidden by any previous searches should be made visible again.
  */

function main() {}
