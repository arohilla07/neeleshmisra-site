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
    ub.innerHTML = '<div class="wrap"><a class="home" href="'+ROOT+'"><b>Neelesh Misra</b></a><nav aria-label="Neelesh Misra\'s work">'+
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
          '<div class="f-say"><p class="label">Write to Neelesh</p><h2>Have a story,<br>a stage, or an idea?</h2></div>'+
          '<div class="f-ctas">'+
            '<a class="f-cta" href="'+P.enquiry+'"><span class="label">Business</span><b>Brands, films, collaborations</b><span class="go">'+ICON.arrow+'</span></a>'+
            '<a class="f-cta" href="'+ROOT+'live/"><span class="label">Live</span><b>Bring the show to your city</b><span class="go">'+ICON.arrow+'</span></a>'+
            '<a class="f-cta" href="'+P.whatsapp+'"><span class="label">WhatsApp</span><b>Get stories from Neelesh</b><span class="go">'+ICON.arrow+'</span></a>'+
          '</div>'+
        '</div>'+
        '<nav class="f-index" aria-label="All of Neelesh\'s work">'+ROOMS.map(function(r,i){return '<a href="'+ROOT+r[0]+'/"><span class="n">0'+(i+1)+'</span><b>'+r[1]+'</b><small>'+blurb[r[0]]+'</small></a>'}).join("")+'<a href="https://www.gaonconnection.com/" class="f-gc"><span class="n">↗</span><b>Gaon Connection</b><small>Founded 2012</small></a></nav>'+
        '<div class="f-mid">'+
          '<div class="f-soc">'+Object.keys(SOC).map(function(k){return '<a href="'+P.social[k]+'" aria-label="'+k+'" title="'+k+'"><svg viewBox="0 0 24 24">'+SOC[k]+'</svg></a>'}).join("")+'</div>'+
          '<div class="f-fam"><span class="label">The Slow Movement</span><a href="https://www.gaonconnection.com/">Gaon Connection</a><a href="'+P.social["Slow Music"]+'">Slow Music</a><a href="https://slowbazaar.com/">Slow Bazaar</a><a href="'+P.workWithUs+'">Work with us</a><a href="mailto:'+P.email+'">'+P.email+'</a></div>'+
        '</div>'+
      '</div>'+
      '<div class="f-mark" aria-hidden="true">Neelesh Misra</div>'+
      '<div class="wrap f-bottom"><span>© 2026 Neelesh Misra · '+esc(P.address)+'</span><span>Made slowly, in Lucknow · <a href="'+ROOT+'about/">About</a></span></div>';
  }

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
