import firebase from 'firebase'

// Firebase config
var config = {
  apiKey: 'AIzaSyBKlQ-FYlY7iBiP6kzHScrmF79jS2ImVuM',
  authDomain: 'vote-df33c.firebaseapp.com',
  databaseURL: 'https://vote-df33c.firebaseio.com',
  storageBucket: 'vote-df33c.appspot.com'
}

// Firebase intialise
firebase.initializeApp(config)

// Set vote firebase object
const state = {
  Votes: firebase.database().ref('/vote')
}

// add new input
const actions = {
  add: function (newInput) {
    console.log(newInput)
    state.Votes.push(newInput)
  },
  deleteTodo: function (key) {
    state.Votes.child(key).remove()
  },
  count: function (target, votesArr) {
    console.log(state.Votes, votesArr)
    target.count += 1
    state.Votes.update(votesArr)
  }
}

export default {
  state,
  actions
}
