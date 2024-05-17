

export const validationsForm = (name, value, error) => {

  

  let errors = { ...error};
  
  let regexText_tipodocumento = /^[A-Za-z]{1,5}$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexNumber = /^.{1,255}$/;
  let regexNumber_documento_double = /^\d{8,12}$/;
  let regexText_nombre_text = /^.{5,50}$/;
  let regexNumber_telefono_double = /^\d{6,10}$/;
  let regexText_procedimiento_text = /^.{5,100}$/;



  if (name==="fechacitadate" || name === "fechacitadatecrearAgenda") {
     if (value==="YYYY-MM-DD" || value ==="") {
      errors[name] = `El campo es obligatorio`;
    } else if (value ==='1900-01-01') {
      errors[name] = `Revisa el formato de la fecha`;
    } else {
      delete errors[name]; // Eliminar el error si es válido
    }
  }
  if (name==="horatime" || name === "horatimecrearAgenda") {
    if (value==="hh:mm aa" || value ==="") {
      errors[name] = `El campo es obligatorio`;
    } else if (value ==='Invalid Date') {
      errors[name] = `Revisa el formato de la hora`;
    } else {
      delete errors[name]; // Eliminar el error si es válido
    }
  // }else if (name.toLowerCase().includes("double")) {
  //   if (!value) {
  //     errors[name] = `El Campo es obligatorio`;
  //   } else if (!regexNumber.test(value)) {
  //     errors[name] = `Solo numeros `;
  //   } else {
  //     delete errors[name]; // Eliminar el error si es válido
  //   }
  }
  // if (name===`correo_email`) {
  //   if (!value) {
  //     errors[name] = `El Campo es obligatorio`;
  //   } else if (!regexEmail.test(value)) {
  //     errors[name] = `Debe ser un correo`;
  //   } else {
  //     delete errors[name]; // Eliminar el error si es válido
  //   }
  // }else if (name.toLowerCase().includes(`text`)) {
    
  //   if (!value) {
  //     errors[name] = `El Campo es obligatorio`;
  //   } else if (!regexText.test(value)) {
  //     errors[name] = `Solo  Campo letras y espacios`;
  //   } else {
  //     delete errors[name]; // Eliminar el error si es válido
  //   }
  // }
  // if (name==="tipodocumento_text") {
  //   if (!value) {
  //     errors[name] = `El Campo es obligatorio`;
  //   } else if (!regexText_tipodocumento.test(value)) {
  //     errors[name] = `Solo letras y maximo 5`;
  //   } else {
  //     delete errors[name]; // Eliminar el error si es válido
  //   }
  // }
  // if (name==="documentodouble") {
  //   if (!value) {
  //     errors[name] = `El Campo es obligatorio`;
  //   } else if (!regexNumber_documento_double.test(value)) {
  //     errors[name] = `Solo numeros  minimo 8 y maximo 12 `;
  //   } else {
  //     delete errors[name]; // Eliminar el error si es válido
  //   }
  // }
  if (name==="nombre_text" || name === "nombre_textcrearAgenda") {
    if (!value) {
      errors[name] = `El Campo es obligatorio`;
    } else if (!regexText_nombre_text.test(value)) {
      errors[name] = `debe tener entre 5 y 50 caracteres`;
    } else {
      delete errors[name]; // Eliminar el error si es válido
    }
  }
  if (name==="telefono_double" || name === "telefono_doublecrearAgenda") {
    if (!value) {
      errors[name] = `El Campo es obligatorio`;
    } else if (!regexNumber_telefono_double.test(value)) {
      errors[name] = `Solo numeros minimo 6 maximo 10`;
    } else {
      delete errors[name]; // Eliminar el error si es válido
    }
  }
  if (name==="procedimiento_text") {
    if (!value) {
      errors[name] = `El Campo es obligatorio`;
    } else if (!regexText_procedimiento_text.test(value)) {
      errors[name] = `Debe tener entre 5 y 100caracteres`;
    } else {
      delete errors[name]; // Eliminar el error si es válido
    }
  }
  if (name==="total_factura") {
    if (!value) {
      errors[name] = `El Campo es obligatorio`;
    } else if (!regexNumber.test(value)) {
      errors[name] = `Deben ser numeros`;
    } else {
      delete errors[name]; // Eliminar el error si es válido
    }
  }

  return errors;
};

export const validationsFormSubmit = (formulario) => {
  const errors = Object.entries(formulario).reduce((acc, [name, value]) => {
    const fieldErrors = validationsForm(name, value);
    return { ...acc, ...fieldErrors };
  }, {});
  return errors;
};
