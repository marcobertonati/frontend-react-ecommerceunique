module.exports = {
    async checkLoginService() {
      console.log("Ingresó a ../services => checkLoginService");
      /**FORZANDO LOGIN */
      const dataBody = "marco";
      try {
  
        const response = await fetch("http://localhost:8080/api/login")
        // .then(res=>console.log(res))
        // .catch(err=>console.log(err));
  
        const results = response.json();

        return results;

      } catch (error) {
        console.log(error);
      }
    }
  };