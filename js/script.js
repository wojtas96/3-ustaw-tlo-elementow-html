console.log("Czym jest DOM?");

// window.alert("Klaudia");
// alert("Klaudia");

// window.prompt("Podaj swój wiek");
// let age = window.prompt("Podaj swój wiek");
// console.log(`Masz ${age} lat`);

window.confirm("Akceptuję umowę");
let accept = window.confirm("Akceptuję umowę");
if (accept) {
    console.log(`Umowa zaakceptowana`);
} else {
    console.log(`Umowa NIEzaakceptowana`);
}

console.log(window);

console.log(`Wewnętrzna wysokość okna przglądarki wynosi ${window.innerHeight}`);
console.log(`Zewnętrzna wysokość okna przglądarki wynosi ${window.innerHeight}`);