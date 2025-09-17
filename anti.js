&lt;!-- ads-block --&gt;
&lt;script&gt;
async function detectAdBlock() {
  let adBlockEnabled = false
  const googleAdUrl = &#039;https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js&#039;
  try {
    await fetch(new Request(googleAdUrl)).catch(_ =&gt; adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true
  } finally {
    console.log(&#039;AdBlock Enabled: &#039;+adBlockEnabled);
    if(adBlockEnabled==true)
      {
var loadingAdsblock = document.createElement(&#039;div&#039;);
loadingAdsblock.id = &#039;loadingScreen&#039;;
loadingAdsblock.style.position = &#039;fixed&#039;;
loadingAdsblock.style.top = &#039;0&#039;;
loadingAdsblock.style.left = &#039;0&#039;;
loadingAdsblock.style.width = &#039;100%&#039;;
loadingAdsblock.style.height = &#039;100%&#039;;
loadingAdsblock.style.background = &#039;rgba(0, 0, 0, 1)&#039;;
loadingAdsblock.style.color = &#039;white&#039;;
loadingAdsblock.style.display = &#039;flex&#039;;
loadingAdsblock.style.justifyContent = &#039;center&#039;;
loadingAdsblock.style.alignItems = &#039;center&#039;;
loadingAdsblock.style.fontSize = &#039;2em&#039;;
loadingAdsblock.style.zIndex = &#039;9999&#039;;
loadingAdsblock.innerHTML = &#039;We appreciate your support! Please disable your ad blocker to enjoy all of our content.&#039;;
            document.body.appendChild(loadingAdsblock);
      }else{
      }
  }
}
detectAdBlock();
&lt;/script&gt;
&lt;!-- end ads-block--&gt;


<!-- Histats.com&#160;START&#160;(aync)-->
  <script type='text/javascript'>var _Hasync= _Hasync|| [];
  _Hasync.push([&#39;Histats.start&#39;, &#39;1,4922580,4,0,0,0,00010000&#39;]);
  _Hasync.push([&#39;Histats.fasi&#39;, &#39;1&#39;]);
  _Hasync.push([&#39;Histats.track_hits&#39;, &#39;&#39;]);
  (function() {
  var hs = document.createElement(&#39;script&#39;); hs.type = &#39;text/javascript&#39;; hs.async = true;
  hs.src = (&#39;//s10.histats.com/js15_as.js&#39;);
  (document.getElementsByTagName(&#39;head&#39;)[0] || document.getElementsByTagName(&#39;body&#39;)[0]).appendChild(hs);
  })();</script>
  <noscript><a href='/' target='_blank'><img alt='' border='0' src='//sstatic1.histats.com/0.gif?4922580&amp;101'/></a></noscript>
  <!-- Histats.com&#160;END&#160;-->  
