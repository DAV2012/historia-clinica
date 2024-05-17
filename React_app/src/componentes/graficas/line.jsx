import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';




export function LineGrafica({dataGrafica}) {


    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
      );
      

    const options = {
        responsive: true,
        scales: {
          y: {
            display:false
          },
        },
        plugins: {
          legend: {
            display: true, // Configura esto en true para mostrar la leyenda
            position: 'bottom', // Cambia la posición a 'top', 'bottom', 'left', 'right' o personalízala
            align: 'center', // Alineación horizontal: 'start', 'center' o 'end' (izquierda, centro o derecha)
            labels: {
                font: {
                  size: 12,
                  color: 'black',
                },
                padding: 20,
                usePointStyle: true, // Habilita el uso de iconos personalizados en lugar de los círculos predeterminados
                pointStyle: 'circle', // Cambia el estilo del icono (puedes personalizarlo)
              },
          },
        },
      };
      
      
      
    const data = {
        labels:dataGrafica.label,
        datasets: [
          {
            fill: true,
            label: 'Facturas',
            data: dataGrafica.dataFactura ,
            borderColor: 'rgba(126, 106, 108, 1)',
            backgroundColor: 'rgba(126, 106, 108, 0.1)',

          },
          {
            fill: true,
            label: 'Pagos',
            data: dataGrafica.dataPago ,
            borderColor: 'rgba(106,126,124, 1)',
            backgroundColor: 'rgba(106,126,124, 0.5)',
            
          },
        ],
      };
  return <Line options={options} data={data} />;
}
