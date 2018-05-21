<template>
  <div class="container jsc-todo-list">
    <div class="panel panel-default panel-todo">
      <div class="panel-heading">
        <h2>VoteList</h2>
      </div>
      <form>
        <div class="panel-body">
            <div class="input-group text-center">
              <input type="text" class="userId form-control" placeholder="入力欄" />
<!--               <span class="input-group-btn">
                <button type="button" class="authBtn btn btn-primary">Login</button>
              </span> -->
            </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import $ from 'jquery'

// Firebase config
var config = {
  apiKey: "AIzaSyBKlQ-FYlY7iBiP6kzHScrmF79jS2ImVuM",
  authDomain: "vote-df33c.firebaseapp.com",
  databaseURL: "https://vote-df33c.firebaseio.com",
  storageBucket: "vote-df33c.appspot.com",
}

// Firebase intialise
firebase.initializeApp(config)

// Firebase login
var AuthUI ={
init: function (){
    var $button = $('.authBtn')
    AuthUI.provider = new firebase.auth.GoogleAuthProvider()
    AuthUI.elAuthBtn = document.querySelector('.authBtn')
    AuthUI.elUserId = document.querySelector('.userId')
    $button.on('click', function (){
      alert('bbbb')
      AuthUI.doAuth()
    })
    AuthUI.draw()
    firebase.auth().getRedirectResult().then(function(result) {
      AuthUI.elAuthBtn.disabled = false
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
      }
      if(result.user){
        AuthUI.data.authed = true
        AuthUI.data.userId = result.user.email
        AuthUI.draw()
      }
    }).catch(function (error){
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      // ...
    })
  },
  data: {
    authed: false,
    userId: '',
    info: ''
  },
  draw: function (){
    AuthUI.elAuthBtn.textContent = AuthUI.data.authed ? 'LOGOUT' : 'LOGIN'
    AuthUI.elUserId.textContent = AuthUI.data.userId
    console.log(AuthUI.data, AuthUI.data.authed)
  },
  doAuth: function (){
    alert('aaaaa')
    if(AuthUI.data.authed) {
      firebase.auth().signOut().then(function (){
        AuthUI.data.authed = false
        AuthUI.data.userId = ''
        AuthUI.draw()
      }, function (error){
        // An error happened.
      })
    }
    else {
      firebase.auth().signInWithRedirect(AuthUI.provider)
    }
  }
}
AuthUI.init()

// Create Vue component
// var todoList = new Vue ({
//   el: '.jsc-todo-list',
//   data: {
//     newInput: [
//       {input: ''}
//     ],
//     todos: []
//   },
//   methods: {

//   }
// })
</script>

<style>
body {
  background-color:#e0e0e0;
  -webkit-font-smoothing: antialiased;
  font: normal 14px Roboto,arial,sans-serif;
}
.container {
  display: flex;
  width:980px;
  margin: 0 auto;
}
.navbar-default {
  background-color:#f4f4f4;margin-top:50px;border-width:0;z-index:5;
}
.navbar-default .navbar-nav > .active > a,.navbar-default .navbar-nav > li:hover > a {
  border:0 solid #4285f4;
  border-bottom-width:2px;
  font-weight:800;background-color:transparent;
}
.navbar-default .dropdown-menu {background-color:#ffffff;}
.navbar-default .dropdown-menu li > a {padding-left:30px;}

.header {background-color:#ffffff;border-width:0;}
.header .navbar-collapse {background-color:#ffffff;}
.btn,.form-control,.panel,.list-group,.well {border-radius:1px;box-shadow:0 0 0;}
.form-control {border-color:#d7d7d7;}
.btn-primary {border-color:transparent;}
.btn-primary,.label-primary,.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {background-color:#4285f4;}
.btn-plus {background-color:#ffffff;border-width:1px;border-color:#dddddd;box-shadow:1px 1px 0 #999999;border-radius:3px;color:#666666;text-shadow:0 0 1px #bbbbbb;}
.well,.panel {border-color:#d2d2d2;box-shadow:0 1px 0 #cfcfcf;border-radius:3px;}
.btn-success,.label-success,.progress-bar-success{background-color:#65b045;}
.btn-info,.label-info,.progress-bar-info{background-color:#a0c3ff;border-color:#a0c3ff;}
.btn-danger,.label-danger,.progress-bar-danger{background-color:#dd4b39;}
.btn-warning,.label-warning,.progress-bar-warning{background-color:#f4b400;color:#444444;}

hr {border-color:#ececec;}
button {
 outline: 0;
}
.list-item-delete textarea {
 resize: none;
 outline: 0;
}
.panel {
 padding:20px;
}
.panel .btn i,.btn span {
 color:#666666;
}
.panel .panel-heading {
 font-weight:700;
 font-size:16px;
 color:#262626;
}
.panel .panel-heading a {
 font-weight:400;
 font-size:11px;
}
.panel .panel-default {
 border-color:#cccccc;
}
.panel .panel-thumbnail {
 padding:0;
}
.panel .img-circle {
 width:50px;
 height:50px;
}
.list-group-item:first-child,.list-group-item:last-child {
 border-radius:0;
}
h3,h4,h5 {
 border:0 solid #efefef;
 border-bottom-width:1px;
 padding-bottom:10px;
}
.modal-dialog {
 width: 450px;
}
.modal-footer {
 border-width:0;
}
.dropdown-menu {
 background-color:#f4f4f4;
 border-color:#f0f0f0;
 border-radius:0;
 margin-top:-1px;
}
/* end theme */

/* template layout*/
#subnav {
 position:fixed;
 width:100%;
}

@media (max-width: 768px) {
 #subnav {
  padding-top: 6px;
 }
}

#main {
 padding-top:120px;
}
/* TODOリスト固有style*/
.panel-todo {
  position: relative;
  width: 500px;
}
.panel-body {
  word-wrap: break-word;
}
.list-group-item {
  padding-left: 30px;
  word-wrap: break-word;
}
.list-group-item:hover {
  background-color: #eee;
}
.list-item-checkbox {
  left: 10px;
  margin-top: 0px!important;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-  transform: translateY(-50%);
}
.input-group + .list-group {
  margin-top: 20px;
}
.list-item-label {
  display: block;
  width: 100%;
}
.list-item-delete {
  position: absolute;
  right: 15px;
  top: 15px;
}
.done {
  text-decoration: line-through;
}
</style>
