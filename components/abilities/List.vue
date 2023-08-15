<script setup lang="ts">
import { Ability } from 'types/pokemon';

defineProps<{
	abilities: Ability[];
}>();
</script>
<template>
	<ul class="pl-5 list-disc">
		<li v-for="{ ability } in abilities">{{ ability.name }}</li>
	</ul>
</template>
