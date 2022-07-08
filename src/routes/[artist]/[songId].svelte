<script>
import {page} from '$app/stores';
import {onMount} from 'svelte';

let songId = $page.params.songId;
let song={};

onMount( async () => {
  const res = await fetch(`https://itunes.apple.com/search?term=${songId}&entity=song`)
  const data = await res.json();
  song = data.results[0];
})

</script>
{#if song.trackName }
  <div class="song">
    <h1 class="song-name">{song.trackName}</h1>
    <img class="song-artwork" src={song.artworkUrl100} alt="song artwork">
    <audio src={song.previewUrl} controls></audio>
</div>
{:else}
  <div class="spin">
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle moving"></span>
    
  </div>

{/if}

<style>
  .song{
    text-align: center;
    margin-top: 24px;
  }
  
  .song-artwork{
    margin: 24px 0;
    width: clamp(100px,30vw,300px)
  }

  audio{
    display: block;
    margin: 24px auto 0;
    border-radius: 16px;
    background-color: gray;
    width: clamp(260px,80vw,600px);
  }
  .spin{
    position: relative;
    width:80px;
    height: 80px;
    margin: 0 auto;
    animation: spin 2s infinite forwards;

  }
  .circle{
    display: block;
    width: 16px;
    height: 16px;
    background-color: gray;
    position: absolute;
    border-radius: 16px;
  }
  .circle:nth-child(1){
    top:0;
    left: 50%;
    transform: translateX(-50%);
  }
  .circle:nth-child(2){
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
  }
  .circle:nth-child(3){
    top:50%;
    transform: translatey(-50%);
  }
  .circle:nth-child(4){
    top:50%;
    left: 100%;
    transform: translate(-100%,-50%);
  }
  .moving{
    background-color: black;
    animation: loading 4s linear infinite forwards;
  }

  @keyframes loading{ 
    0%{
      top:0;
      left: 50%;
      transform: translateX(-50%);
    }
    25%{
      top:50%;
      left: 100%;
      transform: translate(-100%,-50%);
    }
    50%{
      top:100%;
      left: 50%;
      transform: translate(-100%,-50%);
    }
    75%{
      top:50%;
      left: 0;
      transform: translateY(-50%);
    }
    100%{
      top:0;
      left: 50%;
      transform: translateX(-50%);
    } 
  }
  @keyframes spin{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>