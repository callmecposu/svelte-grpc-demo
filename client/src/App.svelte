<script>
	import {GetPostsRequest} from './protos/out/post/post_pb'
	import {PostServiceClient} from './protos/out/post/post_grpc_web_pb'
	import { onMount } from 'svelte';

	var grpcClient = new PostServiceClient('http://localhost:13007')

	const sendGrpcRequest = () => {
		const req = new GetPostsRequest()
		grpcClient.getPosts(req, {}, (err, resp) => {
			if (err){
				console.log('error making a grpc request: ', err)
			} else {
				console.log('grpc server responded with: ', resp.toObject())
			}
		})
	}

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={sendGrpcRequest}>FETCH!</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>