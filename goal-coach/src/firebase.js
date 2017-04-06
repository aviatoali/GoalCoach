import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB7jUb5I1TsMz8AjeJ7IydBh566qkLQN20",
  authDomain: "goalcoach-acc01.firebaseapp.com",
  databaseURL: "https://goalcoach-acc01.firebaseio.com",
  projectId: "goalcoack-acc01",
  storageBucket: "goalcoack-acc01.appsport.com",
  messagingSenderId: "377085692493"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
