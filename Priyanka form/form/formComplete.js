function formComplete() {
    document.querySelector('.nameOfUser').textContent = getQueryStringValue("name");
    document.querySelector('.emailOfUser').textContent = getQueryStringValue("email");
    document.querySelector('.phoneOfUser').textContent = getQueryStringValue("phone");
    document.querySelector('.addressOfUser').textContent = getQueryStringValue("address");
}

function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

