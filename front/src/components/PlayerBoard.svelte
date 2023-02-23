<script>
    export let specialCard;
    export let milesCard;
    export let stateCard;
</script>

<div class="player-board">
    <div id="miles-card-position" class="player-board__miles">
        {#if milesCard}
        <div class="card">
            {#if milesCard?.img}
            <img src={milesCard?.img} alt="image of">
            {/if}
        </div>
        {/if}
    </div>
    <div id="special-card-position" class="player-board__special">
        {#if specialCard}
        <div class="card">
            {#if specialCard[0]?.img}
            <img src={specialCard[0]?.img} alt="image of">
            {/if}
        </div>
        {/if}
    </div>
    <div id="bonus-card-position" class="player-board__bonus">
        {#if stateCard}
        <div class="card">
            {#if stateCard?.img}
            <img src={stateCard?.img} alt="image of">
            {/if}
        </div>
        {/if}
    </div>

    <!-- <h2 class="card__title">{card.name}</h2> -->
</div>

<style>
    .player-board {
        border: solid red 1px;
        width: 100%;
        height: 100%;
        display: flex;
        gap: 10px;
        justify-content: space-around;
    }
    .card{
        width: 50px;
        padding: 2px;
        border-radius: 2px;
        background-color:#C3B189;
        cursor: pointer;
        transition: all 0.3s;
    }
</style>