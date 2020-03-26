// javascript document

// access the jason file using an xhr object



// This is the function in which XHR Object is being created 
function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function() {
        callback(xhr.response);
    };

    xhr.send();
}




// below is the callback function which is being called 

function car(jsonObj){
 
let carTypes= jsonObj.carTypes;
let section = document.querySelector("section");

for(let i=0; i<carTypes.length; i++ ){

    // build html eleements dynamically
let article= document.createElement("article");

let h2= document.createElement("h2");
let image= document.createElement("img");
let p1= document.createElement("p1");
let p2= document.createElement("p2");
let ul= document.createElement("ul");
 // img element is being created for every image of car by passing the actaul source of the image
image.setAttribute('src','https://jeshan26.github.io/CarJson/pics/'+ carTypes[i].image);

image.setAttribute('alt',carTypes[i].image);
console.log(image);

h2.textContent= carTypes[i].name;
p1.textContent= 'Price :'+ carTypes[i].price +'\n';
p2.textContent= '\n Capacity :'+ carTypes[i].capacity;
let featuress= carTypes[i].features;

 // looping as features contains array

for(let j=0;j<featuress.length;j++){  
let listitem = document.createElement('li');
listitem.textContent= featuress[j];
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
}
//  this is the function being ivoked 
loadAsset('https://jeshan26.github.io/Car/car.json', 'json', car);