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

    <div class="panel panel-default panel-todo jsc-vote-list" v-for="(item, index) in votes" :key="index">
      <div class="panel-inner">
        <div class="panel-heading">
          <h2>{{item.input}}</h2>
            <div class="list-item-delete" v-on:click="deleteTodo(index)">削除</div>
        </div>
        <div class="panel-body">
          <div class="text-center">
          <button type="button" class="btn btn-primary" v-on:click="count(item, index)">投票する</button>
          </div>
        </div>
        <div class="panel-body">
          <div class="text-center">投票数：{{item.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

// Set Todos firebase object
var Votes = firebase.database().ref('/vote')

// Watch for value changes on Todos, set todoList.todos property as the value

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
      Votes.push(this.newInput)
      this.newInput.input = ''
    },
    deleteTodo: function (key) {
      console.log(key)
      Votes.child(key).remove()
    },
    count: function (target, key) {
      console.log(target, key, Votes.child(key))
      target.count += 1
      console.log(target)
      firebase.database().ref('/vote').update(this.votes)
    }
  },
  created: function () {
    var self = this
    Votes.on('value', function (snapshot) {
      self.votes = snapshot.val()
    })
  }
}
</script>
