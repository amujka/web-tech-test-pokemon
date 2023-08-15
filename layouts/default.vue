<script setup lang="ts"></script>
<template>
	<div class="flex flex-col h-screen">
		<slot />
		<footer class="mt-auto p-2 text-center bg-black text-white">
			<NuxtLink to="https://pokeapi.co/" target="_blank">pokeapi</NuxtLink>
		</footer>
	</div>
</template>
