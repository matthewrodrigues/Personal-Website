const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

const spotifyContainer = document.getElementById('spotify-embed');
if (spotifyContainer) {
  const playlists = [
    '7dJDrDhaUrRfuy43pKHZDa',
    '79KjWG6tWvv1HyN0NuxElN',
    '2vRv1DpKBcnSaeoavP4GBC',
    '2WOe1yK87RpzCo9ZEcvBst',
  ];
  const id = playlists[Math.floor(Math.random() * playlists.length)];
  const iframe = document.createElement('iframe');
  iframe.src = `https://open.spotify.com/embed/playlist/${id}`;
  iframe.width = '100%';
  iframe.height = '352';
  iframe.frameBorder = '0';
  iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
  iframe.loading = 'lazy';
  iframe.style.borderRadius = '12px';
  iframe.title = 'Spotify Playlist';
  spotifyContainer.appendChild(iframe);
}
