export const clampText = (text, length = 10) => {
  if (text && text.length > length) {
    return `${text
      .split(' ')
      .slice(0, length - 1)
      .join(' ')}. . .`;
  }
  return text;
};
