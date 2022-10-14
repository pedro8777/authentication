function login() {
  firebase.auth().signInWithEmailAndPassword(
      form.email().value, form.password().value
  ).then(response => {
      window.location.href = "pages/home/home.html";
  }).catch(error => {
      alert(getErrorMessage(error));
  });
}

function register() {
  window.location.href = "cadastro.html"
}

function entrar() {
  window.location.href = "login.html"
}