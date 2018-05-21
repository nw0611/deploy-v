<template>
  <div class="container jsc-todo-list">
    <div class="panel panel-default panel-todo">
      <div class="panel-heading">
        <h2>Login</h2>
      </div>
      <form>
        <div class="panel-body">
            <div class="input-group text-center">
              <span class="input-group-btn">
                <button type="button" id="login" class="authBtn btn btn-primary" @click="signIn()">Login</button>
                <button type="button" id="logout" class="authBtn btn btn-primary" @click="signOut()">Logout</button>
              </span>
              <div>Id: {{id}}</div>
              <div>Name: {{name}}</div>
              <div>Email: {{email}}</div>
              <div>PhotoUrl: <img v-bind:src='photoUrl' /></div>
            </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

const provider = new firebase.auth.GoogleAuthProvider()
const $output = document.getElementById('output')
console.log($output)
console.log(location.origin + '/list')

export default {
  name: 'login',
  data () {
    return {
      id: '',
      name: '',
      email: '',
      photoUrl: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithRedirect(provider)
    },
    signOut: function () {
      firebase.auth().signOut().then(function () {
        location.reload()
      })
    }
  },
  created: function () {
    var self = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // console.log(user['uid'], user['displayName'], user['email'], user['photoURL'])
        self.id = user['uid']
        self.name = user['displayName']
        self.email = user['email']
        self.photoUrl = user['photoURL']
      } else {
        self.id = ''
        self.name = ''
        self.email = ''
        self.photoUrl = ''
      }
    })
  }
}
</script>
