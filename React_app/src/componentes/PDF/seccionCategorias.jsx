// MyPDFReport.js
import React from 'react';
import { Image,Text, View, StyleSheet} from '@react-pdf/renderer';
import {  colorPrimary500} from '../../globalStyle/variables';

import { useCommaDivider } from '../hooks/useCommaDivider';



const width = 'calc(100% - 15)';
const styles = StyleSheet.create({

    seccionRow: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start',
        width: "25%",
        logo: {
            objectFit: "contain",
            height: 12,
            width: 12,
            margin: "0 16",
        },
    },

    text: {
        fontSize: 8,
        color:colorPrimary500,
        fontFamily:"Poppins",
        width:width,

      },

});



export default function Intento({campo, opciones,dataCompo}) {

    const {
        handleChangeChecked,
        state,
        newEntryObjeto,
        handleCrearCategorias,
        categorias,
      }=useCommaDivider(campo,opciones,dataCompo[campo])



    return <>

        {Object.entries(categorias).map(([clave,valor],index)=>{
            return (<View key={index} style={styles.seccionRow} id={clave}>
                    <Text style={styles.text}>{valor}</Text>
                    <Image style={styles.seccionRow.logo} src={state[clave]?"/img/check-150.png":"/img/checkmark-150.png" }/>
                </View>
    
            )
        })}
    </>


    
};


