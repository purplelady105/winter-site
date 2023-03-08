<template>
    <v-container class="overflow-auto">
        <v-card dark color="transparent">
            <v-row class="text-center">
                <v-col class="mb-4 accent--text">
                    <h2 class="font-weight-bold fantasyFont mb-3">Contact Information</h2>
                    <p class="subheading font-weight-regular">
                        For questions regarding rights, offers, and potential collaborations, please send an email to <a href="mailto:winter@winterhartdegen.com">winter@winterhartdegen.com.</a> Feel free to also contact her via Instagram as well: <a href="https://www.instagram.com/narya.writes/" target="_blank">@narya.writes</a>
                        Comments, questions, and general feedback are welcome!
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