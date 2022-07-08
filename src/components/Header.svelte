<script>
  import NavStore from "../stores/NavStore";
  const goHome = () => {
    $NavStore.artist = '' ;
    $NavStore.song = '' ;
  }
</script>

<header>
  <a href="/" on:click={goHome}>
    <img src='/apple-logo.png' alt="apple logo" class="logo">
  </a>
</header>

<style>
  header{
    width: 100%;
    padding: 16px;
    border-bottom: 1px solid #a0a0a0;
    text-align: center;
  }
  .logo{
    width: 40px;
  }
  
  
</style>