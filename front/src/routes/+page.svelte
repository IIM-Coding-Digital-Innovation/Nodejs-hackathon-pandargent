<script>
	import profil_picture from '$lib/images/profilpicture.png'
	import logo from '$lib/images/logo.png'
</script>

<svelte:head>
	<title>Login Page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
		<div class="box">
			<form action="/room" method="get">
				<img class="logo" src="{logo}" alt="">
				<div class="form">
					<picture class="profilpicture">
						<img src="{profil_picture}" alt="Profil_Picture">
					</picture>
					<input type="text" name="name" id="" placeholder="Entrez votre pseudo *" required>
				</div>
				<div class="password">
					<input type="password" name="password" placeholder="Entrez votre mot de passe *" required>
				</div>
				<br>
				<button class="play">Jouer</button>
			</form>
		</div>
</section>

<style>

    section{
        min-height: 100vh;
        margin: 0;
        background-attachment: fixed;
        background-size: 100vw 100vh;
        background-image: url($lib/images/bg-menu.png);
    }
	.logo{
		width: 100px;
		height: 100px;
        position: absolute;
		top: 20%;
		left: 50%;
        transform: translate(-50%, -50%);
}

	.box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		padding: 125px;
		border-radius: 25px;
}

    .form{
        padding-top: 30px;
        display: flex;
        align-items: center;
    }

    .form input{
        border: none;
        border-bottom: 1px solid black;
        margin-left: 8px;
        outline: none;
        height: 40px;
    }

	.password input{
		border: none;
        border-bottom: 1px solid black;
        outline: none;
        height: 40px;
		width: 100%;
	}

	.profilpicture img{
		border-radius: 50%;
		width: 80px;
		height: 80px;
	}

	.play{
        cursor: pointer;
		border: none;
		outline: none;
		height: 40px;
		background: #C8A879;
		color: #fff;
		font-size: 18px;
		border-radius: 10px;
        width: 100%;
	}
    .play:hover{
        cursor: pointer;
        background: #ffc107;
    }
	
</style>
