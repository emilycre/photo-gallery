function makeImageTemplate(image) {
    const html = `
    <li>${image.title}
    <img src="${image.url}">
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default makeImageTemplate;