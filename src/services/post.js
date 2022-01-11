const getPosts = () => {
    
    const url = 'http://api.massrelevance.com/MassRelDemo/kindle.json';
    const data = fetch(url);
    return data.then(response => response.json());

}

export default getPosts;