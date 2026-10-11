<script setup lang="ts">
	import { apiFetch } from "@/_global/lib/api";
	import { apiUpdate } from "@/_global/lib/api";
	import { piquoStore } from "@/_global/piquo/index";
	import { rawNano, setRawNano } from "@/_global/stores/nano";
	import { useStore } from "@nanostores/vue";
	import type { StoreName } from "@/_global/stores/index";

	type LoadedData = {
		piquoRefServer: string;
		rawNanoServer: string;
		piquoNanoServer: string;
	};
	const { data } = useAsyncData('tasks', async () => {
		const data = await apiFetch<LoadedData>('/experiments/stores');

		return data;
	});

	const { piquoRef, setPiquoRef } = piquoStore('piquoRef');
	const { piquoNano, setPiquoNano } = piquoStore('piquoNano');
	const rawNanoClient = useStore(rawNano);
	const piquoNanoClient = useStore(piquoNano());

	const handleServerStore = async (key: StoreName) => {
		await apiUpdate('/experiments/stores/update', { key: key });
	};
</script>
<template>
	<div v-if="data">
		<h1>Piquo Store</h1>
		<fieldset>
			<span>forServer: {{ data.piquoRefServer }}</span>
			<button @click="() => handleServerStore('piquo')">Click</button>
		</fieldset>
		<fieldset>
			<span>forClient: {{ piquoRef().forClient }}</span>
			<button @click="() => setPiquoRef('forClient')">Click</button>
		</fieldset>
		<h1>Raw Nano Stores</h1>
		<fieldset>
			<span>forServer: {{ data.rawNanoServer }}</span>
			<button @click="() => handleServerStore('rawNano')">Click</button>
		</fieldset>
		<fieldset>
			<span>forClient: {{ rawNanoClient.forClient }}</span>
			<button @click="() => setRawNano('forClient')">Click</button>
		</fieldset>
		<h1>Piquo Nano Store</h1>
		<fieldset>
			<span>forServer: {{ data.piquoNanoServer }}</span>
			<button @click="() => handleServerStore('piquoNano')">Click</button>
		</fieldset>
		<fieldset>
			<span>forClient: {{ piquoNanoClient.forClient }}</span>
			<button @click="() => setPiquoNano('forClient')">Click</button>
		</fieldset>
	</div>
</template>
