<script lang="ts">
  import { browser } from '$app/environment';

	import Accordion from "../../components/Accordion.svelte";
  import ExtraInfo from "../../components/ExtraInfo.svelte";
  import type { ActionData } from "./$types";
  export let form: ActionData;

  if (!form) {
    if (browser) { // to prevent error window is not defined, because it's SSR
      window.location.href = '/';
    }
  }
</script>


<svelte:head>
  <title>weather-png Results</title>
</svelte:head>

<main>
  <div class="main-content">
    <h1 class="weater-description">
        It is currently 
        <span class="special-data">
          {form?.result.weatherData.current.weather[0].main} with {form?.result.weatherData.current.weather[0].description}
        </span> in 
        <span class="special-data">
          {form?.result.locationData[0].name}, {form?.result.locationData[0].state ? form?.result.locationData[0].state : form?.result.locationData[0].country }
        </span>
    </h1>
    <Accordion>
        <ExtraInfo title="Temperature" value={form?.result.weatherData.current.temp+"°C"}></ExtraInfo>
        <ExtraInfo title="Feels Like" value={form?.result.weatherData.current.feels_like+"°C"}></ExtraInfo>
        <ExtraInfo title="Humidity" value={form?.result.weatherData.current.humidity+"%"}></ExtraInfo>
        <ExtraInfo title="Pressure" value={form?.result.weatherData.current.pressure+"mBar"}></ExtraInfo>
        <ExtraInfo title="Wind Speed" value={form?.result.weatherData.current.wind_speed+"km/h"}></ExtraInfo>
        <ExtraInfo title="UV Index" value={form?.result.weatherData.current.uvi}></ExtraInfo>
    </Accordion>
    <footer>
      &copy; 2023 - A <a href="://torten.xyz">tortenworx</a> project
    </footer>
  </div>
  <img class="image-result" src={form?.image || '/Rectangle.png'} alt="" srcset="Image result">
</main>

<style lang="scss">
  @import '../../styles/mixins';

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: start;
    @include md {
      flex-direction: row;
      max-height: 100vh;
    }
  }

  .main-content {
    background: #222 !important;
    color: #fff;
    height: 100vh;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: start;
    @include md {
      justify-content: center;
      max-height: 100vh;
    }
    padding: 1em 3em;
    h1 {
      font-family: 'Inter', sans-serif;
      font-weight: 300;
      font-style: underline;
      font-size: 2rem;
      margin-bottom: 0.23em;
      .special-data {
        font-family: 'EB Garamond', 'Courier New', Courier, monospace;
        font-weight: 600;
        text-decoration: underline;
      }
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
    @include md {
      min-height: 100vh;
      max-height: 100vh;
    }
  }
</style>