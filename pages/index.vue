<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, integer } from '@vuelidate/validators';
const input = ref<HTMLInputElement>();

const pokemonId = ref();

const rules = computed(() => {
	return {
		pokemonId: { required, integer },
	};
});
const v$ = useVuelidate(rules, { pokemonId });

const submitPokemonId = async () => {
	const isValid = await v$.value.$validate();
	if (isValid) {
		navigateTo({
			path: `/${pokemonId.value}`,
		});
	}
};
</script>
<template>
	<div class="flex flex-col gap-5 items-center">
		<form class="flex flex-col gap-2 mt-10" @submit.prevent="submitPokemonId">
			<label @click="input?.focus()">Enter pokemon id:</label>
			<input v-model="pokemonId" ref="input" class="border border" />
			<button
				:class="[
					{ 'bg-slate-500': v$.$error },
					'p-2 rounded bg-black text-white',
				]"
				:disabled="v$.$error"
			>
				View pokemon
			</button>
		</form>
		<p v-for="error in v$.$errors" :key="error.$uid" class="text-red-500">
			{{ error.$message }}
		</p>
	</div>
</template>
