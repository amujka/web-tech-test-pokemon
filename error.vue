<script setup lang="ts">
const props = defineProps({
	error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
	<NuxtLayout name="default">
		<div class="flex items-center justify-center h-screen">
			<div class="flex flex-col items-center gap-2">
				<h1 class="text-center text-5xl">{{ error?.statusCode }}</h1>
				<button class="bg-black text-white rounded p-2" @click="handleError">
					Clear errors
				</button>
			</div>
		</div>
	</NuxtLayout>
</template>
