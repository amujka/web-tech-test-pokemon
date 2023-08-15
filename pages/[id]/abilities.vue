<script setup lang="ts">
import { Pokemon } from 'types/pokemon';

const props = defineProps<{
	pokemonData: Pokemon;
}>();

const abilities = computed(() => props.pokemonData.abilities);
</script>
<template>
	<div class="flex flex-col items-center">
		<div>
			Abilities
			<AbilitiesList :abilities="abilities" />
		</div>
	</div>
</template>
