<script setup lang="ts">
const props = defineProps<{
	pokemonData: object;
}>();
const stats = computed(() => props.pokemonData.stats);
</script>
<template>
	<div class="flex flex-col items-center">
		<div>
			Stats
			<StatsTable :stats="stats" />
		</div>
	</div>
</template>
