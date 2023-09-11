import "./style.scss";
import "./test.scss";
import ActiveNav from './activeNav';

//もしjs-navがDOMにあればActiveNavインスタンスを作成
//コンストラクタにnavElementキーの値であるjs-nav（ID）を渡す
if(document.getElementById('js-nav') !== null) {
  new ActiveNav({
    navElement: 'js-nav'
  })
}

// Splide
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";
import "@splidejs/splide/css/core";

new Splide(".splide", {
  type: "loop",
}).mount();
