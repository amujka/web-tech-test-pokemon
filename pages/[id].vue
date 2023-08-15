<script setup lang="ts">
import { Pokemon } from 'types/pokemon';

const route = useRoute();
const { data: pokemonData, pending } = await useFetch<Pokemon>(
	` https://pokeapi.co/api/v2/pokemon/${route.params.id}`,
	{
		pick: ['name', 'abilities', 'stats', 'sprites'],
	}
);

if (!pokemonData.value) {
	throw createError({ statusCode: 404, fatal: true });
}
const pokemonName = computed(() => pokemonData.value?.name);
const pokemonImage = computed(() => pokemonData.value?.sprites?.front_default);
</script>
<template>
	<div v-if="!pending && pokemonData" class="relative pt-10">
		<NuxtLink to="/" class="absolute top-5 left-5 hover:underline"
			>Back to index</NuxtLink
		>
		<div class="flex flex-col gap-2 max-w-xl mx-auto p-4">
			<div class="flex flex-col items-center bg-slate-100">
				<h1 class="text-3xl">{{ pokemonName }}</h1>
				<img
					class="w-full max-w-[200px] object-contain"
					:src="pokemonImage"
					:alt="pokemonName"
				/>
			</div>
			<div class="flex gap-4 mx-auto">
				<NuxtLink :to="`/${route.params.id}/abilities`" class="p-2 underline">
					Abilities
				</NuxtLink>
				<NuxtLink :to="`/${route.params.id}/stats`" class="p-2 underline">
					Stats
				</NuxtLink>
			</div>
			<div>
				<NuxtPage :pokemonData="pokemonData" />
			</div>
		</div>
	</div>
</template>
