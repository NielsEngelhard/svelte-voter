<script>
     import { createEventDispatcher } from 'svelte';

    export let message = "default value";
    export let isPromo = false;
    export let showModal = false;

    const dispatch = createEventDispatcher();

    const handleCloseModalClick = () => {
        dispatch("closeModal");
    };
</script>

{#if showModal}
    <div class="backdrop" class:promo={isPromo} on:click|self={handleCloseModalClick}>
        <div class="modal" >
            <slot name="title"></slot>
            <slot></slot>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0,0,0,0.8);
    }

    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }

    .promo .modal {
        background: crimson;
        color: white;
    }
</style>