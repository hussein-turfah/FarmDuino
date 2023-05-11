const ArduinoSend = async (url, method = "POST", body = "", header = {}) =>{

  const URL = "http://192.168.0.111:80/";
  try {
      const Response = await fetch(URL+url,{
          method : method,
          headers: header,
          body: !!body ? body : null  
      }) || null;
  } catch (err) {
    console.log(err.message);
  }
}

export default ArduinoSend;