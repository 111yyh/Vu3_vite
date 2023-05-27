import {reactive, ref} from 'vue'

const stu = reactive({
    name:'111'
})

const count = ref(0)// {value:0}

console.log(stu);