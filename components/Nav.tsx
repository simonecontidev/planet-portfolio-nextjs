import React from 'react';
import NavLink from './NavLink';
import { Box, Typography } from '@mui/material';
import data from '@/data/data.json'; 

type Planet = {
  id: string | number;
  name: string;
};

const Nav = () => {
  const planets: Planet[] = Array.isArray(data) ? data : data.planets; 

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '1rem', borderBottom: '1px solid rgba(255,255,255,0.75)' }}>
      <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 800 }}>
        The Planet
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        {planets?.map((planet) => (
          <NavLink
            key={planet.id}
            planetId={planet.id}
            planetName={planet.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Nav;