export const generateReadingTime = (content) => {
  const extractText = (node) => {
    let text = '';

    if (node.type === 'text' && node.text) {
      text += node.text;
    }

    if (node.content && Array.isArray(node.content)) {
      for (const child of node.content) {
        text += ' ' + extractText(child);
      }
    }

    return text;
  };

  const plainText = extractText(content);
  const wordCount = plainText.trim().split(/\s+/).length;
  const wordsPerMinute = 200;

  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime || 1; // minimal 1 menit
};
