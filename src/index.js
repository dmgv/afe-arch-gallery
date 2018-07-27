// import firebase from "firebase/app";
// import "firebase/database";
// import "firebase/auth";

import { firebase, googleAuthProvider, database } from "./firebase";

import renderAlbums from "./AlbumList";
import renderHeader from "./Header";
import renderDiego from "./auth";

//
//
//
// const config = {
//   apiKey: "AIzaSyAcjipV2zes4leNTi2BAScXxPtvyQXpAPY",
//   authDomain: "arch-gallery-frontend.firebaseapp.com",
//   databaseURL: "https://arch-gallery-frontend.firebaseio.com",
//   projectId: "arch-gallery-frontend",
//   storageBucket: "arch-gallery-frontend.appspot.com",
//   messagingSenderId: "891741189291",
// };

// firebase.initializeApp(config);

//
//
//

// function googleSignIn() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope("profile");
//   provider.addScope("email");
//   firebase.auth().signInWithPopup(provider);
// }

const divAuth = document.getElementById("auth");
divAuth.addEventListener("click", event => {
  if (event.target && event.target.classList.contains("deslogar")) {
    firebase.auth().signOut();
  }
  if (event.target && event.target.classList.contains("signInWithGoogle")) {
    // googleSignIn();
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
});

const headerHTML = document.getElementById("header");
headerHTML.addEventListener("click", event => {
  if (event.target && event.target.classList.contains("deslogar")) {
    firebase.auth().signOut();
  }
});

const albums = ["album1", "album2", "album3", "album4"];
const albumList = document.getElementById("album-list");

const header = [{ name: "Header Diego" }, { name: "Header Diego 2" }];
const headerEl = document.getElementById("header");
const diego = document.getElementById("app");

// console.log(user);

function renderHTML() {
  renderHeader(header, headerEl);
  renderAlbums(albums, albumList);
  // diego.innerHTML = renderDiego();
}
//
//

function BlogPost(postData) {
  return `<div class="post">
            <h1>${postData.title}</h1>
            <h3>By ${postData.author}</h3>
            <p>${postData.body}</p>
          </div>`;
}

function renderApp() {
  const blogPost = {
    isSponsored: true,
    author: "Brandon Smith",
    title: "A CSS Trick",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
  blogPost(blogPost);
}

const logado = `
<h1>Você está logado</h1>
<button class="deslogar">Deslogar</button>
<div id="album-list"></div>
`;

const deslogado = `
<button class="signInWithGoogle">Sign in with Google</button>
`;

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    divAuth.innerHTML = "";
    divAuth.classList.add("hidden");
    renderHTML();
    // window.user = user;
  } else {
    divAuth.innerHTML = deslogado;
    divAuth.classList.remove("hidden");
    // divApp.innerHTML = "";
  }
});
