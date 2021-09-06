module.exports = {

    async getAllProducts () {
        console.log('Ingresó a ../services => getAllProducts');
        const response = await fetch('http://localhost:8080/api/product/');
        const results = await response.json();
        return results;
    } 
    
}

