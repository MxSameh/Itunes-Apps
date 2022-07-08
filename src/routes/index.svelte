<script>
  // IMPORTS
  import {goto} from '$app/navigation'
  import NavStore from '../stores/NavStore'

  // VARIABLES
  let artist = '';

  // FUNCTIONS
  const search = () => {
    if(artist.trim()){
      goto(`/${artist}/searchResults`)
      NavStore.update( data => {
        data.artist=artist;
        return data
      })
    }else{
      console.log( 'no artist' );
    }
  }

  const handleEnter = (e) => {
    if(e.key === 'Enter'){
      search();
    }
  }

</script>

  <main>
    <div>
      <h1 class="title">Search an artist </h1>
      <div class="search">
        <input class="search-input" type="text" bind:value={artist} placeholder="Enter Artist Name" on:keypress={handleEnter}>
        <button class="search-btn" on:click={search}>Search</button>
      </div>
    </div>
  </main>

<style>

  .title{
    color: #333;
    text-align: center;
    margin-bottom: 40px;
  }
  .search{
    text-align: center;
  }
  .search-input{
    padding: 12px 16px;
    border: 1px solid gray;
    border-radius: 6px;
    outline: none;
    width: clamp(200px,100%,400px);
    margin-bottom: 24px;
  }
  .search-btn{
    padding: 8px 32px;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 6px;
    display: block;
    text-align: center;
    margin: 0 auto;
    background-color: #333;
    color: white;
  }
  .search-btn:hover{
    cursor: pointer;
  }


</style>