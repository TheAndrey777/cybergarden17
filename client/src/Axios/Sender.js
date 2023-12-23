import "./axios.min.js";

const Sender = {
  sendPost(message) {
    console.log("send", message);
    axios
      .post("/" + message.adress, message.message || {}, message.config || {})
      .then((response) => {
        if (message.f) message.f(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  sendGet(message) {
    console.log("send", message);
    axios
      .get("/" + message.adress, message.config || {}, message.message || {})
      .then((response) => {
        if (message.f) message.f(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default Sender;
