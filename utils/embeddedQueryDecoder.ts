export const decodeEmbedded = (embed: string): string[] => {
  if (!embed) return [];
  const embedArray: string[] = embed.split(',');
  return embedArray;
}