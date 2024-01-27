<script>
    import { GetPostsRequest } from "./protos/out/post/post_pb";
    import { PostServiceClient } from "./protos/out/post/post_grpc_web_pb";
    import { onMount } from "svelte";

    import { _ } from "lodash";

    import Post from "./Post.svelte";
    import { get_spread_update } from "svelte/internal";

    var grpcClient = new PostServiceClient("http://localhost:13007");

    let viewportWidth = window.innerWidth;

    const definedFilters = [
        "No Filter",
        "By Author",
        "By Title",
        "By Keywords",
    ];

    let curFilter = definedFilters[0];

    let curQuery = "";

    let limit = 20;

    $: colNum = Math.floor((viewportWidth - 50) / (320 + 64));

    const getColumns = (postsChunk) => {
        let temp = [];
        for (let i = 0; i < colNum; i++) {
            temp.push(
                _.chunk(postsChunk, Math.ceil(postsChunk.length / colNum))[i]
            );
        }
        console.log("columns: ", temp);
        return temp;
    };

    $: pagesNum = Math.ceil(posts.length / limit);

    const getPages = () => {
        const chunks = _.chunk(posts, limit);
        let temp = [];
        for (let i = 0; i < pagesNum; i++) {
            temp.push(getColumns(chunks[i]));
        }
        console.log("pages: ", temp);
        return temp;
    };

    $: pages = getPages(posts, colNum);

    let curPage = 0;

    let posts = [];

    const sendGrpcRequest = (filter, query) => {
		posts = []
		curPage = 0;
        const req = new GetPostsRequest();
        let reqQuery;
        if (filter !== "No Filter") {
            reqQuery = JSON.parse(query);
        }
        console.log(filter, reqQuery);
        switch (filter) {
            case "By Author":
                req.setAuthor(reqQuery);
                break;
            case "By Title":
                req.setTitle(reqQuery);
                break;
            case "By Keywords":
                req.setKeywordsList(reqQuery);
                break;
            default:
                break;
        }
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
        sendGrpcRequest("No Filter", "");
    });

    export let name;
</script>

<main>
    <div class="navbar bg-base-100 bg-neutral rounded-br-md rounded-bl-md">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl">I &lt;3 gRPC</a>
        </div>
        <div class="dropdown dropdown-end mx-4">
            <div tabindex="0" role="button" class="btn btn-outline">
                {curFilter}
            </div>
            <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
                {#each definedFilters as filterName}
                    <li
                        on:click={() => {
                            console.log(filterName);
                            curFilter = filterName;
                        }}
                    >
                        <span>{filterName}</span>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="flex-none gap-2">
            <div class="form-control">
                <input
                    bind:value={curQuery}
                    type="text"
                    placeholder="Search"
                    class="input input-bordered w-24 md:w-auto bg-primary-content"
                />
            </div>
        </div>
        <button
            class="mx-2 btn btn-primary-content rounded-full hover:rounded-md"
            on:click={() => {
                sendGrpcRequest(curFilter, curQuery);
            }}
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

    <!-- <h1>Viewport width: {viewportWidth} px</h1>
    <h1>Number of columns: {colNum}</h1> -->

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
    <div class=" m-4 flex flex-wrap justify-center">
        {#if pages.length == 0}
            <span class="loading loading-bars loading-lg"></span>
        {:else}
            {#each pages[curPage] as col}
                {#if col}
                    <div class=" flex flex-col">
                        {#each col as post}
                            <Post
                                title={post.title}
                                body={post.body}
                                author={post.author}
                                keywordsList={post.keywordsList}
                            />
                        {/each}
                    </div>
                {/if}
            {/each}
        {/if}
    </div>
    <div class="flex justify-center m-4">
        <div class="join">
            <button
                class="join-item btn"
                class:btn-disabled={curPage == 0}
                on:click={() => {
                    curPage = 0;
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}>«</button
            >
			<button
                class="join-item btn"
                class:btn-disabled={curPage == 0}
                on:click={() => {
                    curPage--;
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}>&lt;</button
            >
            <button class="join-item btn"
                >Page {curPage + 1} / {pagesNum}</button
            >
            <button
                class="join-item btn"
                class:btn-disabled={curPage == pagesNum - 1}
                on:click={() => {
                    curPage++;
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}>&gt;</button
            >
			<button
			class="join-item btn"
			class:btn-disabled={curPage == pagesNum - 1}
			on:click={() => {
				curPage = pagesNum - 1;
				window.scrollTo({ top: 0, behavior: "smooth" });
			}}>»</button
		>
        </div>
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
