document.addEventListener('DOMContentLoaded', async () => {
  let refs = {};

  const refsUrl =
    document.documentElement.dataset.refsUrl ||
    '/refs.json';

  try {
    const res = await fetch(refsUrl);
    refs = await res.json();
  } catch (err) {
    console.error('Could not load refs.json', err);
    return;
  }

  const normalizePath = (path) => {
    if (!path) return '';
    return path.replace(/index\.html$/, '').replace(/\/+$/, '') || '/';
  };

  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll('a[href*="#"]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const i = href.indexOf('#');
    if (i === -1) return;

    const rawPath = href.slice(0, i);
    const id = href.slice(i + 1);
    if (!id) return;

    const ref = refs[id];
    if (!ref) return;

    const mode = link.dataset.refmode || 'full';

    if (!link.textContent.trim()) {
      if (mode === 'num') {
        link.textContent = `${ref.number}`;
      } else {
        link.textContent = `${ref.label} ${ref.number}`;
      }
    }

    const targetPath = normalizePath(ref.page);

    if (!rawPath || normalizePath(rawPath) === currentPath) {
      if (targetPath === currentPath) {
        link.setAttribute('href', `#${id}`);
      } else {
        link.setAttribute('href', `${ref.page}#${id}`);
      }
    }
  });
});