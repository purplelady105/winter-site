<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">

				<v-icon large color="#FFFCD8" class="pr-2">fas fa-dragon</v-icon>

				<h1 class="menuHeaderFont">Winter Hartdegen</h1>

			</div>

			<v-spacer></v-spacer>

		</v-app-bar>

		<v-main>
			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script>
	/* eslint-disable */
import HelloWorld from "./components/HelloWorld";

export default {
	name: "App",

	components: {
		HelloWorld,
	},

	data: () => ({
		//
	}),
};
</script>

<style>
	#app {
		background-color: #2B0403;
		font-family: 'Tangerine', serif;
		font-size: 48px;
		color: #FFFCD8;
	}
	a {
		color: #FFFCD8;
	}
	a:hover {
		text-decoration: none !important;
		color: #FFFCD8;
}
.menuHeaderFont {
	font-size: 1em;
	color: #FFFCD8;
}
</style>