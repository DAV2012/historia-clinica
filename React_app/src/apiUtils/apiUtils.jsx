// apiUtils.js



const getHeaders = () => {
  const jwtToken = sessionStorage.getItem('jwtToken'); // Obtener el token desde donde corresponda
  //const jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290IiwiaXNzIjoiY2l2ZXJhIiwiaWQiOjMsImV4cCI6MTcxNjQ2NTMwM30.-LV4cCXXAIpAlmSNYkLKXP9x6gSBNSsBFjfczxQdWn0"; // Obtener el token desde donde corresponda
  
  return {
    "Content-Type": "application/json",
    "Authorization": jwtToken,
  };
};


const handleResponse = (response) => {
  if (!response.ok) {
    console.error(
      "Respuesta de solicitud no exitosa:",
      response.status,
      response.statusText
    );
    throw new Error("Respuesta de solicitud no exitosa.");
  }
  return response.json();
};

const handleError = (error) => {
  console.error("Error:", error);
  throw new Error("Error en la solicitud.");
};



export const apiGet = (url) => {
  return fetchData(url, getHeaders());
};

export const apiPut = (url, data) => {
  const headers = getHeaders();
  headers["Content-Type"] = "application/json";

  return fetchData(url, headers, "PUT",JSON.stringify(data));
};

export const apiPost = (url, data) => {
  const headers = getHeaders();
  headers["Content-Type"] = "application/json";

  return fetchData(url, headers, "POST",JSON.stringify(data));
};

export const apiDelete = (url,data) => {

    const headers = getHeaders();
    return fetchData(url, headers, "DELETE",JSON.stringify(data));
};

const fetchData = async (url, headers, method, body) => {
    return await fetch(url, { method, headers, body })
      .then((response) => handleResponse(response))
      .catch((error) => handleError(error));
};

// Otras funciones comunes para otros métodos HTTP...
