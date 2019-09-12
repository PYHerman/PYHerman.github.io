var OriginTitle = document.title;
 var titleTime;

 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/TEP.png");
         document.title = '→ ❤坤坤❤热舞中❤ ←';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/favicon.png");
         document.title = '(｡･ω･｡)嘻嘻,上当了吧 ' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });