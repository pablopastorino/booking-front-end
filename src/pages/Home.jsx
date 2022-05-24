import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import ProductList from '../components/ProductList'
import { SearchBar } from '../components/SearchBar'
import hoteles from '../mocks/hotesls.json';

export const HomeScreen = () => {
    const theme = useTheme();
    const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
        {isMatchMD && <SearchBar/>}
        <ProductList title='Recomendaciones' data={hoteles}/>
        
    </>
  )
}
