// Open/close the Share, Contact and Send money drawers (native <dialog>),
// and copy the profile link. The page works without this script; the
// drawers just won't open.
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

  var copy = document.getElementById('copy-link');
  if (copy) {
    copy.addEventListener('click', function () {
      var url = copy.getAttribute('data-url');
      var label = document.getElementById('copy-label');
      var status = document.getElementById('copy-status');
      var done = function () {
        label.textContent = 'Copied!';
        status.textContent = 'Link copied to clipboard';
        setTimeout(function () { label.textContent = 'Copy link'; status.textContent = ''; }, 2000);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () {});
    });
  }
})();
