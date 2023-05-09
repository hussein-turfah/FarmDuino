const ArduinoSend = async (url, method = "POST", body = "", header = {}) =>{

  let data_to_send;
    const URL = "http://192.168.0.102:80/";
    try {
        const Response = await fetch(URL+url,{
            method : method,
            headers: header,
            body: !!body ? body : null  
        }) || null;
        data_to_send = await Response.json();
        if (!Response.ok){
          throw new Error(data_to_send.message)
        }
    } catch (err) {
      console.log(err.message);
    }
};

export default ArduinoSend;