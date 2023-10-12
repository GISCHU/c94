var firebaseConfig = {
    apiKey: "AIzaSyCOBN2q37096rfSspbMbkOO6npFkbi6Jfw",
    authDomain: "chat-8f6c2.firebaseapp.com",
    databaseURL: "https://chat-8f6c2-default-rtdb.firebaseio.com",
    projectId: "chat-8f6c2",
    storageBucket: "chat-8f6c2.appspot.com",
    messagingSenderId: "945564276990",
    appId: "1:945564276990:web:e5e95667bb5e101c16edaf"
  };

  var app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();