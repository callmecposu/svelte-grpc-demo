<script>
    export let title;
    export let body;
    export let author;
</script>

<div
    class=" self-start m-8 w-80 shadow-xl rounded-xl border-2 border-secondary border-opacity-45 overflow-hidden"
>
    <div class="p-4 border-b-2 border-inherit bg-secondary bg-opacity-15">
        <h2 class=" font-bold">{title}</h2>
    </div>
    <div class="p-4">
        <p>{body}</p>
    </div>
    <div class="p-4">
        <div class="avatar placeholder h-8 w-8 m-1">
            <div class="bg-neutral text-neutral-content rounded-full w-24">
                <span class="text-sm"
                    >{author.split(" ")[0][0] +
                        (author.split(" ")[1]
                            ? author.split(" ")[1][0]
                            : "")}</span
                >
            </div>
        </div>
        <span class=" font-light">{author}</span>
    </div>
</div>

<style>
    /* div{
        margin: 2rem;
        border: 2px dotted slategray;
        border-radius: 15px;
        text-align: center;
        width: 300px;
        align-self: flex-start;
    }

    .body{
        border-top: 2px dotted lightgray;
        border-bottom: 2px dotted lightgray;
        padding: 2rem 0.5rem;
    }

    .author{
        padding: 0 0.5rem;
        text-align: start;
        font-style: italic;
    } */
</style>
