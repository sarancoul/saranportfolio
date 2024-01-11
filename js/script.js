let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetHeight - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
        }
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //////////////////////////////////////////////////////////////////////////////
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
     reset: true,
     distance : '80px',
     duration : 2000,
     delay: 200
    });
    

    ScrollReveal().reveal('.accueil-contenaire, .header', { origin: 'top' });
    ScrollReveal().reveal('.accueil-img, .service-contenant, .portfolio-boite, .contact form', { origin : 'bottom'});
    ScrollReveal().reveal('.accueil-contenaire h1, .propos-img', {origin : 'left'});
    ScrollReveal().reveal('.accueil-contenaire p, .propos-contenant', {origin: 'right'});

 ///////////////////partie contact /////////////////////////////////////////////////:
 const form = document.querySelector("form");
 const fullName = document.getElementById("name");
 const email = document.getElementById("email");
 const phone = document.getElementById("phone");
 const subject = document.getElementById("subject");
 const message = document.getElementById("message");

// function sendEmail() {
//      bodyMessage = `Full Name: ${fullName.value}<br> Email:  ${email.value}<br> Phone Number:  ${phone.value}<br> Message:  ${message.value}<br>`;
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "sc523644@gmail.com",
//         Password : "118ADDBF3AF95FABB2525A7545D597ADF397",
//         To : 'sc523644@gmail.com',
//         From : "sc523644@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message =>{
//         if (message == "OK") {
//             Swal.fire({
//                 title: "Validé",
//                 text: "Message envoyer avec succès!",
//                 icon: "success"
//               });
//         }
//       }
//     );   
// }
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
// });