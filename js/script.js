'use strict'

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const overlay = document.querySelector('.overlay');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
  });

}

{
  const top = document.getElementById('top');

  top.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}



{
 const apies = document.querySelectorAll('.api');
  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
  
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });

  }

  const options = {
    threshold: 0.5,
  }

  const observer = new IntersectionObserver(callback, options);

  apies.forEach(api => {
    observer.observe(api);
  });

 
}
