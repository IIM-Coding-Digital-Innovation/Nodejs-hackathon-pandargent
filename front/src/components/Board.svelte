<script>
    import bg_board from "../lib/images/bg_board.jpg";
</script>
<section>
    <div class="background">
        <img src="{bg_board}" alt="background" />
    </div>
</section>

<style lang="scss">
    .background {
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: -100;
    }
    .background img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>