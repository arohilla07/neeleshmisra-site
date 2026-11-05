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
    var P=D.person, half=Math.ceil(ROOMS.length/2);
    ft.className="foot";
    ft.innerHTML='<div class="wrap"><div class="grid">'+
      '<div><div class="sig">Neelesh Misra</div><p style="margin-top:1rem;color:#bdbdb8;max-width:34ch;font-size:.95rem">Storyteller, lyricist, filmmaker, journalist. Founder of Gaon Connection and The Slow Movement.</p></div>'+
      '<div><h4>The work</h4><ul>'+ROOMS.slice(0,half).map(function(r){return '<li><a href="'+ROOT+r[0]+'/">'+r[1]+'</a></li>'}).join("")+'</ul></div>'+
      '<div><h4>More</h4><ul>'+ROOMS.slice(half).map(function(r){return '<li><a href="'+ROOT+r[0]+'/">'+r[1]+'</a></li>'}).join("")+
        '<li><a href="https://www.gaonconnection.com/">Gaon Connection</a></li><li><a href="https://slowbazaar.com/">Slow Bazaar</a></li></ul></div>'+
      '<div><h4>Write to us</h4><ul><li><a href="'+P.enquiry+'">Business enquiry</a></li><li><a href="'+P.workWithUs+'">Work with us</a></li><li><a href="mailto:'+P.email+'">Email the office</a></li></ul>'+
        '<h4 style="margin-top:1.4rem">Follow</h4><ul>'+Object.keys(P.social).map(function(k){return '<li><a href="'+P.social[k]+'">'+k+'</a></li>'}).join("")+'</ul></div>'+
      '</div><div class="bottom"><span>© 2026 Neelesh Misra · '+esc(P.address)+'</span><span>A Slow Movement website · part of the <a href="https://www.gaonconnection.com/">Gaon Connection</a> family</span></div></div>';
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
