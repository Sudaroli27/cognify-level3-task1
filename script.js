document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const overlay = document.querySelector('.overlay');
    const overlayImage = document.getElementById('overlayImage');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const imageSrc = thumbnail.querySelector('img').getAttribute('src');
        overlayImage.setAttribute('src', imageSrc);
        overlay.style.display = 'block';
      });
    });
    overlay.addEventListener('click', function() {
      overlay.style.display = 'none';
    });
  });



  