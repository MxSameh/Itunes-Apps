<script>
  import {page} from '$app/stores'
  import {goto} from '$app/navigation'
  import {onMount} from 'svelte'
  import NavStore from '../../stores/NavStore'

  let artist = $page.params.artist;
  let songResults=[];
  
  onMount( async() => {
    const res = await fetch(`https://itunes.apple.com/search?term=${artist}&entity=song`);
    const data = await res.json();
    songResults = data.results;
  })
  
  const viewSong = song => {
    goto(`/${artist}/${song.trackId}`)
    $NavStore.song= song.trackName;
  }

</script>

<section>
  <h2 class="artist">{artist}</h2>
  <div class="songs-list">
    {#each songResults as song}
      <div class="song" on:click={()=>viewSong(song)}>
        <img src={song.artworkUrl100} alt="">
        <div class="song-details">
          <p class="song-name">{ song.trackName }</p>
          <p class="song-artist">{ song.artistName }</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .artist{
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 40px;
  }
  .songs-list{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    gap: 16px;
  }
  .song{
    display: flex;
    margin-bottom: 16px;
    background-color: #e5e5e5;
    padding: 8px;
    border-radius: 8px;
  }
  .song:hover{
    cursor: pointer;
  }
  .song img{
    margin-right: 16px;
  }

  .song-name{
    font-weight: bold;
    margin-bottom: 8px;
  }

</style>