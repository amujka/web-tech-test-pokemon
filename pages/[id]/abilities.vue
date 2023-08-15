<script setup lang="ts">
const props = defineProps<{
	pokemonData: object;
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
