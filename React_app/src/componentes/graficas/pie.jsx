import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';


export function PieGrafica({dataGrafica}) {

    ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: dataGrafica.label,
  datasets: [
    {
        label: 'Cantidad',
      data: dataGrafica.data,
      backgroundColor: [
        'rgba(126, 106, 108, 0.8)',
        'rgba(106,126,124, 0.4)',
      ],
      borderColor: [
        'rgba(126, 106, 108, 1',
        'rgba(106,126,124, 1)',

      ],
      borderWidth: 1,
    },
  ],
};
const options = {
    plugins: {
      legend: {
        display: true, // Configura esto en true para mostrar la leyenda
        position: 'bottom', // Cambia la posición a 'top', 'bottom', 'left', 'right' o personalízala
        align: 'start', // Alineación horizontal: 'start', 'center' o 'end' (izquierda, centro o derecha)
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
    // Otras opciones de configuración del gráfico aquí
  };
  return <Doughnut data={data} options={options}/>;
}
