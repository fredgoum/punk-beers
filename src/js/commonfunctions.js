// transforms text to lowercase
function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[àáâãäå]/g, 'a')
    .replace(/æ/g, 'ae')
    .replace(/ç/g, 'c')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/ñ/g, 'n')
    .replace(/[òóôõö]/g, 'o')
    .replace(/œ/g, 'oe')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ýÿ]/g, 'y')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

window.commonfunctions = {
  slugify,
};

export default window.commonfunctions;
