export const isServer = () => {
  return !(typeof window !=='undefined' && window.document);
}
