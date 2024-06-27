<template>
    <div>
        <dragTable :table="tableList" :headers="initialHeaders" @rowSort="handleRowSort" />
    </div>
</template>

<script setup>
import { reactive } from "vue";
import dragTable from "@/components/DragTable/index.vue";

let initialHeaders = reactive([
    {
        id: "1",
        property: "id",
        width: "88",
        label: "ID",
        show: true,
    },
    {
        id: "2",
        property: "name",
        width: "121",
        label: "姓名",
        show: true,
    },
    {
        id: "3",
        property: "address",
        width: "139",
        label: "地址",
        show: true,
    },
    {
        id: "4",
        property: "age",
        width: "99",
        label: "年龄",
        show: true,
    },

]);

const tableList = [
    {
        id: 1,
        name: 'Tom1',
        address: 'No. 189, Grove St, Los Angeles',
        age: 25,
    },
    {
        id: 2,
        name: 'Tom2',
        address: 'No. 189, Grove St, Los Angeles',
        age: 30,
    },
    {
        id: 3,
        name: 'Tom3',
        address: 'No. 189, Grove St, Los Angeles',
        age: 28,
    },
    {
        id: 4,
        name: 'Tom4',
        address: 'No. 189, Grove St, Los Angeles',
        age: 32,
    },
];
const handleRowSort = () => {
    console.log("应用的.Vue 文件做相应的操作");
};
</script>

<style lang="scss" scoped></style>