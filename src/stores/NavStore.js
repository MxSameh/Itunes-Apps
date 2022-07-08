import { writable } from "svelte/store";
import { browser } from '$app/env';

let nav;

if( browser && localStorage.getItem('nav') )
{
  nav = JSON.parse( localStorage.getItem('nav') )
}else if(browser){
  nav = {
    artist:'',
    song:''
  } 
  localStorage.setItem('nav',JSON.stringify(nav))
}

const NavStore = writable( browser && nav );

NavStore.subscribe(data => {
  if(browser){
    localStorage.setItem('nav',JSON.stringify(nav))
  }
})


export default NavStore