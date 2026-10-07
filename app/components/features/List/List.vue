<script setup lang="ts">
	import { apiDelete, apiUpdate } from "@/_global/lib/api";
	import type { TaskSchema } from "@/_global/lib/validate";

	type Props = {
		tasks: TaskSchema[];
	};
	const { tasks } = defineProps<Props>();

	let editableTasks = ref<TaskSchema[]>([]);

	watchEffect(() => {
		editableTasks.value = structuredClone([ ...tasks ]);
	});

	const handleEdit = async (id: TaskSchema['id']) => {
		const targetData = editableTasks.value.find(d => d.id === id);

		await apiUpdate(`/tasks/update/${id}`, targetData);
		await refreshNuxtData();
	};

	const handleDelete = async (id: TaskSchema['id']) => {
		await apiDelete(`/tasks/delete/${id}`);
		await refreshNuxtData();
	};
</script>
<template>
	<div>
		<h1>List</h1>
		<ul>
			<li v-for="task in editableTasks" :key="task.id">
				<input type="text" v-model="task.title" />
				<input type="text" v-model="task.text" />
				<button type="button" @click="() => handleEdit(task.id)">Edit</button>
				<button type="button" @click="() => handleDelete(task.id)">Delete</button>
			</li>
		</ul>
	</div>
</template>
