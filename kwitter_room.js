
//ADD YOUR FIREBASE LINKS HERE
var firebase r= {
      apiKey: "AIzaSyDjYzSWjAod1GBtnQ46q-bKL2BGFhKjWVg",
      authDomain: "instant-d9fac.firebaseapp.com",
      databaseURL: "https://instant-d9fac-default-rtdb.firebaseio.com",
      projectId: "instant-d9fac",
      storageBucket: "instant-d9fac.appspot.com",
      messagingSenderId: "213146486818",
      appId: "1:213146486818:web:0bc1cb79b35e7efc78227b",
      measurementId: "G-L67FGQSXVX"
    };

function getData() {firebase.database().ref("firebase r").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       var user_name=document.getElementById("i1").value 
       firebase.database().ref("/").child("name").update({"name1":user_name})
      });});}
getData();
