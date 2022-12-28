
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBPcObR33DH1T1eTCXsTLD-nQHNbsCcYJY",
      authDomain: "kwitter2-a5a6b.firebaseapp.com",
      projectId: "kwitter2-a5a6b",
      storageBucket: "kwitter2-a5a6b.appspot.com",
      messagingSenderId: "75325708456",
      appId: "1:75325708456:web:141712644074508b2c8a9d",
      measurementId: "G-2GZ9T47HPT"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
