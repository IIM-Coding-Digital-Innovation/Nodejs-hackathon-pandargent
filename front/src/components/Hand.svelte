<script>
    import Card from "./Card.svelte";
    import Action from "./Action.svelte";

    export let isPlayer;
    export let cards;
    export let me;
    export let players;
    export let playCard;

    let showActionCard = undefined

    const closeAction = () =>{
        showActionCard = undefined
    }
    const showAction = (card) =>{
        showActionCard = card
    }

</script>

<ul class="cards">
    {#if cards && Array.isArray(cards)}
        {#each cards as card}
            <Card card={card} isPlayer={isPlayer} click={() => showAction(card)}/>
        {/each}
    {/if}
    {#if showActionCard}
        <Action card={showActionCard} closeAction={closeAction} me={me} players={players} playCard={playCard} />
    {/if}
</ul>


<style>
    .cards {
        display: flex;
        position: relative;
        justify-content: center;
    }
</style>