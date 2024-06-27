<template>
    <div class="t-table" ref="table_ref">
        <el-table class="draggable" ref="tables" :data="state.tableData" row-key="id" border fit highlight-current-row
            style="width: 100%">
            <template v-for="item in state.tableHeaders" :key="item.id">
                <el-table-column v-if="item.property === 'address'" :property="item.property" :min-width="item.width"
                    align="center" show-overflow-tooltip>
                    <template #header>
                        <p style="margin: 0; display: flex; justify-content: center">
                            {{ item.label }}
                        </p>
                    </template>
                    <template #default="{ row }">
                        <div @click="handleEdit(row)" v-if="!row.editing">
                            {{ row.address }}
                        </div>
                        <el-input v-else v-model="row.address" @blur="handleSave(row)" autofocus />
                    </template>
                </el-table-column>
                <el-table-column v-else :property="item.property" :min-width="item.width" align="center"
                    show-overflow-tooltip>
                    <template #header>
                        <p style="margin: 0; display: flex; justify-content: center">
                            {{ item.label }}
                        </p>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>
<script setup lang="ts" name="dragTable">
import { ref, watch, reactive, onMounted, defineEmits, defineProps } from "vue";
import { default as Sortable, SortableEvent } from "sortablejs";
const props = defineProps<{
    // 列表数据
    table: any;
    // 表头数据
    headers: {
        id: string;
        property: string;
        width: string;
        label: string;
        show: boolean;
    }[];
}>();
// 初始化数据
const state = reactive({
    tableData: props.table,
    tableHeaders: props.headers,
});
// 获取el-table ref
const tables: any = ref<HTMLElement | null>(null);
// 获取t-table ref
const table_ref: any = ref<HTMLElement | null>(null);
// 抛出事件 在 应用的.Vue 文件做相应的操作
const emits = defineEmits(["rowSort"]);
// 监听移动的 表格数据 重新赋值
watch(
    () => props.table,
    (val) => {
        console.log("watch val", val);
        state.tableData = val;
    },
    { deep: true }
);
onMounted(() => {
    console.log("state.tableData >>>", state.tableData);
    console.log("state.tableHeaders >>>", state.tableHeaders);
    initSort();
});
// 行拖拽
const initSort = () => {
    const el = table_ref.value.querySelector(".el-table__body-wrapper tbody");
    // console.log('3333', el)
    Sortable.create(el, {
        animation: 150, // 动画
        onEnd: (event: SortableEvent) => {
            if (event.oldIndex !== undefined && event.newIndex !== undefined) {
                const curRow = state.tableData.splice(event.oldIndex, 1)[0];
                state.tableData.splice(event.newIndex, 0, curRow);
                emits("rowSort", state.tableData);
            }
        },
    });
};

const handleEdit = (row) => {
    row.editing = true;
};

const handleSave = (row) => {
    row.editing = false;
};
</script>