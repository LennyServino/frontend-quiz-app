export function handleLightMode() {
  // Set a class to the html tag
  document.documentElement.classList.toggle('light-mode');
}

export function listenModeChange(darkModeBtn) {
  if (!darkModeBtn) return;
  darkModeBtn.addEventListener('change', handleLightMode);
}
