// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, get, child, update, set } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEjbKjo7bLbXsLm2FFS3nb5TjXNXMg2lc",
    authDomain: "mhig-edde5.firebaseapp.com",
    projectId: "mhig-edde5",
    storageBucket: "mhig-edde5.appspot.com",
    messagingSenderId: "855050639590",
    appId: "1:855050639590:web:84c985fb7c8e066681c327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const mhig = getDatabase(app);
const dbref = ref(database);
//console.log('ds')
//code beginssssssssssssssssssssssss

var questions = 1;
var map = {};
var map_symptoms = {};

let stored_symptoms = [[],[],[],[],[],[],[]]

var major = 0;
var persistent = 0;
var mania = 0;
var depressive = 0;
var seasonal = 0;
var psychotic = 0;
var atypical = 0;

var types = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6];
let symptoms = ['Loss of interest or pleasure in your activities', 'weight loss or gain', 'Trouble getting to sleep or feeling sleepy during the day', 'Feeling restless and agitated', 'very sluggish and slowed down physically or mentally', 'Being tired and without energy', 'Feeling worthless or guilty', 'thoughts of suicide', 'Angry outbursts, irritability, or frustration', 'Feelings of emptiness or hopelessness', 'Change in your appetite (not eating enough or overeating)', 'Sleeping too much or too little', 'Lack of energy, or fatigue', 'Low self-esteem', 'Trouble concentrating', 'Trouble making decisions', 'Feeling hopeless', 'Getting annoyed quickly/impatience/short temper', 'Self Criticism and feeling incapable', 'Sadness', 'Abnormally upbeat, jumpy, or wired', 'Increased activity, energy or agitation', 'Exaggerated sense of well-being and self-confidence (euphoria)', 'Decreased need for sleep', 'Unusual talkativeness', 'Racing thoughts and distractibility', 'Depressed mood, such as feeling sad, empty, hopeless or tearful', 'Marked loss of interest or feeling no pleasure in all — or almost all — activities', 'Significant decrease or increase in appetite', 'Either insomnia or sleeping too much', 'Fatigue or loss of energy', 'Feelings of worthlessness or excessive or inappropriate guilt', 'Decreased ability to think or concentrate, or indecisiveness', 'Thinking about, planning or attempting suicide', 'Persistent Low Mood', 'Feeling Lethargic', 'Gaining weight', 'Difficulty Concentrating', 'Irritability', 'Losing Interest', 'Feeling Hopeless', 'Isolation', 'Oversleeping in winter, insomnia in summer', 'Increased irritability in the summer', 'Hallucinations', 'Delusions', 'Feeling moody', 'Wrongly believing that others are trying to harm you', 'Fatigue/exhaustion', 'Disturbed sleep schedule', 'Change in behaviors and feelings', 'Intellectual Impairment', 'Feeling worthless and guilty', 'Changes in appetite', 'Feeling heaviness in arms and legs', 'Oversensitive to criticism', 'Heterogeneity', 'Chronic/Severe Injury', 'Abuse', 'Loss of Interest', 'Drug or alcohol abuse', 'Significant changes in life']
document.getElementById("next_button1").addEventListener("click", next)
for (let i = 0; i < 62; i++) {
    for (let j = 0; j < 4; j++) {
        document.getElementById("answer_button" + (i + 1).toString() + "." + (j + 1).toString()).addEventListener("click", (e) => {
            document.getElementById("answer_button" + (i + 1).toString() + "." + (j + 1).toString()).innerText = "✅ ";
            e.preventDefault();
            if (j + 1 <= 2) {
                map_symptoms[i] = symptoms[i];
            } else {
                map_symptoms[i] = "";
            }
            switch (types[i]) {
                case 0:
                    map[i] = (4 - j);
                    break;
                case 1:
                    map[i] = (4 - j);
                    break;
                case 2:
                    map[i] = (4 - j);
                    break;
                case 3:
                    map[i] = (4 - j);
                    break;
                case 4:
                    map[i] = (4 - j);
                    break;
                case 5:
                    map[i] = (4 - j);
                    break;
                case 6:
                    map[i] = (4 - j);
                    break;
            }
            console.log("Major: " + major);
            console.log("Persistent: " + persistent);
            console.log("Mania: " + mania);
            console.log("Depressive: " + depressive);
            console.log("Seasonal: " + seasonal);
            console.log("Psychotic: " + psychotic);
            console.log("Atypical: " + atypical);
        });
    }
}

function next(e) {
    e.preventDefault();
    if (map_symptoms[questions - 1] !== "") {
        stored_symptoms[types[questions - 1]].push(map_symptoms[questions - 1]);
        console.log(stored_symptoms);
    }
    switch (types[questions - 1]) {
        case 0:
            major += map[questions - 1];
            break;
        case 1:
            persistent += map[questions - 1];
            break;
        case 2:
            mania += map[questions - 1];
            break;
        case 3:
            depressive += map[questions - 1];
            break;
        case 4:
            seasonal += map[questions - 1];
            break;
        case 5:
            psychotic += map[questions - 1];
            break;
        case 6:
            atypical += map[questions - 1];
            break;
    }

    let ques = document.getElementById("q" + questions.toString());
    if (questions.toString() < 62) {
        ques.setAttribute("class", "contains hidden");
        questions++;
        document.getElementById("q" + questions.toString()).setAttribute("class", "contains");
    } else {
      ques.setAttribute("class", "contains hidden");
      document.getElementById("bottom_bar").setAttribute("class", "contains hidden");
      document.getElementById("conclusion").setAttribute("class", "contains");

    }
}
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded");
  document.getElementById("symptoms_button").addEventListener("click", loadsymp); 

  function loadsymp(e) {
    console.log("entered");
    document.getElementById("s1").setAttribute("class", "contains");
    document.getElementById("conclusion").setAttribute("class", "contains hidden");

    // Retrieve userID from local storage
    const userID = localStorage.getItem("userID");
    console.log(userID);

    if (!userID) {
    console.error("userID not found in local storage");
    return; // Exit function if userID is not found
}

const userRef = ref(mhig, 'user/' + userID);

// Retrieve patient_name
get(child(userRef, "patient_name")).then((snapshot) => {
    const existingName = snapshot.val();

    // Retrieve patient_age
    get(child(userRef, "patient_age")).then((snapshot) => {
        const existingAge = snapshot.val();

        // Update database with existing values of name and age, along with symptoms
        update(userRef, {
            patient_name: existingName,
            patient_age: existingAge,
            major_depression_symptoms: stored_symptoms[0],
            persistent_depression_symptoms: stored_symptoms[1],
            bipolar_mania_symptoms: stored_symptoms[2],
            bipolar_depressive_symptoms: stored_symptoms[3],
            seasonal_depression_symptoms: stored_symptoms[4],
            psychotic_depression_symptoms: stored_symptoms[5],
            atypical_depression_symptoms: stored_symptoms[6]
        }).then(() => {
            alert("Data uploaded successfully!");
        }).catch((error) => {
            console.error("Error uploading data:", error);
        });
    }).catch((error) => {
        console.error("Error retrieving patient age:", error);
    });
}).catch((error) => {
    console.error("Error retrieving patient name:", error);
});



  document.getElementById("next_button1").addEventListener("click", next);

  function next(e) {
      e.preventDefault();
      if (map_symptoms[questions - 1] !== "") {
          stored_symptoms[types[questions - 1]].push(map_symptoms[questions - 1]);
          console.log(stored_symptoms);
      }
      switch (types[questions - 1]) {
          case 0:
              major += map[questions - 1];
              break;
          case 1:
              persistent += map[questions - 1];
              break;
          case 2:
              mania += map[questions - 1];
              break;
          case 3:
              depressive += map[questions - 1];
              break;
          case 4:
              seasonal += map[questions - 1];
              break;
          case 5:
              psychotic += map[questions - 1];
              break;
          case 6:
              atypical += map[questions - 1];
              break;
      }

      let ques = document.getElementById("q" + questions.toString());
      if (questions.toString() < 62) {
          ques.setAttribute("class", "contains hidden");
          questions++;
          document.getElementById("q" + questions.toString()).setAttribute("class", "contains");
      } else {
        ques.setAttribute("class", "contains hidden");
        document.getElementById("bottom_bar").setAttribute("class", "contains hidden");
        document.getElementById("conclusion").setAttribute("class", "contains");

      }
  }

  document.getElementById("prefernotbutton1").addEventListener("click", prefernot);

  function prefernot(e) {
      e.preventDefault();
      let ques = document.getElementById("q" + questions.toString());
      ques.setAttribute("class", "contains hidden");
      questions++;
      document.getElementById("q" + questions.toString()).setAttribute("class", "contains");
  }

  

  document.getElementById("home_button1").addEventListener("click", home);

  function home(e) {
      e.preventDefault();
      window.location.replace("open.html");
      questions = 1;
      major = 0;
      persistent = 0;
      mania = 0;
      hypomania = 0;
      seasonal = 0;
      psychotic = 0;
      atypical = 0;

      console.log(major);
      console.log(persistent);
      console.log(mania);
      console.log(hypomania);
      console.log(seasonal);
      console.log(psychotic);
      console.log(atypical);
  }

  document.getElementById("reset").addEventListener("click", home);

  function home(e) {
      e.preventDefault();
      window.location.replace("open.html");
      questions = 1;
      major = 0;
      persistent = 0;
      mania = 0;
      hypomania = 0;
      seasonal = 0;
      psychotic = 0;
      atypical = 0;

      console.log(major);
      console.log(persistent);
      console.log(mania);
      console.log(hypomania);
      console.log(seasonal);
      console.log(psychotic);
      console.log(atypical);
  }

}});
