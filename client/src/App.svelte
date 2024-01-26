<script>
    import { GetPostsRequest } from "./protos/out/post/post_pb";
    import { PostServiceClient } from "./protos/out/post/post_grpc_web_pb";
    import { onMount, afterUpdate } from "svelte";

    import { _ } from "lodash";

    import Post from "./Post.svelte";
    import { each } from "svelte/internal";

    var grpcClient = new PostServiceClient("http://localhost:13007");

    let viewportWidth = window.innerWidth;

    $: colNum = Math.floor((viewportWidth - 250) / 300);

    const getColumns = () => {
        let temp = [];
        for (let i = 0; i < colNum; i++) {
            temp.push(_.chunk(posts, Math.ceil(posts.length / colNum))[i]);
        }
        console.log(temp);
        return temp;
    };

    $: columns = getColumns(posts, colNum);

    let posts = [
        {
            title: "Payment Adjustment Coordinator",
            body: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
            author: "Filberte Behagg",
        },
        {
            title: "GIS Technical Architect",
            body: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
            author: "Reynard Heskin",
        },
        {
            title: "General Manager",
            body: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            author: "Layla Thiolier",
        },
        {
            title: "Research Assistant I",
            body: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            author: "Clifford Bonass",
        },
        {
            title: "Systems Administrator II",
            body: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            author: "Hali Goodinge",
        },
    ];

    const sendGrpcRequest = () => {
        const req = new GetPostsRequest();
        grpcClient.getPosts(req, {}, (err, resp) => {
            if (err) {
                console.log("error making a grpc request: ", err);
            } else {
                console.log("grpc server responded with: ", resp.toObject());
                posts = resp.toObject().postsList;
            }
        });
    };

    onMount(() => {
        console.log("mounted");
        window.addEventListener("resize", () => {
            viewportWidth = window.innerWidth;
        });
    });

    export let name;
</script>

<main>
    <div class="navbar bg-base-100 bg-neutral rounded-br-md rounded-bl-md">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl">I &lt;3 gRPC</a>
        </div>
        <div class="flex-none gap-2">
            <div class="form-control">
                <input
                    type="text"
                    placeholder="Search"
                    class="input input-bordered w-24 md:w-auto bg-primary-content"
                />
            </div>
        </div>
        <button
            class="mx-2 btn btn-primary-content rounded-full hover:rounded-md"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                /></svg
            >
        </button>
    </div>

    <!-- <div class="posts_container">
    {#each columns as col}
      <div class="posts_column">
        {#if col}
          {#each col as post}
            <Post title={post.title} body={post.body} author={post.author} />
          {/each}
        {/if}
      </div>
    {/each}
  </div> -->
  <div class=" m-4 flex flex-wrap border-2 border-slate-400">
	{#each posts as post}
		<Post title={post.title}, body={post.body}, author={post.author}/>
	{/each}
  </div>
</main>

<style>
    /* main {
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

  .posts_container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .posts_column {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
</style>
