import * as nav from '../../js/nav.js'
import * as footer from '../../js/createFooter.js'
import * as Routes from '../../js/routes.js'
let containerCardsRecent = document.getElementById('containerCardsRecent')





export function getRecentRecipes(){
   
    $.ajax({
        "url" : Routes.fetchRecentRecipes, //URL of the API
        "type" : "POST", //GET and POST 
        "data" : "getRecentRecipes", //auth will be our php variable $_POST['auth']
        "success" : function (response) { //success yung response
            // console.log(response)
            let parseResponse = JSON.parse(response);
            let results = parseResponse.data
            console.log(results)
            results.map((result) =>{
                let markup =`
                <li>
                <a href="pages/recipe/index.html?q=${result.id}">
                <div class="blog-card">
  
                  <figure class="card-banner img-holder" style="--width: 550; --height: 660;">
                    <img src="./uploads/recipeImgs/${result.filePath}" width="550" height="660" loading="lazy"
                      alt="Creating is a privilege but it’s also a gift" class="img-cover">

                  </figure>
  
                  <div class="card-content">

                  <ul class="card-meta-list">

                  <li>
                    <a href="#" class="card-tag">Uploaded by: <strong>${result.uploadedBy}</strong></a>
                  </li>

                  <li>
                    <a href="#" class="card-tag">${result.formattedDate}</a>
                  </li>


                </ul>
  

  
                    <h3 class="h4">
                      <a href="pages/recipe/index.html?q=${result.id}" class="card-title hover:underline">
                      ${result.title}
                      </a>
                    </h3>
  
                    <p class="card-text">
                    ${result.description}
                    </p>
  
                  </div>
  
                </div>
                </a>
              </li>
  
                `
                containerCardsRecent.insertAdjacentHTML('beforeend', markup)


            })

       

        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
    
    
}

getRecentRecipes()



nav.createNav("./assets/imgs/logo.png", './api/logout.php', 'api/checkIfLoggedIn.php', '#','./pages/upload' ,'./pages/login', './pages/allrecipes', './pages/allrecipes/index.html?search', './pages/profile','./uploads/profpic/' )
footer.createFooter('./assets/imgs/logo.png')




