console.log("Welcome to Pooja News.")
// f6a64e7f45664bfb87b638910e4adb5e

// Initialize the news api parameters
let source = 'in';
let apiKey = 'f6a64e7f45664bfb87b638910e4adb5e';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an Ajax get request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true)
    ;
// What to do get resquest
xhr.getResponseHeader('content-type', 'application/json');

// What to do response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        // console.log(json);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        id = 0;
        articles.forEach(element => {
            // console.log(element)
            let news = `<div class="my-3 news-card">
                            <!-- Collapse -->
                            <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${id}"  aria-controls="collapseExample${id}"> Breaking News ${id + 1} : <b>${element.title}</b>
                            </button>
                            <div class="collapse accordion" id="collapseExample${id}">
                                <div class = "card">
                                <div class="card-body"><p>${element['content']}.<a href="${element.url}" target = "_blank"> ...read more.</a></p></div>

                                </div>
                            </div>
                            </div>`
            newsHtml += news;
            id += 1;
         });
        newsAccordion.innerHTML = newsHtml;


    } else {
        console.log("Some error occurred");
    }
}

// send the xhr request
xhr.send();

// For searching the news

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputval = search.value.toLowerCase();
    console.log(inputval)
    
    let news = document.getElementsByClassName('news-card');
    console.log(news)
    
    id = 0;
    Array.from(news).forEach(element => {
        let newsTitle = document.getElementsByTagName('b')[id].innerText.toLowerCase();
        let newsTxt = document.getElementsByTagName('p')[id].innerText.toLowerCase();


        if(newsTxt.includes(inputval)){
            element.style.display = 'block';
        }else if(newsTitle.includes(inputval)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
        id += 1;
    });

})
