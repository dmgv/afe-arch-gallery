export default function renderHeader(data, element) {
  const el = element;
  const markup = `
    <div class="header">
      <h1>Arch Gallery</h1>
      <p>${data} está logado</p>
      <button class="deslogar">Deslogar</button>
    </div>
  `;

  // const markup = data
  //   .map(
  //     header => `
  //   <div className="header">
  //     <ul>
  //       <li>${header.name}</li>
  //     </ul>
  //   </div>
  // `,
  //   )
  //   .join("");
  el.innerHTML = markup;
}
