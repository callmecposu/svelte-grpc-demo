<script>
    import { GetPostsRequest } from "./protos/out/post/post_pb";
    import { PostServiceClient } from "./protos/out/post/post_grpc_web_pb";
    import { onMount } from "svelte";

    import { _ } from "lodash";

    import Post from "./Post.svelte";

    var grpcClient = new PostServiceClient("http://localhost:13007");

    let viewportWidth = window.innerWidth;

    $: colNum = Math.floor((viewportWidth - 50) / (320 + 64));

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
            title: "Director of Sales",
            body: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            author: "Cory Bodle",
            keywords: ["methodology", "Versatile", "motivating"],
        },
        {
            title: "Nuclear Power Engineer",
            body: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
            author: "Drake Rouf",
            keywords: ["Triple-buffered", "analyzing", "Synergistic"],
        },
        {
            title: "Mechanical Systems Engineer",
            body: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
            author: "Samson Crimin",
            keywords: [
                "Organized",
                "Networked",
                "24 hour",
                "Compatible",
                "Object-based",
            ],
        },
        {
            title: "Social Worker",
            body: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
            author: "Benedikta Lockner",
            keywords: ["Multi-tiered", "hierarchy", "interactive"],
        },
        {
            title: "Marketing Assistant",
            body: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            author: "Sapphire Gabel",
            keywords: [
                "systematic",
                "multi-tasking",
                "application",
                "internet solution",
                "project",
            ],
        },
        {
            title: "Staff Accountant II",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
            author: "Al McCray",
            keywords: ["Team-oriented", "Face to face", "Balanced"],
        },
        {
            title: "Director of Sales",
            body: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            author: "Barnett Leveret",
            keywords: [
                "optimal",
                "secured line",
                "mission-critical",
                "Cross-platform",
                "help-desk",
            ],
        },
        {
            title: "Automation Specialist II",
            body: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            author: "Julio Welfair",
            keywords: [
                "foreground",
                "Progressive",
                "success",
                "matrices",
                "Grass-roots",
            ],
        },
        {
            title: "Junior Executive",
            body: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            author: "Gusella Allewell",
            keywords: [
                "foreground",
                "monitoring",
                "Synergized",
                "actuating",
                "Networked",
            ],
        },
        {
            title: "Product Engineer",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
            author: "Saxe Boome",
            keywords: ["Extended", "client-driven", "explicit"],
        },
        {
            title: "Senior Developer",
            body: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            author: "Nana Worms",
            keywords: ["Cloned", "access", "24/7"],
        },
        {
            title: "Automation Specialist II",
            body: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            author: "Annabelle Babbage",
            keywords: ["regional", "Mandatory", "customer loyalty", "global"],
        },
        {
            title: "Business Systems Development Analyst",
            body: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            author: "Jeannette Jayne",
            keywords: ["Enhanced", "Synergistic", "Open-source"],
        },
        {
            title: "Quality Control Specialist",
            body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            author: "Stanleigh Fayne",
            keywords: ["Distributed", "homogeneous", "Profound", "focus group"],
        },
        {
            title: "Civil Engineer",
            body: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            author: "Panchito Braidman",
            keywords: ["access", "migration", "cohesive"],
        },
        {
            title: "Marketing Assistant",
            body: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            author: "Mike Grundell",
            keywords: ["time-frame", "frame", "tangible"],
        },
        {
            title: "Chemical Engineer",
            body: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            author: "Rania Kiefer",
            keywords: [
                "Triple-buffered",
                "exuding",
                "matrix",
                "fresh-thinking",
                "Horizontal",
            ],
        },
        {
            title: "Internal Auditor",
            body: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
            author: "Donia Hebner",
            keywords: [
                "radical",
                "Right-sized",
                "capability",
                "grid-enabled",
                "Pre-emptive",
            ],
        },
        {
            title: "Environmental Tech",
            body: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
            author: "Tiphanie Smullin",
            keywords: [
                "system-worthy",
                "Open-source",
                "Synergistic",
                "interactive",
            ],
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
        <button class="btn btn-primary mx-4" on:click={sendGrpcRequest}
            >FETCH!</button
        >
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
        {#each columns as col}
            {#if col}
                <div class=" flex flex-col">
                    {#each col as post}
                        <Post
                            title={post.title}
                            body={post.body}
                            author={post.author}
							keywords={post.keywords}
                        />
                    {/each}
                </div>
            {/if}
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
