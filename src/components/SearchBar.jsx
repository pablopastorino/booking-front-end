import React, { useState } from 'react'
import { Button, Divider, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box, styled } from '@mui/system'
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { colors } from '../theme/theme';
import DateRangePicker from 'rsuite/DateRangePicker';
import "rsuite/dist/rsuite.min.css";
import 'rsuite/styles/index.less';
import '../styles/searchbar.css'

import { startOfDay, endOfDay, addDays, subDays } from 'date-fns';

const Ranges = [
  {
    label: 'Próximos 7 días',
    value: [startOfDay(addDays(new Date(), +1)), endOfDay(addDays(new Date(), +8))]
  },
  {
    label: 'Próxima semana',
    value: [startOfDay(addDays(new Date(), +8)), endOfDay(addDays(new Date(), +15))]
  }
];


const places = [
  { full: 'Buenos Aires', country: 'Argentina', label: 'Buenos Aires, Argentina' },
  { full: 'Cordoba', country: 'Argentina', label: 'Cordoba, Argentina' },
  { full: 'Mendoza', country: 'Argentina', label: 'Mendoza, Argentina' },
  { full: 'Jujuy', country: 'Argentina', label: 'Jujuy, Argentina' },
  { full: 'Salta', country: 'Argentina', label: 'Salta, Argentina' },
  { full: 'Tucumán', country: 'Argentina', label: 'Tucumán, Argentina' },
]

const ContainerButton = styled(Button)(
  () => `
    font-size: 1.5em;
    font-weight: 400;
    color: ${colors.white};
    background: ${colors.primary};
    text-transform: none;
  `
);

export const SearchBar = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [date, setDate] = useState({});
  return (
    <>
      <Box
        padding={2}
        textAlign='center'
        display='flex'
        flexDirection='column'
        gap={3}
        sx={{ background: colors.orange }}
      >
        <Typography variant='h1' sx={{ fontSize: isMatch ? '1.5em' : '2.5em', fontWeight: 600, color: colors.white }}>
          Busca ofertas en hoteles, casas y mucho más
        </Typography>
        <Box
          display='flex'
          flexDirection={isMatch ? 'column' : 'row'}
          gap={2}
          // alignItems='center'
          justifyContent='center'
        >
          <Autocomplete
            sx={{ color: colors.primaryDark, 
                  background: colors.white, 
                  borderRadius: '0.5em', 
                  padding: '0.5em 0em', 
                  maxWidth: isMatch ? '100%' : '40vw', 
                  width: isMatch ? '100%' : '35em' 
                }}
            fullWidth
            id="place-selected"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={places}
            autoHighlight
            isOptionEqualToValue={(option, value) => option.full === value.full}
            renderOption={(props, option) => (
              <Box
                key={option.label}
              >
                <Box
                  sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                  {...props}
                  display='flex'
                  gap={2}
                >
                  <LocationOnOutlinedIcon fontSize='large' sx={{ color: colors.orange }} />
                  <Box
                    display='flex'
                    flexDirection='column'
                    gap='0.1em'
                  >
                    <Typography sx={{ fontWeight: 600, color: colors.primaryDark }}>{option.full}</Typography>
                    <Typography sx={{ fontWeight: 400, color: colors.primary }}>{option.country}</Typography>
                  </Box>
                </Box>
                <Divider sx={{ background: colors.orange }} />
              </Box>
            )}
            renderInput={(params) => {
              return <TextField
                {...params}
                placeholder='¿A dónde vamos?'
                // {...params}
                InputProps={{
                  ...params.InputProps,
                  autoComplete: 'new-password',
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start" sx={{ margin: '0px 6px 0px 1em !important' }}>
                      <LocationOnIcon fontSize='medium' sx={{ color: colors.orange }} />
                    </InputAdornment>
                  ),
                }}
                variant='standard'
                sx={{ borderRadius: '1em' }}
              />
            }}
          />
          <DateRangePicker
            size="lg"
            placeholder="Checkin - Checkout"
            showOneCalendar={isMatch ? true : false}
            preventOverflow={true}
            locale={{
              sunday: 'D',
              monday: 'L',
              tuesday: 'M',
              wednesday: 'X',
              thursday: 'J',
              friday: 'V',
              saturday: 'S',
              ok: 'APLICAR',
              today: 'HOY',
              yesterday: 'AYER',
              hours: 'HORA',
              minutes: 'MINUTOS',
              seconds: 'SEGUNDOS',

              // for DateRangePicker
              last7Days: 'ULTIMOS 7 DIAS',
            }}
            ranges={Ranges}
            format='dd-MM-yyyy'
          />
          <ContainerButton
            variant='contained'
            fullWidth
            sx={{maxWidth: isMatch ? '100%' : '15vw', 
                width: isMatch ? '100%' : '10em', 
                '&:hover': {
                  borderColor: `${colors.primaryDark}`,
                  background: `${colors.primaryDark}`
                } }}
          >
            Buscar
          </ContainerButton>
        </Box>
      </Box>
    </>
  )
}

