(function(){
  var b=document.querySelector('.menu-toggle'),n=document.querySelector('nav.main');
  if(!b||!n)return;
  b.addEventListener('click',function(){
    var o=n.classList.toggle('open');
    b.setAttribute('aria-expanded',o?'true':'false');
  });
})();
(function(){
  var chips=document.querySelectorAll('.chip'),imgs=document.querySelectorAll('.gallery img[data-cat]');
  chips.forEach(function(c){
    c.addEventListener('click',function(){
      chips.forEach(function(x){x.classList.remove('active')});
      c.classList.add('active');
      var f=c.getAttribute('data-filter');
      imgs.forEach(function(i){i.hidden=(f!=='all'&&i.getAttribute('data-cat')!==f)});
    });
  });
})();
