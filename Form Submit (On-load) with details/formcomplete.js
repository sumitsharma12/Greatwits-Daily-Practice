// document.write("<h1>Your Form is Submitted</h1> ")
function formComplete() {
  document.querySelector('.nameOfUser').textContent = getQueryStringValue("name");
  document.querySelector('.emailOfUser').textContent = getQueryStringValue("email");
  document.querySelector('.PhoneOfUser').textContent = getQueryStringValue("Phone");
  // console.log(window.location.search)
}

function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
