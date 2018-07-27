function createMarkup(data) {
  return data
    .map(
      album => `
    <div class="list-item">
      <p>Diego</p>
    </div>`,
    )
    .join("");
}

export default function renderAlbums(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}
