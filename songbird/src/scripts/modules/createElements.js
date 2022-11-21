export default function createElement(tagName, defaultClassName) {
    if (!tagName) {
        return null;
    }
    const element = document.createElement(tagName);

    if (defaultClassName) {
        defaultClassName.split(' ').forEach(className => {
            element.classList.add(className);
        });
    }

    return element;
}
