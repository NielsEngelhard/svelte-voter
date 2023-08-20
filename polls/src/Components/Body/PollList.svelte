<script>
    import { fade, slide, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate'
    import PollDetails from './PollDetails.svelte'
    import PollStore from '../../Stores/PollStore'
    // import { onMount, onDestroy } from 'svelte'

    // const unsubscribeFromPollstore = PollStore.subscribe((data) => {
    //     polls = data;
    // });

    // onMount(() => {
    //     console.log("PollList Component mounted");
    // });

    // onDestroy(() => {
    //     console.log("PollList Component destroyed");
    //     unsubscribeFromPollstore();
    // });    
</script>

<div class="poll-list">
    <!-- The $ in $PollStore automatically subscribes on the data :o and ALSO AUTOMATICALLY UNSUBSCRIBES -->
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:slide animate:flip={{duration: 500}}>
            <PollDetails poll={poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>