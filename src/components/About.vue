<template>
	<v-container class="overflow-auto">
    <v-card dark color="transparent">
        <v-row class="text-center">
            <v-col class="mb-4 accent--text">
                <h2 class="font-weight-bold fantasyFont mb-3">About the Author</h2>
                <v-img :src="require('../assets/winter-hartdegen-about-pic.png')" class="my-5" contain height="300" />
                <p class="subheading font-weight-regular">
                    Winter Hartdegen grew up in the snowy mountains of northern New England, spending large amounts of time with fantasy films, books, and stories of her own to entertain herself as an extrovert in an introverted region of America. Aside from time spent out in the mountains, her inspiration comes from the works of authors such as J.R.R. Tolkien, C.S. Lewis, Robert Jordan, and Brandon Sanderson. Her other interests include composing and playing music, and learning languages. She created the entire Athelarian language after learning several others. She loves running, hiking, and drawing--but most of all, she loves having wild, vivid dreams about quests and battles of good and evil which provide much of her inspiration for her writing and the characters in her stories.
                </p>
            </v-col>
        </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
    name: "About",

    data: () => ({
        //
    }),
};
</script>
<style>

</style>