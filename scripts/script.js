const name = document.querySelector("#name")
        const email = document.querySelector("#email")
        const phone = document.querySelector("#phn")
        const msg = document.querySelector("#desc")

        function Mail() {
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "saxenaakshar07@gmail.com",
                Password: "D57CC58291EF44A48EBC60E3409549EE2B2A",
                To: "saxenaakshar07@gmail.com",
                From: "saxenaakshar07@gmail.com",
                Subject: "Support from PortDevAkshar Website",
                Body: "hello"
            }).then(
                message => alert(message)
            );
            alert(name.value)
        }