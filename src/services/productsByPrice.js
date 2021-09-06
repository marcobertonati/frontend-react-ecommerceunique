module.exports = {

    async getProductByPrice (minprice,maxprice) {
        console.log('Ingresó a ../services => getProductByPrice');

        const response = await fetch(`http://localhost:8080/api/product/price/search?pricemin=${minprice}&pricemax=${maxprice}`)
        const results = await response.json();
        return results;
    } 
    
}