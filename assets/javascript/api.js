const config = {
  apiKey: "AIzaSyCPNtdBaMWSmmCGakJ4GQ2UX6hz4uU2XsQ",
  authDomain: "idk-you-decide.firebaseapp.com",
  databaseURL: "https://idk-you-decide.firebaseio.com",
  projectId: "idk-you-decide",
  storageBucket: "idk-you-decide.appspot.com",
  messagingSenderId: "993304386734"
};

firebase.initializeApp(config);

const API_KEY_Weather = "090fe3e138a100c59c38bfb81c2de493"


// Note remember to create these same variables in Firebase!
let itemObject = {
  item: "",
  userlikes,
  userdislikes,
}

// Click Button changes what is stored in firebase
$("#like-btn").on("click", function (event) {

  // Get inputs
  item = this.textContent
  itemObject.userlikes +
    //Change what is saved in firebase
    database.ref(this).set({
      userlikes: itemObject.userlikes
    });
});

// Click Button changes what is stored in firebase
$("#dislike-btn").on("click", function (event) {

  // Get inputs
  item = this.textContent
  itemObject.userdislikes +

    //Change what is saved in firebase
    database.ref(this).set({
      userdislikes: itemObject.userdislikes
    });
});
