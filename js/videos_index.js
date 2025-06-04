window.addEventListener('DOMContentLoaded', () => {
  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');

  // Inicialmente: video1 visible, video2 opaco y pausado
  video1.style.opacity = "1";
  video2.style.opacity = "0.4";
  video2.pause();

  function playFirst() {
    video1.currentTime = 0;
    video2.pause();
    video1.play();
    video1.style.opacity = "1";
    video2.style.opacity = "0.4";
  }

  function playSecond() {
    video2.currentTime = 0;
    video1.pause();
    video2.play();
    video1.style.opacity = "0.4";
    video2.style.opacity = "1";
  }

  video1.addEventListener('ended', playSecond);
  video2.addEventListener('ended', playFirst);

  // Iniciar el ciclo
  playFirst();
});