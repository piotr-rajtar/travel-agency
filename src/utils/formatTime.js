export const formatTime = time => {
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60 % 60);
  const hours = Math.floor(time / 3600);

  const result = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

  if (time && (isNaN(time) === false) && (time > 0)) {
    return result;
  } else {
    return null;
  }
};