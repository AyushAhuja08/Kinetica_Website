function switchFeatured(btn, src, label) {
      document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const img = document.getElementById('featured-img');
      img.style.opacity = '0';
      setTimeout(() => { img.src = src; img.alt = label; img.style.opacity = '1'; }, 180);
    }