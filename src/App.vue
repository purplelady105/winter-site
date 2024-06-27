<template>
	<v-app>
		<MenuBar @setView="setView" />
		<v-main>
			<v-container app class="mb-5">
				<Works v-if="view === 'Works'" />
				<About v-if="view === 'About'" />
				<Contact v-if="view === 'Contact'" />
				<Shop v-if="view === 'Shop'" />
			</v-container>
		</v-main>
	</v-app>
</template>
<script>
/* eslint-disable */
import MenuBar from "./components/MenuBar";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";

export default {
	name: "App",
	components: {
		MenuBar,
		Works,
		About,
		Contact,
		Shop
	},
	data: () => ({
		view: "Works"
	}),
	methods: {
		setView(newView) {
			this.view = newView;
		}
	}
};
</script>
<style>
#app {
	background-color: #2B0403;
	font-family: 'Garamond', serif;
	font-size: 1.5em;
	color: #FFFCD8;
}

html {
	overflow-y: auto !important;
	scrollbar-width: none;
	-ms-overflow-style: none;
}

html::-webkit-scrollbar {
	width: 0;
	height: 0;
}

.v-application a {
    color: #FFFCD8 !important;
}

a {
	color: #FFFCD8 !important;
}

a:hover {
	text-decoration: none !important;
	color: #3E0804;
}

.fantasyFont {
	font-family: 'Tangerine', serif;
	font-size: 2em;
}

.fantasyBlurb {
	font-family: Papyrus, serif;
	font-size: 1em;
}

.menuHeaderFont {
	color: #FFFCD8;
}
</style>