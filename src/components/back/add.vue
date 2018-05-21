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
