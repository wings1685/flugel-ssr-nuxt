<script setup lang="ts">
	import { buildingData, buildPerformance } from "../_models/performance";
	import type { LiPatternsProps } from "../_models/performance";

	const { number } = defineProps<LiPatternsProps>();

	const data = buildingData(number);

	onMounted(() => {
		buildPerformance();
	});
</script>
<template>
	<ul>
		<li v-for="item in data">{{ item }}</li>
	</ul>
</template>
