function Data(name, email, phone, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
}

function submit() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let userData = new Data(name, email, phone, address);
    window.open('formComplete.html?name=' + userData.name + '&email=' + userData.email + '&phone=' + userData.phone + '&address=' + userData.address, "_self");
    // return userData;
}
