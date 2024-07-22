export function assignTextAsId(container) {
    if (!container) {
        return;
    }

    const attributes = ['directory', 'directory-2'];
    attributes.forEach(attribute => {
        const elements = container.querySelectorAll(`[${attribute}]`);

        elements.forEach(element => {
            const textContent = element.textContent.trim();
            element.id = textContent;
        });
    });
}