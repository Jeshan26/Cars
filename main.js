// javascript document

// this is the url of the json file on the server 
let url = 'https://jeshan26.github.io/Car/car.json';



//  this is the fetchh api using promises to fetch the data of the json from server 
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObj) {

        let carTypes = jsonObj.carTypes;
        let section = document.querySelector("section");

        for (let i = 0; i < carTypes.length; i++) {

            // build html eleements dynamically
            let article = document.createElement("article");

            let h2 = document.createElement("h2");
            let image = document.createElement("img");
            let p1 = document.createElement("p1");
            let p2 = document.createElement("p2");
            let ul = document.createElement("ul");
            // img element is being created for every image of car by passing the actaul source of the image
            image.setAttribute('src', 'https://jeshan26.github.io/Cars/pics/' + carTypes[i].image);

            image.setAttribute('alt', carTypes[i].image);
            console.log(image);

            h2.textContent = carTypes[i].name;
            p1.textContent = 'Price :' + carTypes[i].price + '\n';
            p2.textContent = '\n Capacity :' + carTypes[i].capacity;
            let featuress = carTypes[i].features;

            // looping as features contains array

            for (let j = 0; j < featuress.length; j++) {
                let listitem = document.createElement('li');
                listitem.textContent = featuress[j];
                ul.appendChild(listitem);
            }
            // appending the elements in article and then article to section so that everthing is contained in a container
            article.appendChild(image);
            article.appendChild(h2);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(ul);

            section.appendChild(article);
        }
    });