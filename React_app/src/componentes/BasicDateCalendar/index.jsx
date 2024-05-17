import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import 'dayjs/locale/es';



export default function BasicRangeShortcuts({setItemSelect}) {
  return ( 
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es' >
        <StaticDatePicker
        defaultValue={dayjs()}
        orientation='portrait'
        onChange={(value)=>setItemSelect(value.format("YYYY-MM-DD"))}
        sx={{minWidth:0}}
        

        slotProps={{
          actionBar: {
            actions: ['today'],
          },
          toolbar :{
            orientation:'portrait',
          }

        }}
      />
      </LocalizationProvider>
    
  );
}