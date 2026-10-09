<script setup lang="ts">
	import Header from "~/components/routes/_parts/Header.vue";
	import "@/_global/styles/global.sass";
</script>
<template>
	<main>
		<Header />
		<slot />
	</main>
</template>
