<script>
    import { io } from 'socket.io-client';
    import { onDestroy, onMount } from 'svelte';
    import Board from "../../components/Board.svelte";
    import Hand from "../../components/Hand.svelte";
    import PlayerBoard from "../../components/PlayerBoard.svelte";
    import Deck from "../../components/Deck.svelte";

    const socket = io('http://localhost:9999');

    let nPlayer = undefined;

    let players = [];
    let me = undefined;
    let playersWithoutMe = [];
    $: {
        if (players.length > 0) {
            me = players.find((player)=>player.me)
            playersWithoutMe = players.filter((player)=>!player.me)
        }
    }

    onMount(() => {
        socket.on('connect', () => {
            socket.emit('join_room', 'room1', nPlayer, (player) => {
                console.log(player);
                nPlayer = player;
            });
        });

        socket.on('get_playerInfo', (newPlayers) => {
            players = [...newPlayers]
        });

        socket.on('get_pickCard', ({nPlayer}) => {
            console.log(`${nPlayer} picked one card`);
        });

        socket.on('get_newCard', (newCard) => {
            console.log(newCard);
            me.hand = [...me.hand, newCard]
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    });

    onDestroy(() => {
        socket.disconnect();
    });

    $: console.log("me",me)

    const onDrawCard = () => {
        socket.emit('send_pickCard', {nPlayer});
        console.log(`${nPlayer} picked one card`);
    };
    //todo ajouter la carte a la hand du joueur
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="layout">
    <section class="board">
        <Board />
    </section>
    <section class="top-player">
        <Hand isPlayer={false} cards={playersWithoutMe[0]?.hand} />
        <PlayerBoard />
    </section>
    <section></section>
    <section class="left-player">
        <PlayerBoard />
        <Hand isPlayer={false} cards={playersWithoutMe[1]?.hand}/>
    </section>
    <section class="deck-area">
        <Deck drawCard= {onDrawCard} />
    </section>
    <section class="right-player">
        <PlayerBoard />
        <Hand isPlayer={false} cards={playersWithoutMe[2]?.hand}/>
    </section>
    <section></section>
    <section class="active-player">
        <PlayerBoard />
        <Hand isPlayer={true} cards={me?.hand} />
    </section>
</div>

<style>
    .board {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }
    .active-player {
        gap: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(40px);
    }
    .top-player {
        gap: 10px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        transform: rotate(180deg);
    }
    .left-player {
        gap: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: rotate(90deg);
    }
    .right-player {
        gap: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: rotate(-90deg);
    }

    .layout {
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr;
        grid-template-rows: 1fr 300px 1.2fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        height: 100vh;
    }

    .deck-area {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
