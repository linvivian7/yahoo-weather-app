const _getLoader = () => document.getElementsByClassName('loader-wrapper')[0];

export const hideLoader = () => {
    let loader = _getLoader();

    if (loader) {
        loader.style.display = 'none';
    }
};
