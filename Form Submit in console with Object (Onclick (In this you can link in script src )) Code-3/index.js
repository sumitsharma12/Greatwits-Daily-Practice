
        var name, email, phone, address;
        class Data {
            constructor(name, email, phone, address) {
                this.username = name;
                this.useremail = email;
                this.userphone = phone;
                this.useraddress = address;
            }
        }

        function submit() {

            name = document.getElementById('name').value;
            console.log(name)

            email = document.getElementById('email').value;
            console.log(email)

            phone = document.getElementById('phone').value;
            console.log(phone)

            address = document.getElementById('address').value;
            console.log(address)

            userData = new Data(name, email, phone, address);
            console.log(userData);


        }