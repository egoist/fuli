<style>
	body {
		font: 16px/1.7 "lucida grande" ,"lucida sans unicode",lucida,"Helvetica Neue",helvetica,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
	}
	body, ul, h1, h2, h3, h4 {
		margin: 0;
	}
	ul {
		padding-left: 0;
		list-style: none;
	}
	.main {
		max-width: 400px;
		margin: 20px auto;
		overflow: hidden;
	}
	.images-wrapper {
		width: 400px;
		height: 600px;
		overflow: hidden;
		white-space: nowrap;
		position: relative;
	}
	.images {
		position: absolute;
		left: 0;
		width: 400px;
		height: 600px;
		.image {
			display: inline-block;
			.cover {
				width: 400px;
				height: 400px;
				background-size: cover;
			}
		}
	}
</style>

<template>
	<div class="main">
		<div class="images-wrapper">
			<ul class="images" :style="{left: '-' + index * 400 + 'px'}">
				<li
					class="image"
					v-for="image in images.images"
					track-by="$index"
					v-touch:swipeleft="handleSwipe($index + 1)"
					v-touch:swiperight="handleSwipe($index - 1)">
					<div class="cover" :style="{backgroundImage: 'url(' + image.url + ')'}"></div>
					<h2 class="name">{{ image.who }}</h2>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import store from './store'
	import {fetchImages} from './actions'

	export default {
		data() {
			return {
				images: store.state.images,
				index: 0
			}
		},
		created() {
			this.$subscribe('images')
		},
		ready() {
			store.dispatch(fetchImages(this.images.page))
		},
		methods: {
			handleSwipe(index) {
				if (index % 5 === 0) {
					store.dispatch(fetchImages(this.images.page))
				}
				this.index = index
			}
		}
	}
</script>
