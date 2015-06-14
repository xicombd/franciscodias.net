(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root === 'undefined' || root !== Object(root)) {
        throw new Error('templatizer: window does not exist or is not an object');
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function e(e){return null!=e&&""!==e}function n(t){return(Array.isArray(t)?t.map(n):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(e).join(" ")}var t={};return t.merge=function r(n,t){if(1===arguments.length){for(var a=n[0],i=1;i<n.length;i++)a=r(a,n[i]);return a}var o=n["class"],s=t["class"];(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),n["class"]=o.concat(s).filter(e));for(var l in t)"class"!=l&&(n[l]=t[l]);return n},t.joinClasses=n,t.cls=function(e,r){for(var a=[],i=0;i<e.length;i++)a.push(r&&r[i]?t.escape(n([e[i]])):n(e[i]));var o=n(a);return o.length?' class="'+o+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,a){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(a?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,r){var a=[],i=Object.keys(e);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],l=e[s];"class"==s?(l=n(l))&&a.push(" "+s+'="'+l+'"'):a.push(t.attr(s,l,!1,r))}return a.join("")},t.escape=function(e){var n=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+e?e:n},t.rethrow=function a(e,n,t,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||r))throw e.message+=" on line "+t,e;try{r=r||require("fs").readFileSync(n,"utf8")}catch(i){a(e,null,t)}var o=3,s=r.split("\n"),l=Math.max(t-o,0),f=Math.min(s.length,t+o),o=s.slice(l,f).map(function(e,n){var r=n+l+1;return(r==t?"  > ":"    ")+r+"| "+e}).join("\n");throw e.path=n,e.message=(n||"Jade")+":"+t+"\n"+o+"\n\n"+e.message,e},t}();

    var templatizer = {};
    templatizer["pages"] = {};
    templatizer["views"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><main data-hook="page-container"></main></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/><link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/><link href="//fonts.googleapis.com/css?family=Roboto:100,300,700" rel="stylesheet" type="text/css"/>';
    };

    // pages/home.jade compiled template
    templatizer["pages"]["home"] = function tmpl_pages_home() {
        return '<section class="page home"><div class="section section-header"><div class="column-group ink-grid"><div class="all-40 medium-30 small-100 tiny-100 image-column"><img src="/static/header.jpg"/></div><div class="all-60 medium-70 small-100 tiny-100 text-column"><h1>Francisco Baio Dias</h1><p>I\'m a Computer Engineering student at <a target=\'_blank\' href=\'//tecnico.pt\'>IST</a> and \nnode developer at <a target=\'_blank\' href=\'//muzzley.com\'>Muzzley</a>!</p><p>Follow me on <a target=\'_blank\' href=\'//twitter.com/xicombd\'>Twitter</a>,\nhave a look at my <a target=\'_blank\' href=\'//github.com/xicombd\'>GitHub</a>\nand checkout some of my projects bellow.</p><a target="_blank" href="//github.com/xicombd" class="social-icon"><i class="social-icon fa fa-github"></i></a><a target="_blank" href="//twitter.com/xicombd" class="social-icon"><i class="social-icon fa fa-twitter"></i></a><a target="_blank" href="//linkedin.com/in/xicombd" class="social-icon"><i class="social-icon fa fa-linkedin"></i></a><a target="_blank" href="//fb.com/xicombd" class="social-icon"><i class="social-icon fa fa-facebook"></i></a><a target="_blank" href="//youtube.com/xicombd" class="social-icon"><i class="social-icon fa fa-youtube"></i></a><a target="_blank" href="//instagram.com/xicombd" class="social-icon"><i class="social-icon fa fa-instagram"></i></a></div></div></div><div class="section section-muzzley"><div class="column-group ink-grid"><div class="all-100 image-column"><a href="//muzzley.com" target="_blank"><img src="/static/muzzley.svg" class="logo"/></a></div><div class="all-100 text-column"><p>Muzzley is an intelligent platform for IoT consumer world. It\'s a single entry point that avoids the consumer\n to have hundreds of different apps to interact with hundreds of different devices.<br/>When I started, I worked mainly on the integration of those devices, doing reverse engineering of the APIs when needed, and implementing their managers in Node.\n Now, I mainly work on our API, but I\'ve also played with the website and core.</p><div class="links"><a href="//muzzley.com" target="_blank"><i class="fa fa-globe">&nbspWebsite</i></a><a href="//github.com/muzzley" target="_blank"><i class="fa fa-github">&nbspGitHub</i></a></div><div class="skills"><span>Javascript</span><span>NodeJS</span><span>NoSQL</span><span>MongoDB</span><span>Redis</span><span>Hapi</span><span>Internet of Things</span></div></div></div></div><div class="section section-sinfo"><div class="column-group ink-grid"><div class="all-100 image-column"><a href="//sinfo.org" target="_blank"><img src="/static/sinfo.png" class="logo"/></a></div><div class="all-100 text-column"><p>SINFO is considered to be one of the biggest student organised events in the world, and is probably the biggest tech conference in Portugal.<br/>I was part of the organisation for the 21st and 22nd editions, leading the dev team on the second year, \n where we’ve created <a href="http://github.com/sinfo/eventdeck">EventDeck</a>, a tool for managing events and conferences \n which let us contact +300 speakers and +600 companies/sponsors, using +1700 communications and +2500 comments.<br/> We\'ve also developed an service called <a href="http://github.com/sinfo/cannon-api">Cannon</a> which provided everything \n related to our +900 registered attendees, including tickets, CVs uploads, surveys and an achievement system based on QR codes.<br/> The <a href="http://app.sinfo.org/">public webapp</a> that fully supported the use of the EventDeck public API and Cannon API \n is also available on <a href="https://github.com/sinfo/sinfo-webapp">Github</a>.<br/>Notice that all of this was achieved in under 11 months, by our team of unexperienced, yet highly motivated friends, on our \n free time after University and work. We\'ve also developed a lot of npm modules which can be found on the \n <a href="https://github.com/sinfo">SINFO Github page</a>.<br/>We\'ve had amazing speakers as the founders of Github, Reddit, Counter Strike and The Pirate Bay and much more!</p><div class="links"><a href="//sinfo.org" target="_blank"><i class="fa fa-globe">&nbspWebsite</i></a><a href="//app.sinfo.org" target="_blank"><i class="fa fa-bolt">&nbspWebapp</i></a><a href="//github.com/sinfo" target="_blank"><i class="fa fa-github">&nbspGitHub</i></a></div><div class="skills"><span>Javascript</span><span>NodeJS</span><span>MongoDB</span><span>Hapi</span><span>AmpersandJS</span><span>AngularJS</span><span>Browserify</span><span>HTML5</span><span>CSS</span><span>Event Management</span></div></div></div></div><div class="section section-bravebunny"><div class="column-group ink-grid"><div class="all-100 image-column"><a href="//bravebunny.co" target="_blank"><img src="/static/bravebunny.png" class="logo"/></a></div><div class="all-100 text-column"><p>We\'re just a group of friends passionate about making video games who don\'t really feel like spending a lot of time writing a description.\nGive the games a try and follow us for updates :)</p><div class="links"><a href="//bravebunny.co" target="_blank"><i class="fa fa-globe">&nbspWebsite</i></a><a href="//twitter.com/BraveBunnyGames" target="_blank"><i class="fa fa-twitter">&nbspTwitter</i></a><a href="//github.com/bravebunny" target="_blank"><i class="fa fa-github">&nbspGitHub</i></a></div><div class="skills"><span>HTML5</span><span>Games</span><span>Phaser</span><span>Socket.io</span><span>WebRTC</span></div></div></div></div><div class="section section-tecnico"><div class="column-group ink-grid"><div class="all-100 image-column"><a href="//tecnico.pt" target="_blank"><img src="/static/tecnico.png" class="logo"/></a></div><div class="all-100 text-column"><p>I\'m currently pursuing a Degree (BSc) in Information Systems and Computer Engineering at Instituto Superior Técnico,\n studying subjects as Introduction to Algorithms and Data Structures, Object-Oriented Programming, Computer Architecture, Digital Systems, Operating Systems, etc...</p><div class="links"><a href="//tecnico.pt" target="_blank"><i class="fa fa-globe">&nbspWebsite</i></a></div><div class="skills"><span>Python</span><span>Java</span><span>C</span><span>C++</span><span>SQL</span><span>Algorithms</span><span>OOP</span><span>Computer Networks</span></div></div></div></div><div class="section section-livebots"><div class="column-group ink-grid"><div class="all-100 image-column"><a href="//livebots.cc" target="_blank"><img src="/static/livebots.png" class="logo"/></a></div><div class="all-100 text-column"><p>This is an old project I made with Ricardo Lopes, it was a website were anyone could with robots from all around the world.</p><div class="links"><a href="//livebots.cc" target="_blank"><i class="fa fa-globe">&nbspWebsite</i></a><a href="//www.youtube.com/watch?v=5JoARkj7XMA" target="_blank"><i class="fa fa-youtube">&nbspVideo</i></a><a href="http://www.raspberrypi.org/livebots/" target="_blank"><i class="fa fa-newspaper-o">&nbspRaspberry Pi Blog</i></a><a href="http://www.wired.com/2013/03/pi-day-raspberry-pi-projects/" target="_blank"><i class="fa fa-newspaper-o">&nbspWired</i></a></div><div class="skills"><span>Robots</span><span>ASP.NET</span><span>Web Development</span></div></div></div></div><div class="section section-robots"><div class="column-group ink-grid"><div class="all-100 image-column"><h1>Robots</h1><p>Over the years I\'ve been building robots for fun. Which one is your favorite?</p></div><div class="all-100 text-column"><div class="skills"><span>Arduino</span><span>Electronics</span><span>Soldering</span><span>Computer Vision</span><span>3D Modeling</span><span>CNC</span><span>DIY</span></div><div data-hook="robots-container" class="robots"></div></div></div></div><div class="section section-games"><div class="column-group ink-grid"><div class="all-100 image-column"><h1>Games</h1></div><div class="all-100 text-column"><p>Sometimes I like to try to make games, this is what comes out.</p><div class="skills"><span>HTML5</span><span>Games</span><span>Phaser</span><span>Processing.js</span><span>Socket.io</span><span>WebRTC</span></div><div data-hook="games-container" class="games"></div></div></div></div><div class="section section-contact"><div class="column-group ink-grid"><div class="all-100 image-column"><h1>Contact me!</h1></div><div itemtype="http://schema.org/Person" class="all-100 text-column"><p>I would love to hear from you. If you want, contact me using one of the following options:</p><div class="contacts"><div><span class="fa fa-phone"></span><span itemprop="telephone">+351 968591564</span></div><div><span class="fa fa-envelope"></span><a href="mailto:francisco@baiodias.com" itemprop="email">francisco@baiodias.com</a></div></div><meta itemprop="name" name="name" content="Francisco Baio Dias"/><meta itemprop="url" name="url" content="http://franciscodias.net"/><meta itemprop="homeLocation" name="homeLocation" content="Lisbon, Portugal"/></div></div></div></section>';
    };

    // views/card.jade compiled template
    templatizer["views"]["card"] = function tmpl_views_card() {
        return '<a data-hook="action-view" class="card"><img data-hook="img"/><div class="name"><span data-hook="name"></span></div></a>';
    };

    // views/cards.jade compiled template
    templatizer["views"]["cards"] = function tmpl_views_cards() {
        return '<div class="all-100"><div data-hook="cards-container" class="cards"></div></div>';
    };

    return templatizer;
}));