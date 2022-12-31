<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
					:src="require('../assets/the_dark_wing_cover.jpg')"
					class="my-5"
					contain
					height="300"
				/>
			</v-col>

			<v-col class="mb-4">
				<h1 class="font-weight-bold mb-3">About the Author</h1>

				<p class="subheading font-weight-regular">
					Winter Hartdegen is an artist, writer, and author of the new novel The Dark Wing, the first of her new trilogy series.
				</p>
			</v-col>

		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "HelloWorld",

	data: () => ({
		//
	}),
};
</script>
