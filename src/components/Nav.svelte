<script>
  import NavStore from '../stores/NavStore'


  const back = () =>{
    if($NavStore.song){
      $NavStore.song='';
    }
    window.history.back();
  }
</script>

<nav>
  <svg on:click={back} class="back-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
    <g id="keyboard-backspace">
      <polygon points="459,204 96.9,204 188.7,112.2 153,76.5 0,229.5 153,382.5 188.7,346.8 96.9,255 459,255 		"/>
    </g>
  </svg>
  <p>{$NavStore.artist} {$NavStore.song? `/ ${$NavStore.song}` : '' }</p>

</nav>

<style>

  nav{
    display: flex;
    align-items: center;
    margin-top: 16px;
  }
  .back-icon{
    width:24px;
  }
  .back-icon:hover{
    cursor: pointer;
  }
  nav p{
    margin-left: 16px;
    color: gray;
  }
  

</style>