<template>
    <v-container class="overflow-auto">
        <v-card dark color="transparent">
            <v-row class="text-center">
                <v-col class="mb-4 accent--text">
                    <h2 class="font-weight-bold fantasyFont mb-3">Of Legends and Truth</h2>
                    <p class="subheading font-weight-regular">
                        Of Legends and Truth is a trilogy that is currently in the works. It is similar to Robert Jordan's Wheel of Time, Tolkien's Lord of the Rings trilogy, and also bears some similarities to the works of Brandon Sanderson, with a dash of Star Trek mixed in.
                    </p>
                    <!-- &#128606; -->
                    <v-icon color="#FFFCD8" class="my-5">fas fa-dragon</v-icon>
                    <blockquote>
                        <p class="subheading fantasyBlurb font-italic px-6">
                            At first, it seems to be a battle between good and evil...but as time goes on, those lines become blurred, and both sides begin to question what the truth really is.
                            In a diverse world with multiple species of people and a wide cast of characters, secrets lost to time are gradually uncovered while war threatens the nations. As the secrets begin to come to light, everything begins to change...and no one is certain where to turn. That is, until a final twist of events sends the world into yet another War of Light, and there is no choice but to fight to survive&mdash;and to uncover the truth.
                        </p>
                    </blockquote>
                    <!-- &#128605; -->
                    <v-icon color="#FFFCD8" class="my-5">fas fa-dragon</v-icon>
                    <p class="subheading font-weight-regular">
                        The series features a diverse cast of characters of various racial backgrounds, with strong female characters as well as different species of people in a world filled with wonders and mystery. A medieval setting, but with supremely advanced technological elements, as well as dragons, and people with the ability to control and manipulate energy.
                        Of Legends and Truth contains mild language and some frightening and intense scenes, but there is no sexual content or gratuitous gore.
                        All three books in the trilogy are planned to be released throughout 2024 and 2025. The first installment, The Dark Wing, is available now on <a href="https://www.barnesandnoble.com/w/the-dark-wing-winter-hartdegen/1145846118" target="_blank">barnes&noble.com</a>, in hardcover, with paperback and e-book coming soon.
                    </p>
                </v-col>
                <v-col cols="12">
                    <v-img :src="require('../assets/the_dark_wing_cover.png')" class="my-5" contain height="300" />
                </v-col>
                <v-col class="mb-4 accent--text">
                    <h2 class="font-weight-bold fantasyFont mb-3">The Dark Wing</h2>
                    <!-- &#128606; -->
                    <v-icon color="#FFFCD8" class="my-5">fas fa-dragon</v-icon>
                    <blockquote>
                        <p class="subheading fantasyBlurb font-italic">
                            Generations ago, two powerful races eradicated each other during the War of Light. The truth about the war has been lost to time, and the two races are shrouded in myths and legends.
                            War wages in the West. The East is plagued by a mysterious illness and sightings of strange creatures in the mountains. The king of the Val Thaeran empire is growing more and more greedy, and the disparity between the rich and the poor is dire. A small company, led by one of the king's rebellious sons, is stealing from the rich to give to the poor &mdash; but their mission is about to change.
                            One of those powerful races survived, and they want to take back what was once theirs &mdash; and it will not be long before they act.
                        </p>
                    </blockquote>
                    <!-- &#128605; -->
                    <v-icon color="#FFFCD8" class="my-5">fas fa-dragon</v-icon>
                    <p class="subheading font-weight-regular">
                        A story about an unsuspecting group of people who wind up struggling to find a way home, to find out the truth about the history of races that were extinguished in a war long past&mdash;and to find a way to save the world itself. Betrayals come to light, and secrets begin to unravel. Things thought long lost must once again be found...and the welfare of the known world depends on it.
                    </p>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "Works",

    data: () => ({
        //
    }),
};
</script>
<style scoped>
a {
    color: #FFFCD8;
}

a:hover {
    text-decoration: none !important;
    color: #3E0804;
}
</style>