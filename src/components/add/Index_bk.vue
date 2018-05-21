<template>
  <div class="container jsc-todo-list">
    <div class="panel panel-default panel-todo">
      <div class="panel-heading">
        <h2>VoteList</h2>
      </div>
      <form>
        <div class="panel-body">
            <div class="input-group text-center">
              <input type="text" class="form-control" @keydown.self.prevent.enter v-model="newInput.input" placeholder="入力欄" />
              <span class="input-group-btn">
                <button type="button" class="btn btn-primary" v-on:click.prevent="add()">追加</button>
              </span>
            </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import store from '@/store'

// Firebase config
var config = {
  apiKey: 'AIzaSyBKlQ-FYlY7iBiP6kzHScrmF79jS2ImVuM',
  authDomain: 'vote-df33c.firebaseapp.com',
  databaseURL: 'https://vote-df33c.firebaseio.com',
  storageBucket: 'vote-df33c.appspot.com'
}

// Firebase intialise
firebase.initializeApp(config)

// Set Todos firebase object
var Votes = firebase.database().ref('/vote')
console.log(Votes.key)

export default {
  name: 'List',
  data () {
    return {
      newInput: {
        input: '',
        count: 0
      },
      votes: []
    }
  },
  methods: {
    add: function () {
      console.log(Votes)
      Votes.push(this.newInput)
      this.newInput.input = ''
    }
  },
  created: function () {
    var self = this
    console.log(Votes)
    Votes.on('value', function (snapshot) {
      self.votes = snapshot.val()
    })
  }
}
</script>
