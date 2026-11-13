/* Shared chrome + page renderers. Each page sets <body class="s-xxx" data-page="xxx" data-root="../">. */
(function(){
  var D = window.NM, B = document.body, ROOT = B.getAttribute("data-root") || "", PAGE = B.getAttribute("data-page");
  var $ = function(s,el){return (el||document).querySelector(s)}, $$ = function(s,el){return Array.prototype.slice.call((el||document).querySelectorAll(s))};
  var esc = function(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
  var ICON = {
    play:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
    eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    film:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
  };
  D.icon = ICON;

  /* Line illustrations, one per room and per Slow Movement arm. 48x48, stroke = currentColor. */
  var A=function(d){return '<svg class="nma" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>'};
  D.art = {
    lyrics:A('<path d="M33 5.5l9.5 9.5L21 36.5 9.5 39l2.5-11.5z"/><path d="M29 9.5l9.5 9.5"/><path d="M12 28l8 8"/><circle cx="19" cy="29" r="2.2"/><path d="M9.5 39L4 44.5"/>'),
    films:A('<rect x="6" y="20" width="36" height="22" rx="1.5"/><path d="M6 20l1.6-8.4 34-6 1.6 8.2"/><path d="M14.5 10.2l4.6 7.6M24 8.5l4.6 7.6M33.5 6.8l4.6 7.6"/><path d="M6 27h36"/><path d="M12 33h14M12 37h9"/>'),
    writer:A('<path d="M14 22V7h20v15"/><path d="M18 12h12M18 16h9"/><rect x="7" y="22" width="34" height="16" rx="3"/><path d="M12 27h1M17 27h1M22 27h1M27 27h1M32 27h1M36 27h0"/><path d="M15 33h18"/><path d="M5 26H3M45 26h-2"/>'),
    radio:A('<rect x="5" y="16" width="38" height="25" rx="4"/><path d="M13 16L31 5"/><circle cx="31" cy="5" r="1.2"/><circle cx="31" cy="29" r="7"/><circle cx="31" cy="29" r="2"/><path d="M10 23h11M10 27h11M10 31h11M10 35h11"/><path d="M38 20h1"/>'),
    live:A('<rect x="18" y="4" width="12" height="21" rx="6"/><path d="M18 12h5M18 17h5"/><path d="M12 20a12 12 0 0 0 24 0"/><path d="M24 32v9M17 43h14"/>'),
    books:A('<path d="M24 12c-5-4-12-5-19-4v29c7-1 14 0 19 4 5-4 12-5 19-4V8c-7-1-14 0-19 4z"/><path d="M24 12v29"/><path d="M9 15c3.5 0 7 .6 10.5 2M9 21c3.5 0 7 .6 10.5 2M9 27c3.5 0 7 .6 10.5 2M28.5 17c3.5-1.4 7-2 10.5-2M28.5 23c3.5-1.4 7-2 10.5-2"/>'),
    "slow-interview":A('<path d="M7 21h13l-1.6 19H8.6z"/><path d="M28 21h13l-1.6 19h-9.8z"/><path d="M8 27h11M29 27h11"/><path d="M11 15c0-2.2 2.2-2.2 2.2-4.4M15.5 15c0-2.2 2.2-2.2 2.2-4.4M32 15c0-2.2 2.2-2.2 2.2-4.4M36.5 15c0-2.2 2.2-2.2 2.2-4.4"/><path d="M3 43h42"/>'),
    journalist:A('<rect x="8" y="8" width="25" height="35" rx="2"/><path d="M12.5 5v6M18.5 5v6M24.5 5v6M30 5v6" /><path d="M13 19h15M13 25h15M13 31h9"/><path d="M38 12l4 4-9 17-4.5 1.5.5-4.7z"/>'),
    about:A('<rect x="5" y="11" width="38" height="27" rx="1.5"/><rect x="32" y="15" width="7.5" height="8.5"/><path d="M24 15v19M9 20h11M9 25h11M9 30h7M28 29h11M28 33h8"/>'),
    gaon:A('<path d="M5 24L24 9l19 15"/><path d="M10 20.5V40h28V20.5"/><path d="M20 40V29h8v11"/><path d="M3 40h42"/><path d="M33 13V7h4v9"/>'),
    content:A('<path d="M6 37h27a8 8 0 0 0 8-8V27"/><path d="M13 37a11 11 0 1 1 20-6"/><path d="M23 30a4.5 4.5 0 1 1 4.5-4.5"/><path d="M41 27l-3-11M41 27l3.5-10"/><circle cx="38" cy="15.5" r="1"/><circle cx="44.6" cy="16" r="1"/>'),
    imprint:A('<path d="M10 6h22l6 6v30H10z"/><path d="M32 6v6h6"/><path d="M15 18h18M15 23h18M15 28h12"/><path d="M28 36c2-2 4 2 6 0"/>'),
    music:A('<circle cx="24" cy="24" r="19"/><circle cx="24" cy="24" r="5"/><circle cx="24" cy="24" r="1"/><path d="M24 11a13 13 0 0 1 13 13M24 15a9 9 0 0 1 9 9"/>'),
    bazaar:A('<path d="M6 21h36l-4 20H10z"/><path d="M14 21c0-8 4.5-12 10-12s10 4 10 12"/><path d="M9 28h30M11 34h26M18 21l1.5 20M30 21l-1.5 20"/>'),
    chai:A('<path d="M12 18h20v8a10 10 0 0 1-20 0z"/><path d="M32 20h3a4 4 0 0 1 0 8h-4"/><path d="M8 40h28"/><path d="M17 12c0-2 2-2 2-4M22 12c0-2 2-2 2-4M27 12c0-2 2-2 2-4"/>'),
    stamp:A('<path d="M8 6h32v36H8z" stroke-dasharray="2 2.4"/><rect x="12" y="10" width="24" height="28"/><circle cx="24" cy="22" r="6"/><path d="M15 34h18"/>')
  };

  var ROOMS = [
    ["lyrics","Lyricist","गीतकार"],["films","Director","निर्देशक"],["writer","Screenwriter","पटकथा"],
    ["radio","Radio","रेडियो"],["live","Live","लाइव"],["books","Author","लेखक"],
    ["slow-interview","The Slow Interview","स्लो इंटरव्यू"],["journalist","Journalist","पत्रकार"],["about","About","परिचय"]
  ];
  D.rooms = ROOMS;

  /* ---- theme ---- */
  function isDark(){var t=document.documentElement.getAttribute("data-theme");if(t)return t==="dark";return matchMedia("(prefers-color-scheme: dark)").matches}
  function themeBtn(){return '<button class="tgl" id="tgl" aria-label="Switch light or dark">'+(isDark()?ICON.sun:ICON.moon)+'</button>'}

  /* ---- universe bar ---- */
  var ub = $("#ubar");
  if (ub) {
    ub.className = "ubar";
    ub.innerHTML = '<div class="wrap"><a class="home" href="'+ROOT+'" aria-label="Neelesh Misra, home"><span class="sig-logo"></span></a><nav aria-label="Neelesh Misra\'s work">'+
      ROOMS.map(function(r){return '<a href="'+ROOT+r[0]+'/"'+(PAGE===r[0]?' aria-current="page"':'')+'>'+r[1]+'</a>'}).join("")+
      '</nav>'+themeBtn()+'</div>';
  }
  document.addEventListener("click",function(e){
    var t=e.target.closest("#tgl"); if(!t)return;
    var next=isDark()?"light":"dark"; document.documentElement.setAttribute("data-theme",next);
    try{localStorage.setItem("nm-theme",next)}catch(_){}
    t.innerHTML=isDark()?ICON.sun:ICON.moon;
  });

  /* ---- footer ---- */
  var ft = $("#foot");
  if (ft) {
    var P=D.person;
    var SOC={YouTube:'<path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4.5 31 31 0 0 0-.4-4.5zM9.7 15V9l5.3 3z" fill="currentColor"/>',
      Instagram:'<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/>',
      X:'<path d="M17.8 3h3.2l-7 8 8.2 10h-6.4l-5-6.3L5 21H1.8l7.5-8.6L1.4 3h6.6l4.5 5.8zm-1.1 16.2h1.8L7.4 4.7H5.5z" fill="currentColor"/>',
      Facebook:'<path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v1.9H8V11.6h2.6V21.5H14V11.6h2.6l.4-3.1z" fill="currentColor"/>',
      LinkedIn:'<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6v5.4h-4v-4.8c0-1.2 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.9h-4z" fill="currentColor"/>'};
    var blurb={lyrics:"33 film songs",films:"Kood, 2026",writer:"Ek Tha Tiger, Kood",radio:"Yaadon Ka Idiot Box",live:"Book a show",books:"Ten books","slow-interview":"Long conversations",journalist:"1995 onward",about:"The whole story"};
    ft.className="foot foot2";
    ft.innerHTML=
      '<div class="wrap">'+
        '<div class="f-top">'+
          '<div class="f-say"><span class="sig-logo f-sig" role="img" aria-label="Neelesh Misra\'s signature"></span><p class="label">Write to Neelesh</p><h2>Have a story,<br>a stage, or an idea?</h2></div>'+
          '<div class="f-ctas">'+
            '<a class="f-cta" href="'+P.enquiry+'"><span class="label">Business</span><b>Brands, films, collaborations</b><span class="go">'+ICON.arrow+'</span></a>'+
            '<a class="f-cta" href="'+ROOT+'live/"><span class="label">Live</span><b>Bring the show to your city</b><span class="go">'+ICON.arrow+'</span></a>'+
            '<a class="f-cta" href="'+P.whatsapp+'"><span class="label">WhatsApp</span><b>Get stories from Neelesh</b><span class="go">'+ICON.arrow+'</span></a>'+
          '</div>'+
        '</div>'+
        '<section class="f-sign" id="signup" aria-label="Get updates">'+
          '<div class="fs-card">'+
            '<div class="fs-stamp" aria-hidden="true"><span>9 PM</span><small>Yaad Sheher</small></div>'+
            '<div class="fs-post" aria-hidden="true"></div>'+
            '<div class="fs-say"><p class="label">Letters from Neelesh</p><h3>New stories, songs and show dates, <i>sent slowly.</i></h3><p class="fs-sub">Once in a while, never in a hurry. Unsubscribe anytime.</p></div>'+
            '<div class="fs-form">'+
              '<form class="fs-mail" id="fsmail" novalidate><label class="fs-lab" for="fsemail">By email</label><div class="fs-row"><input id="fsemail" type="email" name="email" placeholder="you@example.com" autocomplete="email" required><button type="submit" class="fs-go">Subscribe '+ICON.arrow+'</button></div><p class="fs-msg" id="fsmsg" role="status" aria-live="polite"></p></form>'+
              '<a class="fs-wa" href="'+P.whatsapp+'&text='+encodeURIComponent("Hi! I'd like to get updates from Neelesh Misra.")+'" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg><span><b>Get updates on WhatsApp</b><small>Say hi, we will add you to the list</small></span></a>'+
            '</div>'+
          '</div>'+
        '</section>'+
        '<nav class="f-index" aria-label="All of Neelesh\'s work">'+ROOMS.map(function(r,i){return '<a href="'+ROOT+r[0]+'/"><span class="n">0'+(i+1)+'</span><b>'+r[1]+'</b><small>'+blurb[r[0]]+'</small></a>'}).join("")+'<a href="https://www.gaonconnection.com/" class="f-gc"><span class="n">↗</span><b>Gaon Connection</b><small>Founded 2012</small></a></nav>'+
        '<div class="f-mid">'+
          '<div class="f-soc">'+Object.keys(SOC).map(function(k){return '<a href="'+P.social[k]+'" aria-label="'+k+'" title="'+k+'"><svg viewBox="0 0 24 24">'+SOC[k]+'</svg></a>'}).join("")+'</div>'+
          '<div class="f-fam"><span class="label">The Slow Movement</span><a href="https://www.gaonconnection.com/">Gaon Connection</a><a href="'+P.social["Slow Music"]+'">Slow Music</a><a href="https://slowbazaar.com/">Slow Bazaar</a><a href="'+P.workWithUs+'">Work with us</a><span class="f-made">Made slowly in Mumbai</span></div>'+
        '</div>'+
      '</div>'+
      '<div class="f-ground"><a class="f-mark" href="'+ROOT+'about/" aria-label="About Neelesh Misra">'+'Neelesh Misra'.split("").map(function(c,i){return '<span style="--i:'+i+'">'+(c===" "?"&nbsp;":c)+'</span>'}).join("")+'</a></div>'+
      '';
  }

  document.addEventListener("submit",function(e){
    var f=e.target.closest("#fsmail"); if(!f)return; e.preventDefault();
    var i=$("#fsemail"),m=$("#fsmsg"),v=i.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){m.textContent="That email doesn't look right. Try again?";f.classList.add("err");i.focus();return}
    f.classList.remove("err");f.classList.add("done");
    /* Demo: wire this to the newsletter list (HubSpot form) at the WordPress port. */
    m.textContent="Thank you. The first letter is on its way, slowly.";i.value="";
  });

  /* ---- video ---- */
  // Returns a lite YouTube embed when an id is known, otherwise a tile that opens a YouTube search.
  D.video = function(o){
    var cap=o.cap?'<span class="cap">'+esc(o.cap)+'</span>':"";
    if (o.yt) return '<button class="vid" data-yt="'+o.yt+'" style="background-image:url(https://i.ytimg.com/vi/'+o.yt+'/hqdefault.jpg)" aria-label="Play '+esc(o.cap||"video")+'"><span class="play"><span>'+ICON.play+'</span></span>'+cap+'</button>';
    var q=encodeURIComponent(o.q||o.cap||"Neelesh Misra");
    return '<a class="vid ph" href="https://www.youtube.com/results?search_query='+q+'" target="_blank" rel="noopener" style="'+(o.bg?'background-image:url('+o.bg+')':'')+'" aria-label="Watch '+esc(o.cap||"")+' on YouTube"><span class="play"><span>'+ICON.play+'</span></span>'+cap+'</a>';
  };
  D.watchHref = function(yt,q){return yt?"https://www.youtube.com/watch?v="+yt:"https://www.youtube.com/results?search_query="+encodeURIComponent(q)};
  document.addEventListener("click",function(e){
    var v=e.target.closest(".vid[data-yt]"); if(!v)return;
    v.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+v.getAttribute("data-yt")+'?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="Video"></iframe>';
    v.removeAttribute("data-yt");
  });

  /* ---- reveal ---- */
  D.reveal=function(){
    if(!("IntersectionObserver" in window)){$$(".rv").forEach(function(el){el.classList.add("in")});return}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px"});
    $$(".rv:not(.in)").forEach(function(el){io.observe(el)});
  };
  D.esc=esc; D.$=$; D.$$=$$;
  document.addEventListener("DOMContentLoaded",function(){ if(D.page) D.page(); D.reveal(); });
})();
