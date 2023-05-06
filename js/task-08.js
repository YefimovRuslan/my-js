const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", onFormData);

function onFormData(event) {
  event.preventDefault();

  const formControlsCollection = event.currentTarget.elements;
  const email = formControlsCollection.email.value;
  const password = formControlsCollection.password.value;
  const formData = { email, password };

  if (email === "" || password === "") {
    alert("all fields must be filled");
    return;
  }

  console.log(formData);

  event.currentTarget.reset();
}
