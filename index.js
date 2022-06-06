const externalLink = document.getElementById("extlink");

function clickAlert() {
    alert('Open an external link?');
}
function addingEventListener() {
    externalLink.addEventListener('click', clickAlert);
}

console.log(addingEventListener())