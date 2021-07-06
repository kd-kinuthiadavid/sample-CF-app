import './App.css';
import firebase from "firebase";
import "firebase/functions";


// values being read from a .emv
const { REACT_APP_FB_API_KEY, REACT_APP_FB_AUTH_DOMAIN, REACT_APP_FB_PROJECTID, REACT_APP_FB_STORAGE_BUCKET,REACT_APP_FB_MSG_SENDER_ID, REACT_APP_FB_APP_ID, REACT_APP_FB_MEASUREMENT_ID } = process.env;

// initialize the SDK
const firebaseConfig = {
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: REACT_APP_FB_AUTH_DOMAIN,
  projectId: REACT_APP_FB_PROJECTID,
  storageBucket: REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FB_MSG_SENDER_ID,
  appId: REACT_APP_FB_APP_ID,
  measurementId: REACT_APP_FB_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Functions through Firebase
const functions = firebase.functions();

function App() {

  const sampleFunc1 = () => {
    console.log("**** 2 ******")
    // calls sampleFunc1
    sampleFunc2();
  };

  const sampleFunc2 = () => {
    console.log("**** 3 ******")
    // calls addMsgFunc
    addMsgFunc();
  };

  const addMsgFunc = async () => {
    console.log("**** 4 ******")
    const addMessage = functions.httpsCallable('addMessageCallable');
    try {
      console.log("**** 5: before result ******")
      const result = await addMessage({ text: "working!!" });
      console.log("********* 6. result ******", result.data)
      console.log("**** 7: after result ******")
    } catch (error) {
      console.error("**** err: *****", error)
    }
  };

  const handleClick = () => {
    console.log("**** 1 ******")
    sampleFunc1()
    console.log("**** 8. done ******")
  }
  return (
    <div className="App">
      <div>
        <h3>hello world!</h3>
        <button onClick={handleClick}>click me</button>
      </div>
    </div>
  );
}

export default App;
