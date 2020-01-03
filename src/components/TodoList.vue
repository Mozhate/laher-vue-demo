<template>
  <div class="todo-list">
    <input v-on:keyup.13="submit" class="todo-input" v-model="text"/>
    <ul class="todo-ul">
      <li v-for="(todo,i) in todoList" :title="todo.text" :class="todo.status===1?'close-todo':''">
        <span @click="todoClose(todo,i)">
          {{i+1}}. {{todo.text}}
        </span>
        <span>
          <a>{{toDate(todo.createTime)}}</a>
          <i @click="todoDel(todo,i)">✖</i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
    // 系统通知插件
    // import notificationKoro from 'notification-koro1';

    export default {
        data() {
            return {
                text: '',
                todoList: [],

                notificationClass: null,
                showNatification: null,
            }
        },
        methods: {
            todoClose(todo, i) {
                todo.status = todo.status === 0 ? 1 : 0;
                this.saveLocal();
            },
            todoDel(todo, i) {
                this.todoList.splice(i, 1);
                this.saveLocal();
            },
            toDate(time, fmt) {
                const date = new Date(time);
                const Y = date.getFullYear() + '-';
                const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                const D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
                const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
                const s = ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
                return M + D + h + m;
            },
            saveLocal() {
                localStorage.setItem('todoList', JSON.stringify(this.todoList));
            },
            getLocalTodoList() {
                let todoList = localStorage.getItem('todoList');
                if (!todoList) {
                    todoList = '[]';
                }
                return JSON.parse(todoList);
            },
            submit() {
                if (this.text.length === 0) {
                    return null;
                }
                const todo = {
                    status: 0,
                    text: this.text,
                    createTime: new Date().getTime()
                };
                this.text = ''
                this.todoList.push(todo)
            },
            runTimer() {
                console.log("启动定时器")
            }
        },
        created() {
            // 初始化数据
            this.todoList = this.getLocalTodoList();
            // 定时器
            this.runTimer();
        }
    }
</script>

<style scoped>
  .todo-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 1200px) {
    .todo-list {
      width: 1170px;
    }
  }

  .todo-input {
    border-radius: 25px;
    border: 2px solid #ccc;
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
    outline: none;
    margin-top: 20px;
    width: 50%;
  }

  .todo-ul {
    margin: 0;
    padding: 0;
    width: 50%;
  }

  .todo-ul li {
    padding: 0 5px;
    list-style: none;
    height: 30px;
    line-height: 30px;
    margin: 5px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .todo-ul li:hover {
    background-color: #FFF0D6;
    border-radius: 25px;
  }

  .todo-ul li span {
    cursor: pointer;
  }

  .todo-ul li span:first-child {
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .todo-ul li span:last-child {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .close-todo {
    text-decoration: line-through;
  }
</style>
