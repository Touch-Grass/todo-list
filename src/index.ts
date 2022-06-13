const btn = document.getElementById("button__next");
const btnSuprise = document.getElementById("button__suprise");
const btnAdd = document.getElementById("button__add");
const btnSubmit = document.getElementById("button__submit");
const inputAdd: any = document.getElementById("input__add__list__item");
let list: any = []; //Array for carousel list
let count: number = 0; //Sets the index of the array.

//Init
(<HTMLButtonElement>btn!).innerHTML = "Show List"; // Set original button name
(<HTMLInputElement>inputAdd)!.style.display = 'none';
(<HTMLButtonElement>btnSubmit)!.style.display = 'none';
document.getElementById('alert__warning')!.style.display = 'none';
document.getElementById('alert__warning--list')!.style.display = 'none';

btn?.addEventListener("click", () => {
    if (list.length === 0) {
        document.getElementById('alert__warning--list')!.style.display = 'block';
    } else {
        (<HTMLButtonElement>btn!).innerHTML = "Next"; // Change btn name when btn is clicked.
        let listHTML: any = `<p>${list[count]}</p>`
        count++;
        if (count === list.length) 
            count = 0;
        document.getElementById("p__html")!.innerHTML = listHTML; //Sets the HTML to a value in the list.
    }
});

btnSuprise?.addEventListener("click", () => {
    count = Math.floor(Math.random() * (list.length - 0));  //Getting a random number that is the length of the list.
    let listHTML: any = `<p>${list[count]}</p>`
    document.getElementById("p__html")!.innerHTML = listHTML;
});

btnAdd?.addEventListener("click", () => {
    inputAdd.style.display = inputAdd.style.display == 'none' ? 'block' : 'none';
    btnSubmit!.style.display = btnSubmit!.style.display == 'none' ? 'block' : 'none';
});

btnSubmit?.addEventListener("click", () => {
    if ((<HTMLInputElement>inputAdd)?.value == '') { //If no value if inputed
        document.getElementById('alert__warning')!.style.display = 'block';
    } else {
        list.push((<HTMLInputElement>inputAdd)?.value);
        console.log(list);
        (<HTMLInputElement>inputAdd)!.value = '';
    }
});