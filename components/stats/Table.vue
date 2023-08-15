<script setup lang="ts">
import { Stat } from 'types/pokemon';

defineProps<{
	stats: Stat[];
}>();

const tableHeading = ['name', 'base_stat'];
</script>
<template>
	<table>
		<tr>
			<th class="border border-slate-300" v-for="heading in tableHeading">
				{{ heading }}
			</th>
		</tr>
		<tr v-for="stat in stats">
			<td class="border border-slate-300">{{ stat.stat.name }}</td>
			<td class="border border-slate-300">{{ stat.base_stat }}</td>
		</tr>
	</table>
</template>
