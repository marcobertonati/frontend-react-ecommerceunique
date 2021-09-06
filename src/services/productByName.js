module.exports = {

    async getProductByTitle (title) {
        console.log('Ingresó a ../services => getProductByTitle');
        console.log(title);
        const response = await fetch(`http://localhost:8080/api/product/title/${title}`)
        const results = await response.json();
        return results;
    } 
    
}
