module.exports = {

    async cartListService () {
        console.log('Ingresó a ../services => cartListService');
        const response = await fetch('http://localhost:8080/api/cart');
        const results = await response.json();
        return results;
    } 
    
}

