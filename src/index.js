import { firebase, googleAuthProvider } from "./firebase";

import renderHeader from "./Header";
import renderNav from "./Nav";
import renderMain from "./Main";
import renderLanding from "./Landing";

const elAuth = document.querySelector("#auth");
const elHeader = document.querySelector("header");
const elNav = document.querySelector("nav");
const elMain = document.querySelector("main");

elAuth.addEventListener("click", event => {
  if (event.target && event.target.classList.contains("signInWithGoogle")) {
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
});

elHeader.addEventListener("click", event => {
  if (event.target && event.target.classList.contains("deslogar")) {
    firebase.auth().signOut();
  }
});

// const albums = ["album1", "album2", "album3", "album4"];
// const header = [{ name: "Header Diego" }, { name: "Header Diego 2" }];
// const headerEl = document.getElementById("header");
// const diego = document.getElementById("app");
// console.log(user);

function renderApp(user) {
  renderHeader(user, elHeader);
  renderNav(null, elNav);
  renderMain(null, elMain);
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    elAuth.innerHTML = "";
    elAuth.classList.add("hidden");
    renderApp(user.uid);
  } else {
    renderLanding(null, elAuth);
    // elAuth.innerHTML = deslogado;
    elAuth.classList.remove("hidden");
    elHeader.innerHTML = "";
    elMain.innerHTML = "";
    elNav.innerHTML = "";
  }
});
