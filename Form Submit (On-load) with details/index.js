

class Data {
    constructor(name, email, Phone) {
        this.username = name;
        this.useremail = email;
        this.userphone = Phone
    }
}


function submit() {
    let name = document.getElementById('name').value;
    // console.log(name)

    let email = document.getElementById('email').value;
    // console.log(email)

    let Phone = document.getElementById('Phone').value;
    // console.log(Phone)

    let userData = new Data(name, email, Phone)

    window.open('formcomplete.html?name=' + userData.username + '&email=' + userData.useremail + '&Phone=' + userData.userphone, "_self");

    // console.log(userData);


}
