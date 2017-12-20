export function kFormatter(num) {
  if (num > 999999) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num > 999) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num;
  }
}
