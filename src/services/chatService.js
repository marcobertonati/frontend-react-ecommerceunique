module.exports = {
  async allMessagesChat() {
    console.log("Ingresó a ../services => chatService => allMessagesChat");

    try {
      const response = await fetch("http://localhost:8080/api/message/list");
      const result = response.json();
      console.log('Esto trae results');
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  async postMessageChat(msgChat) {
    console.log("Ingresó a ../services => chatService => postMessageChat");
    try {
      const response = await fetch(
        "http://localhost:8080/api/message/create"
      , {
        method: "POST",
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(msgChat)
      });
      const result = response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
