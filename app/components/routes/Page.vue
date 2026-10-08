<script setup lang="ts">
	import { apiFetch } from "@/_global/lib/api";
	import { defaultFindValues } from "@/_global/lib/validate";
	import { Form, Find, List } from "@/components/features";
	import type { TaskSchema } from "@/_global/lib/validate";
	import type { FindSchema } from "@/_global/lib/validate";

	const route = useRoute();
	type FetchData = {
		findQuery: FindSchema;
		tasks: TaskSchema[];
	};
	const { data } = useAsyncData('tasks', async () => {
		const findQuery = {
			title: route.query.title?.toString() ?? defaultFindValues.title,
			sort: route.query.sort?.toString() ?? defaultFindValues.sort,
		} as FindSchema;
		const data = await apiFetch<FetchData>('/tasks', findQuery);

		return data;
	}, { watch: [() => route.query.title, () => route.query.sort] });
</script>
<template>
	<main v-if="data">
		<Form />
		<Find :title="data.findQuery.title" :sort="data.findQuery.sort" />
		<List :tasks="data.tasks" />
	</main>
</template>
