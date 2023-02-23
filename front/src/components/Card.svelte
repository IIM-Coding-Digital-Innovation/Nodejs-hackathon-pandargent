<script>
    import back_card from "../lib/cards/back_card.jpg";
    import Action from "./Action.svelte";
    export let card
    export let isPlayer
    export let click

</script>

{#if isPlayer === true}
    <li class="card" on:click={click}>
        <div class="card__img">
            <img src={card.img} alt="image of {card.name}">
        </div>
    </li>
{:else}
    <li class="card__bg">
        <div class="card__img">
            <img src="{back_card}" alt="back of the card">
        </div>
    </li>
{/if}

<style>
    .card{
        width: 88px;
        padding: 2px;
        border-radius: 8px;
        background-color:#C3B189;
        cursor: pointer;
        transition: all 0.3s;
    }
    .card:hover {
        transform: translateY(-85px) scale(2);
        transition: all 0.3s;
    }
    .card__img img{
        border-radius: 8px;
    }
    .card--bg {
        width: 88px;
        border-radius: 8px;
    }
    .card__bg:not(:first-child) {
        margin-left: -40px;
    }
    .card__title {
        font-weight: 600;
        font-size: 0.9rem;
    }
    .card__description {
        font-size: 0.8rem;
    }
</style>