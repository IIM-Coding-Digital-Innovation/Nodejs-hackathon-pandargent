
<script>
	export let player;
</script>



<div class="info">
    <h3>{player?.pseudo}</h3>
    <p>{player?.progress} km</p>
    {#if player?.status}
    <p>{player?.status}</p>
    {/if}

</div>

<style>
    .info {
        width: 150px;
        margin-left: 10px;
    }

    </style>