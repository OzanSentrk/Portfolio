function sendMail(event){
    event.preventDefault(); // Formun otomatik olarak submit edilmesini engelle

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
    };

    emailjs.send("service_d5q801q", "template_uz5jtki", params)
    .then(function(response) {
        
        alert("Email sent successfully!");
    })
    .catch(function(error) {
        
        alert("Email gönderilemedi. Hata: " + JSON.stringify(error));
    });
}
