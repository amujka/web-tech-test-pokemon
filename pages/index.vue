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
const isBtnDisabled = computed(() => v$.value.pokemonId.$invalid);

const submitPokemonId = () => navigateTo({ path: `/${pokemonId.value}` });
</script>
<template>
	<div class="flex flex-col gap-5 items-center">
		<form class="flex flex-col gap-2 mt-10" @submit.prevent="submitPokemonId">
			<label @click="input?.focus()">Enter pokemon id:</label>
			<input v-model="v$.pokemonId.$model" ref="input" class="border border" />
			<button
				:class="[
					{ 'bg-slate-500': isBtnDisabled },
					'p-2 rounded bg-black text-white',
				]"
				:disabled="isBtnDisabled"
			>
				View pokemon
			</button>
		</form>
		<p v-for="error in v$.$errors" :key="error.$uid" class="text-red-500">
			{{ error.$message }}
		</p>
	</div>
</template>
