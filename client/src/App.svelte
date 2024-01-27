<script>
    import { GetPostsRequest } from "./protos/out/post/post_pb";
    import { PostServiceClient } from "./protos/out/post/post_grpc_web_pb";
    import { onMount } from "svelte";

    import { _ } from "lodash";

    import Post from "./Post.svelte";

    var grpcClient = new PostServiceClient("http://localhost:13007");

    let viewportWidth = window.innerWidth;

    const definedFilters = [
        "No Filter",
        "By Author",
        "By Title",
        "By Keywords",
    ];

    let filter = definedFilters[0];

    let query = "";

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
            keywordsList: ["methodology", "Versatile", "motivating"],
        },
        {
            title: "Nuclear Power Engineer",
            body: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
            author: "Drake Rouf",
            keywordsList: ["Triple-buffered", "analyzing", "Synergistic"],
        },
        {
            title: "Mechanical Systems Engineer",
            body: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
            author: "Samson Crimin",
            keywordsList: [
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
            keywordsList: ["Multi-tiered", "hierarchy", "interactive"],
        },
        {
            title: "Marketing Assistant",
            body: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            author: "Sapphire Gabel",
            keywordsList: [
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
            keywordsList: ["Team-oriented", "Face to face", "Balanced"],
        },
        {
            title: "Director of Sales",
            body: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            author: "Barnett Leveret",
            keywordsList: [
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
            keywordsList: [
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
            keywordsList: [
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
            keywordsList: ["Extended", "client-driven", "explicit"],
        },
        {
            title: "Senior Developer",
            body: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            author: "Nana Worms",
            keywordsList: ["Cloned", "access", "24/7"],
        },
        {
            title: "Automation Specialist II",
            body: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            author: "Annabelle Babbage",
            keywordsList: [
                "regional",
                "Mandatory",
                "customer loyalty",
                "global",
            ],
        },
        {
            title: "Business Systems Development Analyst",
            body: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            author: "Jeannette Jayne",
            keywordsList: ["Enhanced", "Synergistic", "Open-source"],
        },
        {
            title: "Quality Control Specialist",
            body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            author: "Stanleigh Fayne",
            keywordsList: [
                "Distributed",
                "homogeneous",
                "Profound",
                "focus group",
            ],
        },
        {
            title: "Civil Engineer",
            body: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            author: "Panchito Braidman",
            keywordsList: ["access", "migration", "cohesive"],
        },
        {
            title: "Marketing Assistant",
            body: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            author: "Mike Grundell",
            keywordsList: ["time-frame", "frame", "tangible"],
        },
        {
            title: "Chemical Engineer",
            body: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            author: "Rania Kiefer",
            keywordsList: [
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
            keywordsList: [
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
            keywordsList: [
                "system-worthy",
                "Open-source",
                "Synergistic",
                "interactive",
            ],
        },
    ];

    const sendGrpcRequest = (filter, query) => {
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
                {filter}
            </div>
            <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
                {#each definedFilters as filterName}
                    <li
                        on:click={() => {
                            console.log(filterName);
                            filter = filterName;
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
                    bind:value={query}
                    type="text"
                    placeholder="Search"
                    class="input input-bordered w-24 md:w-auto bg-primary-content"
                />
            </div>
        </div>
        <button
            class="mx-2 btn btn-primary-content rounded-full hover:rounded-md"
            on:click={() => {
                sendGrpcRequest(filter, query);
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
        {#each columns as col}
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
