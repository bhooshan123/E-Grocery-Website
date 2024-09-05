
var a, b, c, d;
a = document.getElementById("one");
b = document.getElementById("two");
c = document.getElementById("three");
d = document.getElementById("four");
var r = document.getElementById("b1");
var s = document.getElementById("b2");

r.onclick = function ()
{
    d.classList.add("mover");
    a.classList.add("hide");
    a.classList.remove("show");
    c.classList.add("movel2");
    b.classList.add("hide");
    b.classList.remove("show");
    c.classList.remove("hide");
    c.classList.add("show");
    d.classList.remove("hide");
    d.classList.add("show");
}
s.onclick = function ()
{
    b.classList.add("mover2");
    c.classList.add("hide");
    c.classList.remove("show");
    a.classList.add("movel");
    d.classList.add("hide");
    d.classList.remove("show");
    b.classList.remove("hide");
    b.classList.add("show");
    a.classList.remove("hide");
    a.classList.add("show");
}
// Get elements by their IDs and store them in arrays
/*var elements = [
    document.getElementById("one"),
    document.getElementById("two"),
    document.getElementById("three"),
    document.getElementById("four")
];

var buttons = [
    document.getElementById("b1"),
    document.getElementById("b2")
];

function manageClasses(elem, classesToAdd, classesToRemove) {
    classesToAdd.forEach(cls => {
        elem.classList.add(cls);
    });
    classesToRemove.forEach(cls => {
        elem.classList.remove(cls);
    });
}

buttons[0].onclick = function () {
    elements.forEach((element, index) => {
        if (index % 2 === 0) { 
            manageClasses(element, ["show"], ["hide"]);
        } else {
            manageClasses(element, ["hide"], ["show"]);
        }
    });

    manageClasses(elements[3], ["mover", "show"], ["hide"]);
    manageClasses(elements[2], ["movel2"], []);
};

buttons[1].onclick = function () {
    elements.forEach((element, index) => {
        if (index % 2 !== 0) { // Apply to elements at odd indices (1 and 3)
            manageClasses(element, ["show"], ["hide"]);
        } else {
            manageClasses(element, ["hide"], ["show"]);
        }
    });

    manageClasses(elements[1], ["mover2"], []);
    manageClasses(elements[0], ["movel"], []);
};*/

