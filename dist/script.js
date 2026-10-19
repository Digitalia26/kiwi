const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Ouvrir le menu');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const track=document.querySelector('.partner-track');
document.querySelector('.partner-next').addEventListener('click',()=>{if(track.scrollLeft+track.clientWidth>=track.scrollWidth-4)track.scrollTo({left:0});else track.scrollBy({left:track.clientWidth*.75});});
document.querySelector('.partner-prev').addEventListener('click',()=>{if(track.scrollLeft<=4)track.scrollTo({left:track.scrollWidth});else track.scrollBy({left:-track.clientWidth*.75});});
document.querySelectorAll('.news-image img').forEach(img=>{img.addEventListener('error',()=>{img.hidden=true;img.style.display='none';});});
const dialog=document.querySelector('#video-dialog');
const content=document.querySelector('#video-content');
document.querySelector('#video-open').addEventListener('click',()=>{content.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/OOlYRzlHesQ?autoplay=1" title="KIWI ORGANISATION présentation" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';dialog.showModal();});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{content.innerHTML='';});
