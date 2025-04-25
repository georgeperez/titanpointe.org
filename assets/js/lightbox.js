function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function isValidImageLink(url) {
    try {
      const u = new URL(url, window.location.href);
      return (u.protocol === 'http:' || u.protocol === 'https:')
        && /\.(jpe?g|png|gif)$/i.test(u.pathname);
    } catch (e) {
      return false;
    }
  }

  function showLightbox(href, title) {
    const lightbox = document.getElementById('lightbox');
    lightbox.innerHTML = '';

    ['close', 'next', 'prev'].forEach(id => {
      const btn = document.createElement('a');
      btn.id = id;
      lightbox.appendChild(btn);
    });

    const imgDiv = document.createElement('div');
    imgDiv.className = 'img';
    imgDiv.title = title;
    imgDiv.style.backgroundImage = `url('${encodeURI(href)}')`;
    imgDiv.style.backgroundPosition = 'center';
    imgDiv.style.backgroundSize = 'contain';
    imgDiv.style.backgroundRepeat = 'no-repeat';

    const imgElem = document.createElement('img');
    imgElem.src = href;
    imgElem.alt = title;
    imgDiv.appendChild(imgElem);
    lightbox.appendChild(imgDiv);

    const caption = document.createElement('span');
    caption.textContent = title;
    lightbox.appendChild(caption);

    lightbox.style.display = 'block';
  }

  document.addEventListener('DOMContentLoaded', function() {
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    document.body.appendChild(lb);

    document.querySelectorAll('a[href]').forEach(el => {
      const url = el.getAttribute('href');
      if (isValidImageLink(url) && !el.classList.contains('no-lightbox')) {
        el.classList.add('lightbox-image');
        const name = url.split('/').pop().split('.')[0];
        el.setAttribute('title', name);
      }
    });

    lb.addEventListener('click', e => {
      if (!['next', 'prev'].includes(e.target.id)) {
        lb.innerHTML = '';
        lb.style.display = 'none';
      }
    });

    document.querySelectorAll('a.lightbox-image').forEach(el => {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const title = escapeHtml(this.getAttribute('title'));
        if (!isValidImageLink(href)) return;
        showLightbox(href, title);
        setGallery(this);
      });
    });

    document.addEventListener('keydown', function(e) {
      const lightbox = document.getElementById('lightbox');
      if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
          lightbox.innerHTML = '';
          lightbox.style.display = 'none';
        } else if (e.key === 'ArrowRight') {
          document.getElementById('next')?.click();
        } else if (e.key === 'ArrowLeft') {
          document.getElementById('prev')?.click();
        }
      }
    });
  });
