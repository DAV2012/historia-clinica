import dayjs from "dayjs";

const historiaClinica = {
  informacionPersonal: {

    documento_double: {
 
      label: "Documento",
      typeValueInput: "text",
      typefieldInput: "AsynchronousField",
      value: "documentodouble",
      inicialvalue: "",
      option: [],

    },
    tipodocumento_text: {
      label: "Tipo documento",
      typeValueInput: "text",
      typefieldInput: "autoColplete",
      value: "tipodocumento_text",
      inicialvalue: "",
      option: ["CC", "TI", "CE", "PSP"],
    },
    nombre_text: {
      label: "Nombre Completo",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "nombre_text",
      inicialvalue: "",

    },
    telefono_double: {
      label: "Telefono",
      typeValueInput: "number",
      typefieldInput: "telefono",
      value: "telefono_double",
      inicialvalue: "",

    },
    correo_email: {
      label: "Correo",
      typeValueInput: "text",
      typefieldInput: "email",
      value: "correo_email",
      inicialvalue: "",

    },
    procedimiento: {
      label: "Procedimiento",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "procedimiento",
      inicialvalue: "",

    },
    sexo_text: {
      label: "Sexo",
      typeValueInput: "text",
      typefieldInput: "autoColplete",
      value: "sexo_text",
      inicialvalue: "",
      option: ["Femenino", "Masculino"],
    },
    fechaNacimiento_date: {
      label: "Fecha nacimiento",
      typeValueInput: "date",
      typefieldInput: "date",
      value: "fecha__nacimiento_date",
      inicialvalue: "",
    },
    estadoCivil_text: {
      label: "Estado civil",
      typeValueInput: "text",
      typefieldInput: "autoColplete",
      value: "estado_civil_text",
      inicialvalue: "",
      option: ["Casado/a", "Soltero/a","Union libre","Viudo","Divorciado"]
    },
    ocupacion_text: {
      label: "Ocupacion",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "ocupacion_text",
      inicialvalue: "",
    },
    barrio_text: {
      label: "Barrio",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "barrio_text",
      inicialvalue: "",
    },
    ciudad_text: {
      label: "Ciudad",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "ciudad_text",
      inicialvalue: "",
    },
    direccion_text: {
      label: "Direccion",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "direccion_text",
      inicialvalue: "",
    },
    familiar_text: {
      label: "Familiar",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "familiar_text",
      inicialvalue: "",
    },
    parentesco_text: {
      label: "Parentesco",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "parentesco_text",
      inicialvalue: "",
    },
    nacionalidad_text: {
      label: "Nacionalidad",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "nacionalidad_text",
      inicialvalue: "",
    },
    edad_double: {
      label: "Edad",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "edad_double",
      inicialvalue: "",
    },
    rh_text: {
      label: "Tipo de sangre",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "rh_text",
      inicialvalue: "",
    },
    eps_text: {
      label: "EPS",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "eps_text",
      inicialvalue: "",
    },
  },
  motivo_consulta: {
    motivo_consulta: {
      label: "",
      typeValueInput: "text",
      typefieldInput: "checkBox", /////Check box recive un estrin y lo divide en chipspor separado
      value: "motivo_consulta",
      inicialvalue: "",
      option:
        "Suero terapia,Relajación,Plasma,Reducción,Tonificación,Post quirurgico,Celulitis,Enzimas,Venas Pierna,Manchas,Acne,Cicatrices,Remocion tatuajes,Depilación laser,Lunares,Hilos PDO,Toxina botulínica,Rinomodelación,Radiesse,Ellansé,NCTF,Ácido hialuronico,ÁH Ojeras,ÁH Labios,ÁH Labios,Rejuveneciomiento",
    },
  },
  comonosconoce: {
    comonosconoce: {
      label: "",
      typeValueInput: "text",
      typefieldInput: "checkBox", /////Check box recive un estrin y lo divide en chipspor separado
      value: "comonosconoce",
      inicialvalue: "",
      option:
        "Facebook,Referido,Aviso local,Google,Instagram,Televisión,Codigo,Convenio"
    },
  },
  enfermedades_text: {
    enfermedades_text: {
      label: "",
      typeValueInput: "text",
      typefieldInput: "checkBox", /////Check box recive un estrin y lo divide en chipspor separado
      value: "enfermedades_text",
      inicialvalue: "",
      option:
        "Hipotiroidismo,Hipertiroidismo,Hipertensión,Migraña,Epilepsia,Enfermedad Cardiaca,VIH,Diabetes,Cancer,Lupus,Enfermedad Renal,Asma,Alergia,Alergia cual"
    },
  },
  informacionMedica: {
    medicamento_boolean:{
      label: "Antecedente farmacológico",
      typeValueInput: "boolean",
      typefieldInput: "textCheck",
      value: "medicamento_text",
      inicialvalue: false,
      value_boolean: "medicamento_boolean",
     },

    operacion_boolean: {
      label: "Tiene operaciones",
      typeValueInput: "boolean",
      typefieldInput: "textCheck",
      value: "operacion_text",
      inicialvalue: false,
      value_boolean: "operacion_boolean",
     
    },

    implanteMedico_boolean: {
      label: "Tiene implantes medicos",
      typeValueInput: "boolean",
      typefieldInput: "textCheck",
      value: "implanteMedico_text",
      inicialvalue: false,
      value_boolean: "implante_medico_boolean",
    },
    planifica_boolean: {
      label: "Metodo de planificación",
      typeValueInput: "boolean",
      typefieldInput: "textCheck",
      value: "planifica_text",
      inicialvalue: false,
      value_boolean: "planifica_boolean",
    },

    embarazo_double:{
      label: "Numero de embarazos",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "embarazo_double",
      inicialvalue: "",

    },
    cesarea_double:{
      label: "Numero de cesareas",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "cesarea_double",
      inicialvalue: "",
    },
    aborto_double:{
      label: "Numero de abortos",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "aborto_double",
      inicialvalue: "",
    },
    partos_double: {
      label: "Numero de partos",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "partos_double",
      inicialvalue: "",
    },
    marcapaso_boolean: {
      label: "Tiene marcapasos",
      typeValueInput: "number",
      typefieldInput: "textCheckDisable",
      value: "marcapaso_boolean",
      inicialvalue: false,
      value_boolean: "marcapaso_boolean",
    },
    cicloRegularidad_boolean: {
      label: "El ciclo del periodo es regular",
      typeValueInput: "number",
      typefieldInput: "textCheckDisable",
      value: "ciclo_regularidad_boolean",
      value_boolean: "ciclo_regularidad_boolean",
    },
    cicloPeriodo_date: {
      label: "Fecha del ultimo periodo",
      typeValueInput: "date",
      typefieldInput: "date",
      value: "ciclo_periodo_date",
      inicialvalue: dayjs().format("DD/MM/YYYY"),
    },
    parto_date: {
      label: "Fecha del ultimo parto",
      typeValueInput: "date",
      typefieldInput: "date",
      value: "parto_date",
      inicialvalue: dayjs().format("DD/MM/YYYY"),
    },
  },
  examenFisico:{
    peso: {
      label: "Peso en kg",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "peso",
      inicialvalue: "",
    },
    talla: {
      label: "Talla",
      typeValueInput: "number",
      typefieldInput: "text",
      value: "talla",
      inicialvalue: "",
    },
    imc: {
      label: "IMC",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "imc",
      inicialvalue: "",
    },
    grasa: {
      label: "% Grasa",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "grasa",
      inicialvalue: "",
    },
    sobrepeso: {
      label: "Sobrepeso",
      typeValueInput: "number",
      typefieldInput: "text",
      value: "sobrepeso",
      inicialvalue: "",
    }
  },
  medidas:{
    abdomen_alto: {
      label: "Abdomen alto (cm)",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "abdomen_alto",
      inicialvalue: "",
    },
    abdomen_bajo: {
      label: "Abdomen bajo (cm)",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "abdomen_bajo",
      inicialvalue: "",
    },
    pierna_izquierda: {
      label: "Pierna izquierda (cm)",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "pierna_izquierda",
      inicialvalue: "",
    },
    pierna_derecha: {
      label: "Pierna derecha (cm)",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "pierna_derecha",
      inicialvalue: "",
    },
    cadera: {
      label: "Cadera (cm)",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "cadera",
      inicialvalue: "",
    },
    cintura: {
      label: "Cintura (cm)",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "cintura",
      inicialvalue: "",
    },
    brazo_izquierdo: {
      label: "Brazo izquierdo (cm)",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "brazo_izquierdo",
      inicialvalue: "",
    },
    brazo_derecho: {
      label: "Brazo derecho (cm)",
      typeValueInput: "number",
      typefieldInput: "number",
      value: "brazo_derecho",
      inicialvalue: "",
    },
    plan: {
      label: "Plan",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "plan",
      inicialvalue: "",
      multiline:true
    },
  },
  seguimiento: {
    seguimiento:{
      label: "Seguimiento",
      typeValueInput: "text",
      typefieldInput: "text",
      value: "seguimiento",
      inicialvalue: "",
      multiline:true
    }

  }
};

const inicialHistoriaClinica = {
  id:"",
  idpaciente:"",
  documentodouble: "",
  tipodocumento_text: "",
  nombre_text: "",
  telefono_double: "",
  correo_email: "",
  sexo_text: "",
  fecha__nacimiento_date: "",
  estado_civil_text: "",
  ocupacion_text: "",
  barrio_text: "",
  ciudad_text: "",
  direccion_text: "",
  familiar_text: "",
  parentesco_text: "",
  nacionalidad_text: "",
  edad_double: "",
  rh_text: "",
  eps_text: "",
  motivo_consulta: "",
  comonosconoce: "",
  enfermedades_text: "",
  medicamento_text: "",
  medicamento_boolean:false,
  operacion_text: "",
  operacion_boolean:false,
  implanteMedico_text: "",
  implante_medico_boolean:false,
  planifica_text: "",
  planifica_boolean:false,
  embarazo_double: "",
  cesarea_double: "",
  aborto_double: "",
  partos_double: "",
  marcapaso_boolean:false,
  ciclo_regularidad_boolean:false,
  ciclo_periodo_date: "",
  parto_date: "",
  fachadate:"",
  peso:"",
  talla:"",
  imc:"",
  grasa:"",
  sobrepeso:"",
  abdomen_alto:"",
  abdomen_bajo:"",
  pierna_izquierda:"",
  pierna_derecha:"",
  cadera:"",
  cintura:"",
  brazo_izquierdo:"",
  brazo_derecho:"",
  plan:"",
  procedimiento:"",
  seguimiento:"",
};

const objetoDetalle = {
  titulo: "nombre_text",
  subtitulo: "telefono_text",
  subtitulo2: "fechaNacimiento_date",
  body: "edad_double",
  body2: "indi",
  chip: "motivoConsulta",
};





const objetoCita = {
  documento_double: {
 
    label: "Documento",
    typeValueInput: "text",
    typefieldInput: "AsynchronousField",
    value: "documentodouble",
    inicialvalue: "",
    option: [],
  },
  tipodocumento_text: {
    label: "Tipo documento",
    typeValueInput: "text",
    typefieldInput: "autoColplete",
    value: "tipodocumento_text",
    inicialvalue: "",
    option: ["CC", "TI", "CE", "PSP"],
    disabled:true
  },
  nombre_text: {
    label: "Nombre Completo",
    typeValueInput: "text",
    typefieldInput: "text",
    value: "nombre_text",
    inicialvalue: "",
    disabled:true
  },
  telefono_double: {
    label: "Telefono",
    typeValueInput: "number",
    typefieldInput: "telefono",
    value: "telefono_double",
    inicialvalue: "",
    disabled:true
  },
  correo_email: {
    label: "Correo",
    typeValueInput: "text",
    typefieldInput: "email",
    value: "correo_email",
    inicialvalue: "",
    disabled:true
  },
  procedimiento_text: {
    label: "Proceso a realizar",
    typeValueInput: "text",
    typefieldInput: "text",
    value: "procedimiento_text",
    inicialvalue: "",
  },
  fechacitadate: {
    label: "Fecha para la cita",
    typeValueInput: "date",
    typefieldInput: "date",
    value: "fechacitadate",
    inicialvalue: "",
  },
  horatime: {
    label: "Hora",
    typeValueInput: "clock",
    typefieldInput: "clock",
    value: "horatime",
    inicialvalue: "",
    option: [],
  },
  status_boolean: {
    label: "Realizo abono",
    typeValueInput: "boolean",
    typefieldInput: "currencyCheck",
    value: "status_double",
    inicialvalue: false,
    value_boolean: "status_boolean",
  },
  observaciones_text: {
    label: "Observaciones",
    typeValueInput: "text",
    typefieldInput: "text",
    value: "observaciones_text",
    inicialvalue: "",
  },
};

const inicialCita = {
  id:"",
  idpaciente:"",
  tipodocumento_text:"",
  documentodouble: "",
  nombre_text: "",
  telefono_double: "",
  fechacitadate: null,
  correo_email: "",
  horatime: "",
  procedimiento_text: "",
  status_boolean: false,
  status_double: "",
  observaciones_text: "",
};


const objetoFactura = {
  documento_double: {
    label: "Documento",
    typeValueInput: "text",
    typefieldInput: "AsynchronousField",
    value: "documentodouble",
    inicialvalue: "",
    option: [],
  },
  tipodocumento_text: {
    label: "Tipo documento",
    typeValueInput: "text",
    typefieldInput: "autoColplete",
    value: "tipodocumento_text",
    inicialvalue: "",
    option: ["CC", "TI", "CE", "PSP"],
    disabled:true
  },
  nombre_text: {
    label: "Nombre Completo",
    typeValueInput: "text",
    typefieldInput: "text",
    value: "nombre_text",
    inicialvalue: "",
    disabled:true
  },
  procedimiento_text: {
    label: "Procedimiento",
    typeValueInput: "text",
    typefieldInput: "text",
    value: "procedimiento_text",
    inicialvalue: "",
  },
  observaciones_text: {
    label: "Observaciones",
    typeValueInput: "text",
    typefieldInput: "text",
    value: "observaciones_text",
    inicialvalue: "",
  },
  descuento_double: {
    label: "Descuento",
    typeValueInput: "boolean",
    typefieldInput: "currency",
    value: "descuento_double",
    inicialvalue: false,
    value_boolean: "status",
  },
  status_boolean: {
    label: "Costo factura",
    typeValueInput: "boolean",
    typefieldInput: "currency",
    value: "total_factura",
    inicialvalue: false,
    value_boolean: "status",
  },
};
const inicialFactura = {
  id:"",
  idpaciente:"",
  facturadate: null,
  procedimiento_text: "",
  nombre_text: "",
  tipodocumento_text: "",
  documentodouble: "",
  descuento_double: "",
  observaciones_text: "",
  total_factura: "",
  status: false,
};
const objetoPago = {
  documentodouble: {
    label: "Documento",
    typeValueInput: "text",
    typefieldInput: "AsynchronousField",
    value: "documentodouble",
    inicialvalue: "",
    option: [],
    disabled:true,
  },
  nombre_text: {
    label: "Nombre Completo",
    typeValueInput: "text",
    typefieldInput: "text",
    value: "nombre_text",
    inicialvalue: "",
    disabled:true,
  },
  valor_pago_double: {
    label: "Valor pago",
    typeValueInput: "boolean",
    typefieldInput: "currency",
    value: "valor_pago_double",
    inicialvalue: false,
    value_boolean: "status",
  },
  observacionespago: {
    label: "Seguimiento",
    typeValueInput: "text",
    typefieldInput: "text",
    value: "observacionespago",
    inicialvalue: "",
    disabled:false,
    multiline:true,
  },

};
const inicialpago = {
  id:"",
  idpaciente:"",
  idfactura:"",
  codigofactura:"",
  codigo_pago_text:"",
  documentodouble: "",
  nombre_text: "",
  fechadate:null,
  facturadate:"",
  valor_pago_double: "",
  observacionespago: "",
};


const objetoPaciente = {
  documento_double: {
    label: "Documento",
    typeValueInput: "number",
    typefieldInput: "AsynchronousField",
    value: "documentodouble",
    inicialvalue: "",
    option: [],
    
  },
  tipodocumento_text: {
    label: "Tipo documento",
    typeValueInput: "text",
    typefieldInput: "autoColplete",
    value: "tipodocumento_text",
    inicialvalue: "",
    option: ["CC", "TI", "CE", "PSP"],
  },
  nombre_text: {
    label: "Nombre Completo",
    typeValueInput: "text",
    typefieldInput: "text",
    value: "nombre_text",
    inicialvalue: "",
  },
  telefono_double: {
    label: "Telefono",
    typeValueInput: "number",
    typefieldInput: "telefono",
    value: "telefono_double",
    inicialvalue: "",
  },
  correo_email: {
    label: "Correo",
    typeValueInput: "text",
    typefieldInput: "email",
    value: "correo_email",
    inicialvalue: "",
  },
};

const inicialPaciente = {
  id:"",
  idpaciente:"",
  tipodocumento_text:"",
  documentodouble: "",
  nombre_text: "",
  telefono_double: "",
  correo_email:"",
  fachadate:null,
};

export const servicesObjet = {  
  objetoDetalle,
  inicialHistoriaClinica,
  inicialCita,
  objetoFactura,
  historiaClinica,
  inicialFactura,
  objetoCita,
  objetoPaciente,
  inicialPaciente,
  objetoPago,
  inicialpago
};
