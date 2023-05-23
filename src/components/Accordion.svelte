<script lang="ts">
    let opened: boolean = false;
</script>

<div>
    <button on:click={() => opened = !opened}>
        {#if opened}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;"><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg>
        <span>See Less</span>
        {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
        <span>See More</span>
        {/if}
    </button>
    <div class="additional-items {opened ? 'enabled' : ''}">
       <slot /> 
    </div>
</div>

<style lang="scss">
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #5a5a5a;
        background: transparent;
        border: none;
        font-family: 'Rubik', sans-serif;
        font-weight: 600;
        &:hover {
            cursor: pointer;
        }
    }
    .additional-items {
        width: 100%;
        display: none;
        visibility: hidden;
    }
    .enabled {
        visibility: visible;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>