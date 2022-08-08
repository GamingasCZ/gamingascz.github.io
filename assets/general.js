
function el(selector) {
    return document.querySelector(selector);
}

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "";
}

function toggleVis(element) {
    // Return if hidden after function call
    //element.style.display == "none" ? show(element) : hide(element)
    return element.style.transform == "scaleY(1)"
}

function onHover(el, fun) {
    if (document.addEventListener) { el.addEventListener("mouseover", fun) }
    else if (document.attachEvent) { el.attachEvent("")}
}

class prop {
    constructor(element) {
        this.element = element
    }

    isHidden() {
        return this.element.style.display == "none"
    }
}