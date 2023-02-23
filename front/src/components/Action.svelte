<script>
    import {canPutCard} from "../utils/canPutCard.js";

    export let card;
    export let closeAction;
    export let me;
    export let players
    export let playCard;

    $: console.log(players)

    $: canAddCardToMe = canPutCard(me, card);
    $: canAddCardToPlayer2 = canPutCard(players[0], card);
    $: canAddCardToPlayer3 = canPutCard(players[1], card);
    $: canAddCardToPlayer4 = canPutCard(players[2], card);

</script>

{#if card}
    <div class="action__backdrop" on:click={closeAction}></div>
    <div class="action__menu">
        <img src={card.img} alt="image of {card.name}">
        <div class="action__buttons">
            {#if canAddCardToMe}<button on:click={playCard(me,card)}>Joueur la carte sur moi</button>{/if}
            {#if canAddCardToPlayer2}<button on:click={playCard(players[0],card)}>Jouer la carte sur le {players[0].pseudo}</button>{/if}
            {#if canAddCardToPlayer3}<button on:click={playCard(players[1],card)}>Jouer la carte sur le {players[1].pseudo}</button>{/if}
            {#if canAddCardToPlayer4}<button on:click={playCard(players[2],card)}>Jouer la carte sur le {players[2].pseudo}</button>{/if}
            <button on:click={closeAction}>Fermer</button>
        </div>
    </div>
{/if}

<style>
    .action__menu{
        width: 200%;
        top: -550px;
        border-radius: 30px;
        position: absolute;
        background-color: white;
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .action__menu .action__buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .action__menu .action__buttons button{
        width: 100%;
        outline: none;
        border: black 1px solid;
        background-color: transparent;
        height: 100px;
        cursor: pointer;
    }

    .action__menu .action__buttons button:hover{
        background-color: #f2f2f2;
    }

    .action__backdrop{
        position: absolute;
       width: 100vw;
        height: 100vh;
        background-color: transparent;
        bottom: 0;
    }
</style>