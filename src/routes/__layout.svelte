<script>
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
  import '../styles/global.css'
</script>

<Header/>
<div class="container">
  <slot/>
</div>
<Footer/>




<style>
  
</style>