module.exports = {
    async loginService(data) {
      console.log("Ingresó a ../services => loginService");
      const dataBody = data;
      try {
  
        const response = await fetch("http://localhost:8080/api/signup", {
          method: "POST",
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(dataBody),
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
  