<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let tabItems;
    export let activeItem;

</script>

<div class="tabs">
    <ul>
        {#each tabItems as tabItem}
            <li on:click={() => dispatch('tabChange', tabItem)}>
                <div class:activeTabItem={tabItem === activeItem}>{tabItem}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }

    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }

    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }

    .activeTabItem {
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
</style>