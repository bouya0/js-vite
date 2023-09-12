import "./styles/main.scss";
// Splide
import "@splidejs/splide/css";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";
import "@splidejs/splide/css/core";

import Splide from "@splidejs/splide";
import ActiveNav from './activeNav';

//もしjs-navがDOMにあればActiveNavインスタンスを作成
//コンストラクタにnavElementキーの値であるjs-nav（ID）を渡す
if(document.getElementById('js-nav') !== null) {
  new ActiveNav({
    navElement: 'js-nav'
  })
}

if(document.getElementsByClassName('splide')[0]){
	new Splide( '.splide' ).mount();
}