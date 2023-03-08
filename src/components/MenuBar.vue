<template>
    <v-app-bar app absolute color="primary" dark shrink-on-scroll prominent :src="require('../assets/forest_banner.jpg')" fade-img-on-scroll scroll-target="#scrolling-techniques-3">
        <!-- src="https://picsum.photos/1920/1080?random" -->
        <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(62,8,4,.7), rgba(25,32,72,.7)"></v-img>
        </template>
        <v-app-bar-title class="menuHeaderFont">
            <h2 class="fantasyFont">Winter Hartdegen</h2>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <a href="https://www.instagram.com/narya.writes/" target="_blank">
                <v-icon>mdi-instagram</v-icon>
            </a>
        </v-btn>
        <v-btn icon>
            <a href="mailto:winter@winterhartdegen.com">
                <v-icon>mdi-email</v-icon>
            </a>
        </v-btn>
        <template v-slot:extension>
            <v-tabs align-with-title>
                <v-tab @click="$emit('setView', 'Works')">Works</v-tab>
                <v-tab @click="$emit('setView', 'About')">About</v-tab>
                <v-tab @click="$emit('setView', 'Contact')">Contact</v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
</template>
<script>
export default {
    name: "MenuBar",

    data: () => ({
        //
    }),
    methods: {
        //
    }

};
</script>
<style scoped>
a {
    color: #FFFCD8 !important;
    text-decoration: none !important;
}

a:hover {
    text-decoration: none !important;
    color: #3E0804;
}
</style>