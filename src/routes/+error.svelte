<script lang="ts">
    import { page } from "$app/stores";
</script>

<main>
    <h1>{ $page.status }</h1>
    <h3>{ $page.error?.message }</h3>
    <span>Check for potential mistakes such as mispellings and unesunnecessary stuff which might make this error pop out.</span>
    <a class="go-back" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>
        <span>Go Back</span>
    </a>
    <footer>
      &copy; 2023 - A <a href="://torten.xyz">tortenworx</a> project
    </footer>
</main>

<style lang="scss">
    main {
        background-image: url('/Rectangle.png');
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    h1 {
        font-family: 'Rubik', sans-serif;
        font-size: 3.5rem;
        margin-bottom: 0;
    }
    h3 {
        margin-top: 0;
        font-family: 'Rubik', sans-serif;
        font-size: 2rem;
        font-weight: 400;
    }
    span {
        max-width: 50vw;
    }
    a.go-back {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.223em 0;
        color: #111;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
    footer {
      margin-top: 0.73em;
      font-family: 'Rubik', sans-serif;
      color: rgba(0, 0, 0, 0.50);
      a {
        color: rgba(0, 0, 0, 0.50);
      }
    }
</style>