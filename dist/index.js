"use strict";
var btn = document.getElementById("button__next");
var btnSuprise = document.getElementById("button__suprise");
var btnAdd = document.getElementById("button__add");
var btnSubmit = document.getElementById("button__submit");
var inputAdd = document.getElementById("input__add__list__item");
var list = [];
var count = 0;
btn.innerHTML = "Show List";
inputAdd.style.display = 'none';
btnSubmit.style.display = 'none';
document.getElementById('alert__warning').style.display = 'none';
document.getElementById('alert__warning--list').style.display = 'none';
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    if (list.length === 0) {
        document.getElementById('alert__warning--list').style.display = 'block';
    }
    else {
        btn.innerHTML = "Next";
        var listHTML = "<p>".concat(list[count], "</p>");
        count++;
        if (count === list.length)
            count = 0;
        document.getElementById("p__html").innerHTML = listHTML;
    }
});
btnSuprise === null || btnSuprise === void 0 ? void 0 : btnSuprise.addEventListener("click", function () {
    count = Math.floor(Math.random() * (list.length - 0));
    var listHTML = "<p>".concat(list[count], "</p>");
    document.getElementById("p__html").innerHTML = listHTML;
});
btnAdd === null || btnAdd === void 0 ? void 0 : btnAdd.addEventListener("click", function () {
    inputAdd.style.display = inputAdd.style.display == 'none' ? 'block' : 'none';
    btnSubmit.style.display = btnSubmit.style.display == 'none' ? 'block' : 'none';
});
btnSubmit === null || btnSubmit === void 0 ? void 0 : btnSubmit.addEventListener("click", function () {
    if ((inputAdd === null || inputAdd === void 0 ? void 0 : inputAdd.value) == '') {
        document.getElementById('alert__warning').style.display = 'block';
    }
    else {
        list.push(inputAdd === null || inputAdd === void 0 ? void 0 : inputAdd.value);
        console.log(list);
        inputAdd.value = '';
    }
});
//# sourceMappingURL=index.js.map