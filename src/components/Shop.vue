<template>
    <v-container class="overflow-auto">
        <v-card dark color="transparent">
            <v-row class="text-center">
                <v-col class="mb-4 accent--text">
                    <h2 class="font-weight-bold fantasyFont mb-3">Shop</h2>
                    <p class="subheading font-weight-regular">
                        The Dark Wing is available now at Barnes & Noble!
                        <v-btn>
                            <a href="https://www.barnesandnoble.com/w/the-dark-wing-winter-hartdegen/1145846118" target="_blank">Buy from Barnes & Noble Now!
                            </a>
                        </v-btn>
                    </p>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "Contact",

    data: () => ({
        //
    }),
};
</script>
<style scoped>
a {
    color: #FFFCD8 !important;
    text-decoration: none !important;
}

a:hover {
    text-decoration: underline !important;
    color: #3E0804;
}
</style>