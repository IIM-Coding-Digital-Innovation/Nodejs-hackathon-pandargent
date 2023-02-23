<script>
	import back_card from "../lib/cards/back_card.jpg";
    import img from "../lib/cards/characters/img_harry_potter.jpg";

    export let isPlayer;
    export let cards;
    export let playCard;
    
</script>

<ul class="cards">
    {#if cards && Array.isArray(cards)}
        {#each cards as card, i}
            {#if isPlayer === true}
                <li on:click={() => playCard(i)} class="card">
                    <div class="card__img">
                        <img src="{img}" alt="image of {card.name}">
                    </div>
                    <h2 class="card__title">{card.name}</h2>
                    <p class="card__description">{card.description}</p>
                </li>
            {:else}
                <li class="card--bg">
                    <div class="card__img">
                        <img src="{back_card}" alt="back of the card">
                    </div>
                </li>
            {/if}
        {/each}
    {/if}
</ul>


<style>
    .cards {
        display: flex;
    }
    .card{
        width: 88px;
        padding: 8px;
        border-radius: 8px;
        background-color: rgb(231, 217, 22);
        border: solid 1px black;
        cursor: pointer;
        transition: all 0.3s;
    }
    .card:hover {
        transform: translateY(-85px) scale(1.5);
        transition: all 0.3s;
    }
    .card--bg {
        width: 88px;
        border-radius: 8px;
    }
    .card--bg:not(:first-child) {
        margin-left: -40px;
    }
    .card__img img{
        border-radius: 8px;
    }
    .card__title {
        font-weight: 600;
        font-size: 0.9rem;
    }
    .card__description {
        font-size: 0.8rem;
    }
</style>