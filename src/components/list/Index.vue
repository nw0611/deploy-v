<template>
  <div class="container jsc-todo-list">
    <Header></Header>
    <div class="panel panel-default panel-todo">
      <div class="panel-heading">
        <h2>VoteList</h2>
      </div>
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
import store from '@/store'
import Header from '@/components/Header'

export default {
  name: 'List',
  data () {
    return {
      sharedstate: store.state,
      votes: []
    }
  },
  methods: {
    deleteTodo: function (key) {
      store.actions.deleteTodo(key)
    },
    count: function (target) {
      store.actions.count(target, this.votes)
    }
  },
  components: {
    Header
  },
  mounted: function () {
    var self = this
    this.sharedstate.Votes.on('value', function (snapshot) {
      self.votes = snapshot.val()
    })
  }
}
</script>
