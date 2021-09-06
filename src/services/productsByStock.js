module.exports = {

    async getProductByStock (minstock,maxstock) {
        console.log('Ingresó a ../services => getProductByStock');

        const response = await fetch(`http://localhost:8080/api/product/stock/search?stockmin=${minstock}&stockmax=${maxstock}`)
        const results = await response.json();
        return results;
    } 
    
}