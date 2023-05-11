const ArduinoSend = async (url, method = "GET", body = "", header = {}) =>{

  const URL = "http://192.168.0.112:80/";
  try {
      const Response =  fetch(URL+url,{
          method : method,
          headers: header,
          body: !!body ? body : null  
      }) || null;
  } catch (err) {
    console.log(err.message);
  }
}

export default ArduinoSend;