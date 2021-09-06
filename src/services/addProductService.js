module.exports = {
  async addProduct(data) {

    console.log("Ingresó a ../services => addProduct");

    const dataBody = data;
    console.log("Esto ingresa en dataBody");
    console.log(dataBody);

    try {
      const response = await fetch("http://localhost:8080/api/product/create", {
        method: "post",
        body: dataBody,
      }).then((response) => response.JSON())
      .catch((err) => console.log(err));

      const results = await response.json();
      console.log(results);
      return results;
    } catch (error) {
      console.log(error);
    }
  },
};
