import * as Routes from '../../js/routes.js'
import * as nav from '../../js/nav.js'
import * as footer from '../../js/createFooter.js'
// import * as checkLoggedIn from '../../js/checkLoggedIn.js'


nav.createNav("../../assets/imgs/logo.png", '../../api/logout.php', '../../api/checkIfLoggedIn.php', '../../index.html','../../pages/upload' ,'../../pages/login', '#', '../../pages/allrecipes/index.html?search', '../../pages/profile','../../uploads/profpic/' )
footer.createFooter('../../assets/imgs/logo.png');

let containerCards = document.getElementById('containerCards')
let categoryBtnContainer= document.querySelector('.categories')

let categories = [
    {
    id : 'allRecipes',
    name: 'All'   
    },
    {
    id : 'asiancuisine',
    name: 'Asian Cuisine'   
    },
    {
    id : 'europeandish',
    name: 'European Dish'   
    },
    {
    id : 'drinks',
    name: 'Drinks'   
    },
    {
    id : 'salad',
    name: 'Salad'   
    },
    {
    id : 'vegetarian',
    name: 'Vegetarian'   
    },
]


categories.map((category)=>{
    let btn = category.id
     btn = document.createElement('button')
    btn.textContent = category.name
    btn.classList.add('categoryBtn')
    btn.addEventListener('click', ()=> getRecipeByCategory(category.id))
    categoryBtnContainer.append(btn)
})

/////////////////////////////////////////////////// EXPERIMENT

export let searchParam = ''

function viewUser(id){
    window.location.href = '../pages/recipe/index.html?q=20'+id
}

const urlparams = new URLSearchParams(window.location.search)
searchParam= urlparams.get('search')
console.log('searchParam', searchParam)





export function searchRecipes(){
   
    $.ajax({
        "url" : '../../api/search.php', //URL of the API
        "type" : "GET", //GET and POST 
        "data" : "search=" + JSON.stringify(searchParam),
        "success" : function (response) { 
            // console.log(response)
            let parseResponse = JSON.parse(response);
            let results = parseResponse.data
            console.log(results)

            if(results.length === 0){
              const markup = `<div class='zeroResults'><h3>No Recipe found</h3></div>`


              return containerCards.insertAdjacentHTML('beforeend', markup)
            }
            results.map((result) =>{
                let markup =`
                <li class='card'>
                <a href="../../pages/recipe/index.html?q=${result.id}">
                <div class="blog-card">
  
                  <figure class="card-banner img-holder" >
                    <img src="../../uploads/recipeImgs/${result.filePath}"  class='recipeImg' loading="lazy"
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
                      <a href="../../pages/recipe/index.html?q=${result.id}" class="card-title hover:underline">
                      ${result.title}
                      </a>
                    </h3>
  
                    <p class="card-text">
                    ${result.description.slice(0, 50)}...
                    </p>
  
                  </div>
  
                </div>
                </a>
              </li>
  
                `
                containerCards.insertAdjacentHTML('beforeend', markup)


            })

       

        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
    
    
}

searchRecipes()



///////////////////////////////////////////////////BACKUP
export function getAllRecipes(){
   
    $.ajax({
        "url" : '../../api/fetchRecipeByCategory.php', //URL of the API
        "type" : "POST", //GET and POST 
        "data" : 'allRecipes', //auth will be our php variable $_POST['auth']
        "success" : function (response) { //success yung response
            // console.log(response)
            let parseResponse = JSON.parse(response);
            let results = parseResponse.data
            console.log(results)
            results.map((result) =>{
                let markup =`
                <li>
                <a href="../../pages/recipe/index.html?q=${result.id}">
                <div class="blog-card">
  
                  <figure class="card-banner img-holder" >
                    <img src="../../uploads/recipeImgs/${result.filePath}"  class='recipeImg' loading="lazy"
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
                      <a href="../../pages/recipe/index.html?q=${result.id}" class="card-title hover:underline">
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
                containerCards.insertAdjacentHTML('beforeend', markup)


            })

       

        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
    
    
}






export function getRecipeByCategory(category){
   
    $.ajax({
        "url" : '../../api/fetchRecipeByCategory.php', //URL of the API
        "type" : "POST", //GET and POST 
        "data" : category+"="+JSON.stringify(category), //auth will be our php variable $_POST['auth']
        "success" : function (response) { //success yung response
            // console.log(response)
            let parseResponse = JSON.parse(response);
            let results = parseResponse.data
            console.log(parseResponse)

          if(parseResponse.data.length === 0 && parseResponse.status === 200){
            containerCards.innerHTML = '';
            let html = `<li class='gridspan-4'> <h3>No recipes posted on this category</h3></li>`
            containerCards.innerHTML = html;
            console.log('zero')
          }

          if(parseResponse.data.length > 0 && parseResponse.status === 200){
              containerCards.innerHTML = '';
              results.map((result) =>{
                  let markup =`
                  <li>
                  <a href="../../pages/recipe/index.html?q=${result.id}">
                  <div class="blog-card">
    
                    <figure class="card-banner img-holder" >
                      <img src="../../uploads/recipeImgs/${result.filePath}"  class='recipeImg' loading="lazy"
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
                        <a href="../../pages/recipe/index.html?q=${result.id}" class="card-title hover:underline">
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
                  containerCards.insertAdjacentHTML('beforeend', markup)
    
    
              })
          
          }
           


       

        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
    
    
}







