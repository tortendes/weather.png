
<main>
    <form method="POST" action="/results">
        <input type="text" placeholder="Enter city or town" name="location">
        <button type="submit">Enter</button>
    </form>
</main>

<style lang="scss">
    @use '../styles/form-reset';
    @import '../styles/mixins';

    form {
        margin-top: 1.2em;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
            background-color: #fcfcfc;
            font-family: "Inter", sans-serif;
            color: #1a1a1a;
            border: 1px solid black;
            padding: 1em 1em;
            min-width: 10em;
            font-size: 1rem;
            @include md {
                min-width: 20em;
            }
        }
        button[type=submit] {
            font-family: "Inter", sans-serif;
            font-size: 1rem;
            min-width: 7em;
            background-color: black;
            text-align: center;
            color: #fcfcfc;
            padding: 1.14em 1em;
            font-weight: 600;
            text-transform: uppercase;
            &:hover {
                cursor: pointer;
            }
        }
    }

</style>