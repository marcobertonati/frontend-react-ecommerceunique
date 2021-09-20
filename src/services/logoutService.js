module.exports = {
    async logoutService() {
      console.log("Ingresó a ../services => logoutService");
      try {
  
        const response = await fetch("http://localhost:8080/api/logout", {
          method: "POST",
          headers: {
            'Content-Type':'application/json'
          }
        })
        // .then(res=>console.log(res))
        // .catch(err=>console.log(err));
  
        const results = response.json();

        return results;

      } catch (error) {
        console.log(error);
      }
    }
  };
  