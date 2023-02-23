<script>
	import back_card from "../lib/cards/back_card.jpg";
	export let drawCard;
</script>

<div class="deck" on:click={() => drawCard()}>
	<img src="{back_card}" alt="back of the card"/>
</div>

<style>
	.deck {
		width: 96px;
	}
	.deck img {
		border-radius: 8px;
		box-shadow: 1px 2px 6px;
	}
</style>