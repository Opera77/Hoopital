const form = document.getElementById('reservation-form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Récupérer les valeurs du formulaire
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const heure = document.getElementById('heure').value;

  // Envoyer un e-mail avec les informations du formulaire
  const emailBody = `Nom: ${nom}\nE-mail: ${email}\nDate: ${date}\nHeure: ${heure}`;
  // Ici, vous pouvez utiliser un service d'envoi d'e-mails ou une API pour envoyer l'e-mail

  // Afficher le message de confirmation
  form.classList.add('hidden');
  confirmationMessage.classList.remove('hidden');
  confirmationMessage.classList.add('fade-in');
});

// Récupérer les valeurs du formulaire
  //const form = document.querySelector('.form');
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const heure = document.getElementById('heure').value;
  
  /*function msg(e){
    e.preventDefault;
        const nom = document.querySelector('.name'),
        email = document.querySelector('.email');
       
      Email.send({
      SecureToken : "2c3b48f2-d80f-48b3-97d1-40c01faec782",
      To : 'jeremiengovula77@gmail.com',
      From : email.value,
      Subject : "Resevation",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );

}

form.addEventListener("submit", msg);*/