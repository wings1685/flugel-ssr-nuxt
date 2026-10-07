<script setup lang="ts">
	import { apiCreate } from "@/_global/lib/api";
	import { defaultCreateTaskValues } from "@/_global/lib/validate";
	import type { CreateTaskSchema } from "@/_global/lib/validate";

	const defaultCreateValues = structuredClone({ ...defaultCreateTaskValues });
	const newData = ref<CreateTaskSchema>(defaultCreateValues);

	const handleCreate = async (e: Event) => {
		e.preventDefault();

		await apiCreate('/tasks/create', newData.value);

		newData.value = defaultCreateValues;
		await refreshNuxtData();
	};
</script>
<template>
	<div>
		<h1>Input</h1>
		<form @submit="handleCreate">
			<fieldset>
				<input type="text" name="title" v-model="newData.title" placeholder="title..." />
			</fieldset>
			<fieldset>
				<input type="text" name="text" v-model="newData.text" placeholder="text..." />
			</fieldset>
			<fieldset>
				<button>Add</button>
			</fieldset>
		</form>
	</div>
</template>
