const toolbut = document.getElementById("toolbut");
const toolbar2 = document.getElementById("toolbar2");
const search =document.getElementById("search")
function toolButt() {
				toolbar2.style.display="block";
}
function toolHed() {
				toolbar2.style.display="none";
}
//function searchButt() {
//				console.log(search.value)
//}

function searchButt(){
    let textToSearch = document.getElementById("search").value;
    let paragraph = document.getElementById("paragraph");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${textToSearch}`,"gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}