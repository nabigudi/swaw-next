export const cleanURL = (url) => {
    url = url || '';
    return url.split('/').reduce((acc, curr) => curr ? curr : acc);
};

export default cleanURL;
