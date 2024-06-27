import {
    ref,
    watchEffect,
    computed
} from "vue";
let title = ref("");
let todos = ref(JSON.parse(localStorage.getItem('todos') || '[]'));
watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
})

function addTodo() {
    todos.value.push({
        title: title.value,
        done: false,
    });
    title.value = "";
}

function useStorage(name, value = []) {
    let data = ref(JSON.parse(localStorage.getItem(name) || '[]'))
    watchEffect(() => {
        localStorage.setItem(name, JSON.stringify(data.value))
    })
    return data
}