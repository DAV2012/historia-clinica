// MyPDFReport.js
import React from 'react';
import { Image, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { colorPrimary50, colorPrimary500, colorSecondary400, fontFamily } from '../../globalStyle/variables';
import { servicesObjet } from '../help';
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
            width: 125,
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
    seccionRowPago:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: "100%",

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
    textPago: {
        fontSize: 8,
        color: colorSecondary400,
        fontFamily: "Poppins",
        marginRight: 8,
        width:"15%"

    },
    textPagoObservaciones: {
        fontSize: 8,
        color: colorSecondary400,
        fontFamily: "Poppins",
        padding:"0 16",
        width:"40%",

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


export default function MyFactura({ data, dataPersonal,totalSum }) {



    return <Document
        title={`${data.facturadate}_${dataPersonal.documentodouble || ""}_${data.id}_${data.procedimiento_text}` || ""}
        subject="Facturas"
        pdfVersion="1.1"
        language="es"
        
        >

        <Page size="A4" style={styles.page} wrap>
            <View style={styles.sectionHeather} fixed>
                <View style={styles.sectionLogo}>
                    <Image style={styles.logo} src="/img/logo512.png" />
                </View>
                <View style={styles.sectionTitulo}>
                    <View style={styles.TituloPrincipal}>
                        <Text style={styles.heading} >FORMATO</Text>
                    </View>
                    <View style={styles.TituloPrincipal}>
                        <Text style={styles.heading}>FACTURA</Text>
                    </View>
                </View>
                <View style={styles.sectionInfoHeather}>
                    <Text style={styles.InfoHeatherText}>Codigo: FC001</Text>
                    <Text style={styles.InfoHeatherText}>Versión: 01</Text>
                    <Text style={styles.InfoHeatherText}>Fecha HC : {data.facturadate}</Text>
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
                        <Text style={styles.sectionHeading.textContrast}>{" "}</Text>
                    </View>
                </View>
                <View style={styles.seccion}>
                    {Object.entries(servicesObjet.historiaClinica.informacionPersonal).map(([key, { value, label }], index) => {
                        return <View key={index} style={styles.seccionRow}>
                            <Text style={styles.textLabel}>{label}</Text>
                            <Text style={styles.text}>{dataPersonal[value]}</Text>
                        </View>

                    })}
                </View>
            </View>
            <View style={styles.contentSeccion}>
                <View style={styles.sectionHeading}>
                    <View style={styles.sectionHeading}>
                        <Text style={styles.sectionHeading.text}>COD: {data.codigofactura}</Text>
                    </View>
                    <View style={styles.sectionHeading.varian}>
                        <Text style={styles.sectionHeading.textContrast}>{data.facturadate}</Text>
                    </View>
                </View>

                {data && data.pago?<View style={styles.seccion}>
                    {Object.entries(data.pago).map(([key, { valor_pago_double, observacionespago,fechadate,codigo_pago_text }], index) => {
                        return <View key={index} style={[styles.seccionRowPago,{borderBottom:"1 solid #6A7E7C", minHeight:32}] }>
                        <Text style={styles.textPago}>{codigo_pago_text}</Text>
                        <Text style={styles.textPago}>{fechadate}</Text>
                        <Text style={styles.textPago}>{" "}</Text>
                        <Text style={styles.textPagoObservaciones} wrap>{observacionespago}</Text>
                        <Text style={styles.textPago}>{valor_pago_double}</Text>
                      </View>

                    })}
                </View>:null}
                {Array.from({ length: data && data.pago && 10 - data.pago.length  }).map((_, index) => (
                    <View key={index}  style={[styles.seccionRowPago,{borderBottom:"1 solid #6A7E7C", minHeight:32}] }>
                        <Text style={styles.textPago}>{" "}</Text>
                        <Text style={styles.textPago} >{" "}</Text>
                        <Text style={styles.textPago} >{" "}</Text>
                        <Text style={styles.textPagoObservaciones}>{" "}</Text>
                        <Text style={styles.textPago}>{" "}</Text>
                    </View>
                ))}  
            
                <View style={styles.seccionRowPago}>
                    <Text style={styles.textPago}>{" "}</Text>
                    <Text style={styles.textPago} >{" "}</Text>
                    <Text style={styles.textPago} >{" "}</Text>
                    <Text style={styles.textPagoObservaciones}>Total cuotas</Text>
                    <Text style={styles.textPago}>{totalSum || 0}</Text>
                </View>
                <View style={styles.seccionRowPago}>
                    <Text style={styles.textPago} >{" "}</Text>
                    <Text style={styles.textPago} >{" "}</Text>
                    <Text style={styles.textPago} >{" "}</Text>
                    <Text style={styles.textPagoObservaciones}>Total servicio</Text>
                    <Text style={styles.textPago}>{data.total_factura || 0}</Text>
                </View>
                <View style={styles.seccionRowPago}>
                    <Text style={styles.textPago}>{" "}</Text>
                    <Text style={styles.textPago} >{" "}</Text>
                    <Text style={styles.textPago} >{" "}</Text>
                    <Text style={styles.textPagoObservaciones}>Monto pendiente</Text>
                    <Text style={styles.textPago}>{data.total_factura - totalSum || 0}</Text>
                </View>
            </View>


            <Text style={[styles.pageNumbers,{borderBottom:"2 solid "}]} render={({ pageNumber, totalPages }) => (
                `Pagina ${pageNumber} de ${totalPages}
        Fecha de impresión ${dayjs().format("YYYY-MM-DD")}`
            )} fixed />
        </Page>
    </Document>
};


