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
import store from '@/store'

export default {
  name: 'add',
  data () {
    return {
      newInput: {
        input: '',
        count: 0
      }
    }
  },
  methods: {
    add: function () {
      store.actions.add(this.newInput)
      this.newInput.input = ''
    }
  }
}
</script>
