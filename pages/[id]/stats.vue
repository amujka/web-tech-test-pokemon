<script setup lang="ts">
import { Pokemon } from 'types/pokemon';

const props = defineProps<{
	pokemonData: Pokemon;
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
