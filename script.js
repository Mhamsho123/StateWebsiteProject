document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;

    if (email !== confirmEmail) {
      event.preventDefault();

      alert("The email addresses do not match. Please enter matching emails.");
    }
  });
