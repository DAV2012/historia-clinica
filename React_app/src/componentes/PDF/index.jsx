// MyPDFReport.js
import React from 'react';
import { Image, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { colorPrimary50, colorPrimary500, colorSecondary400, fontFamily } from '../../globalStyle/variables';
import { servicesObjet } from '../help';
import Intento from './seccionCategorias';
import dayjs from 'dayjs';


Font.register({
  family: 'Poppins',
  fonts: [{
    src: `font/Poppins-Light.ttf`
  },
  {
    src: `font/Poppins-Bold.ttf`,
    fontWeight: 'bold'
  }
  ]
});

const styles = StyleSheet.create({

  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  sectionHeather: {
    flexDirection: "row",
    border: "1px solid #6A7E7C",
    height: 70,
    marginBottom: 40,

  },
  sectionLogo: {
    width: "30%",
    padding: 8,
    borderRight: " 1px soli #6A7E7C",
  },
  logo: {
    objectFit: "contain",
    width: "100%",
  },
  sectionTitulo: {
    width: "50%",
    flexFlow: 1,
    padding: 8,
    textAlign: "center",

  },
  TituloPrincipal: {
    fontFamily: "Poppins",
    color: colorPrimary500,
    fontSize: 25,
    fontWeight: "bold",


  },
  sectionInfoHeather: {
    justifyContent: "space-between",
    width: "20%",
    padding: "8 0",
    borderLeft: " 1 solid #6A7E7C",

  },
  InfoHeatherText: {
    fontSize: 8,
    borderBottom: " 1 solid #6A7E7C",
    padding: "0 8",
    width: "100%",
    fontFamily: "Poppins",
    color: "#6A7E7C"
  },
  sectionHeading: {
    padding: 0,
    margin: 0,
    backgroundColor: colorPrimary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",

    varian: {
      backgroundColor: "#FFFFFF",
      width: 100,
      justifyContent: "center",

    },
    text: {
      color: colorPrimary50,
      fontSize: 18,
      padding: 4,
      fontFamily: "Poppins",
    },
    textContrast: {
      color: colorPrimary500,
      padding: 8,
      fontSize: 18,
      fontFamily: "Poppins",
    }
  },
  seccion: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: "8",
  },
  seccionRow: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    width: "50%",
    padding: "0 16 0 0",
    logo: {
      objectFit: "contain",
      height: 8,
      width: 8,

    },
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Poppins",
  },
  text: {
    fontSize: 8,
    color: colorPrimary500,
    fontWeight: 700,
    fontFamily: "Poppins",
  },
  textLabel: {
    fontSize: 8,
    color: colorSecondary400,
    fontFamily: "Poppins",
    marginRight: 16,
    textAlign: "right",

  },
  contentSeccion: {
    pageBreak: 'avoid', // Establece 'avoid' para que el componente sea unbreakable
    width: '100%',
  },
  pageNumbers: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 35,
    fontSize: 8,
    color: colorSecondary400,
    fontFamily: "Poppins",
    textAlign: "right",
  },
});

export default function MyDocument({ data }) {



  return <Document
    title={`${data.fachadate}_${data.documentodouble}_${data.id}_${data.procedimiento}`}
    subject="Historia clinica"
    pdfVersion="1.1"
    language="es">

    <Page size="A4" style={styles.page} wrap>
      <View style={styles.sectionHeather} fixed>
        <View style={styles.sectionLogo}>
          <Image style={styles.logo} src="/img/logo512.png" />
        </View>
        <View style={styles.sectionTitulo}>
          <View style={styles.TituloPrincipal}>
            <Text style={styles.heading} fon>FORMATO</Text>
          </View>
          <View style={styles.TituloPrincipal}>
            <Text style={styles.heading}>VALORACIÓN INICIAL</Text>
          </View>
        </View>
        <View style={styles.sectionInfoHeather}>
          <Text style={styles.InfoHeatherText}>Codigo: HC001</Text>
          <Text style={styles.InfoHeatherText}>Versión: 01</Text>
          <Text style={styles.InfoHeatherText}>Fecha HC : {data.fachadate}</Text>
          <Text style={styles.InfoHeatherText} render={({ pageNumber, totalPages }) => (
            `Pagina: ${pageNumber}`
          )} />
        </View>
      </View>
      <View style={styles.contentSeccion}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionHeading.text}>INFORMACIÓN DEL PACIENTE</Text>
          </View>
          <View style={styles.sectionHeading.varian}>
            <Text style={styles.sectionHeading.textContrast}>N° {data.id}</Text>
          </View>
        </View>
        <View style={styles.seccion}>
          {Object.entries(servicesObjet.historiaClinica.informacionPersonal).map(([key, { value, label }], index) => {
            return <View key={index} style={styles.seccionRow} id={key}>
              <Text style={styles.textLabel}>{label}</Text>
              <Text style={styles.text}>{data[value]}</Text>
            </View>

          })}
        </View>
      </View>
      <View style={styles.contentSeccion}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionHeading.text}>De que manera conocio la existencía de nuestros servicio</Text>
          </View>
        </View>
        <View style={styles.seccion}>
          <Intento campo={"comonosconoce"} opciones={servicesObjet.historiaClinica.comonosconoce.comonosconoce.option} dataCompo={data}></Intento>
        </View>
      </View>
      <View style={styles.contentSeccion}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionHeading.text}>MOTIVO DE CONSULTA</Text>
          </View>
        </View>
        <View style={styles.seccion}>
          <Intento campo={"motivo_consulta"} opciones={servicesObjet.historiaClinica.motivo_consulta.motivo_consulta.option} dataCompo={data}></Intento>

        </View>
      </View>
      <View style={styles.contentSeccion}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionHeading.text}>SUFRE DE ALGUNA DE ÉSTAS ENFERMEDADES</Text>
          </View>
        </View>
        <View style={styles.seccion}>
          <Intento campo={"enfermedades_text"} opciones={servicesObjet.historiaClinica.enfermedades_text.enfermedades_text.option} dataCompo={data}></Intento>

        </View>
      </View>
      <View style={styles.contentSeccion}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionHeading.text}>INFORMACIÓN MEDICA</Text>
          </View>
        </View>
        <View style={styles.seccion}>
          {Object.entries(servicesObjet.historiaClinica.informacionMedica).map(([key, { value, label, value_boolean, typefieldInput }], index) => {
            return <View key={index} style={styles.seccionRow} id={key}>
              {typefieldInput === "textCheck" && <>
                <Text style={styles.textLabel}>{label}</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.text}>{data[value]}</Text>
                  <Image style={styles.seccionRow.logo} src={data[value_boolean] ? "/img/check-150.png" : "/img/checkmark-150.png"} />
                </View></>
              }

              {typefieldInput === "textCheckDisable" && <>
                <Text style={styles.textLabel}>{label}</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.text}>{data[value]}</Text>
                  <Image style={styles.seccionRow.logo} src={data[value_boolean] ? "/img/check-150.png" : "/img/checkmark-150.png"} />
                </View></>
              }

              {typefieldInput !== "textCheckDisable" && typefieldInput !== "textCheck" && <>
                <Text style={styles.textLabel}>{label}</Text>
                <Text style={styles.text}>{data[value]}</Text></>
              }
            </View>

          })}
        </View>
      </View>

      <View style={styles.contentSeccion}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionHeading.text}>EXAMEN FÍSICO</Text>
          </View>
        </View>
        <View style={styles.seccion}>
          {Object.entries(servicesObjet.historiaClinica.examenFisico).map(([key, { value, label }], index) => {
            return <View key={index} style={styles.seccionRow} id={key}>
              <Text style={styles.textLabel}>{label}</Text>
              <Text style={styles.text}>{data[value]}</Text>
            </View>

          })}
        </View>
      </View>
      <View style={styles.contentSeccion}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionHeading.text}>MEDIDAS</Text>
          </View>
        </View>
        <View style={styles.seccion}>
          {Object.entries(servicesObjet.historiaClinica.medidas).map(([key, { value, label }], index) => {
            return <View key={index} style={styles.seccionRow} id={key}>
              <Text style={styles.textLabel}>{label}</Text>
              <Text style={styles.text}>{data[value]}</Text>
            </View>

          })}
        </View>
      </View>
      <View style={styles.contentSeccion}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionHeading.text}></Text>
          </View>
        </View>
      </View>
      <Text style={styles.pageNumbers} render={({ pageNumber, totalPages }) => (
        `Pagina ${pageNumber} de ${totalPages}
        Fecha de impresión ${dayjs().format("YYYY-MM-DD")}`
      )} fixed />
    </Page>
  </Document>
};


