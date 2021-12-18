<template>
	<footer class="footer">
		<div class="footer-content">
			<span class="footer-item">Written by <span class="highlight">Abban Dunne</span></span> &bull;
			<a class="footer-item" href="https://abandon.ie">My portfolio</a> &bull;
			<a class="footer-item" href="https://twitter.com/blunderjack">Yell at me</a>
		</div>
	</footer>
</template>

<script lang="ts">

export default {
	name: 'Footer'
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.footer {
	position: fixed;
	bottom: 0;
	width: 100%;
	background: $black;

	&-content {
		padding: 3px 0 5px;
		text-align: center;
		font-family: $family-ocra;
		text-transform: uppercase;
		font-size: 12px;
	}

	&-item {
		white-space: nowrap;
	}

	.highlight {
		color: $pink;
	}

	a {
		color: $yellow;

		&:hover, &:focus {
			color: $green;
		}
	}
}
</style>