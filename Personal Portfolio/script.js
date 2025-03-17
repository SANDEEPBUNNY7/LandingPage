let links = document.getElementsByClassName("links");
let contents = document.getElementsByClassName("contents");
function opentab(tabname) {
    console.log(links)
    for(link of links) {
        link.classList.remove("active-link")
    }
    console.log(contents)
    for(content of contents) {
        content.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}