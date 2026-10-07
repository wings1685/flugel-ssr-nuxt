<script setup lang="ts">
	import type { FindSchema } from "@/_global/lib/validate";

	type Props = {
		title: FindSchema['title'];
		sort: FindSchema['sort'];
	};
	const { title, sort } = defineProps<Props>();

	const router = useRouter();

	const handleFind = (e: SubmitEvent) => {
		e.preventDefault();

		const form = e.currentTarget;
		if (!form) return;

		const formData = new FormData(e.currentTarget as HTMLFormElement);
		const query = {
			title: formData.get('title')?.toString() ?? '',
			sort: formData.get('sort')?.toString() ?? 'desc',
		};
		const params = new URLSearchParams(query);
		router.push(`/?${params}`);
	};
</script>
<template>
	<div>
		<h1>Find</h1>
		<form id="find_form" @submit.prevent="handleFind">
			<fieldset>
				<input type="text" name="title" :value="title" />
				<label>
					<input type="radio" name="sort" value="asc" :checked="sort === 'asc'" />
					<span>ASC</span>
				</label>
				<label>
					<input type="radio" name="sort" value="desc" :checked="sort === 'desc'" />
					<span>DESC</span>
				</label>
				<button>Find</button>
			</fieldset>
		</form>
	</div>
</template>
