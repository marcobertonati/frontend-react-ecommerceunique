module.exports = {

    async getProductByCode (code) {
        console.log('Ingresó a ../services => getProductByCode');
        console.log(code);
        const response = await fetch(`http://localhost:8080/api/product/code/${code}`)
        const results = await response.json();
        return results;
    } 
    
}