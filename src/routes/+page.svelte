<script lang="ts">
  import Form from '../components/Form.svelte'
  let data;
  let value: string;

  async function submit() {
    const request = await fetch(`https://concerned-gray-bracelet.cyclic.app/api/v1/generate?location=${encodeURIComponent(value)}`)
    const resultJson = await request.json()
  }
</script>

<svelte:head>
  <title>weather-png</title>
  <meta name="description" content="A new way of weatherin'">
  <meta property="og:title" content=weather.png>
  <meta property="og:site_name" content=weather.png>
  <meta property="og:url" content=weather-png.torten.xyz>
  <meta property="og:description" content="A new way of weatherin'">
  <meta property="og:type" content=website>
  <meta property="og:image" content=https://cdn.torten.lol/server/OG%20Main%20Landscape.png>
  <meta property="og:image:height" content="1080">
  <meta property="og:image:width" content="1920">
  <meta property="og:image" content="https://cdn.torten.lol/server/OG%20Small.png">
  <meta property="og:image:width" content="626">
  <meta property="og:image:height" content="626">
  <meta name="twtiter:card" content="summary">
  <meta name="twitter:creator" content="@tortenwashere">
</svelte:head>

<main>
  <div class="main-content">
    <h1>weather.png</h1>
    <p>A simple app that shows the weather from <a href="://openweathermap.org" target="_blank" referrerpolicy="no-referrer">OpenWeatherMap</a> and generates a image of a certain place in the city from <a href="://openai.com/product/dall-e-2" target="_blank" referrerpolicy="no-referrer">DALL-E </a> with the corresponding weather.</p>
    <Form />
    <footer>
      &copy; 2023 - A <a href="://torten.xyz">tortenworx</a> project
    </footer>
  </div>
  <img class="image-result" src="/Rectangle.png" alt="" srcset="Image result">
</main>

<style lang="scss">
  @import '../styles/mixins';

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    @include md {
      flex-direction: row;
      min-height: 100vh;
    }
  }

  .main-content {
    background: url('/Rectangle.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @include md {
      padding: 1em 3em;
      background: #222 !important;
    }
    color: #fff;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    h1 {
      font-family: 'Righteous', cursive;
      font-weight: 200;
      font-size: 2.8rem;
      text-align: center;
      margin-bottom: 0.23em;
    }
    p {
      font-family: 'Inter', sans-serif;
    }
    a {
      color: #fff;
    }
    footer {
      margin-top: 0.73em;
      font-family: 'Rubik', sans-serif;
      color: rgba(255, 255, 255, 0.25);
      a {
        color: rgba(255, 255, 255, 0.25);
      }
    }
  }

  img.image-result {
    width: 100%;
    visibility: none;
    display: none;
    @include md {
      width: auto;
      visibility: visible;
      display: block;
      min-height: 100vh;
    }
  }
</style>
