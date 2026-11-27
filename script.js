// Opens and closes the Send money drawer (native <dialog>). Without this
// script the page still works; the drawer just won't open.
(function () {
  document.querySelectorAll('[data-open]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dlg = document.getElementById(btn.getAttribute('data-open'));
      if (dlg && dlg.showModal) dlg.showModal();
    });
  });

  document.querySelectorAll('dialog').forEach(function (dlg) {
    dlg.querySelectorAll('[data-close]').forEach(function (c) {
      c.addEventListener('click', function () { dlg.close(); });
    });
    // Click on the backdrop closes the drawer.
    dlg.addEventListener('click', function (e) {
      if (e.target !== dlg) return;
      var r = dlg.getBoundingClientRect();
      var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) dlg.close();
    });
  });

})();
