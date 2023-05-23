<script lang="ts">
    export let title: string;
    export let value: number | string;
</script>

<div>
    <span class="title">{title}</span>
    <div class="sep">

    </div>
    <span class="value">{value}</span>
</div>

<style lang="scss">
    div {
        font-size: 1.2rem;
        font-family: 'Rubik', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 0.35em
    }
    div.sep {
        flex-grow: 1;
        border-bottom: 3px #5a5a5a dotted;
    }
</style>



