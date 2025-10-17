import { Box, Typography } from '@mui/material';
import data from '@/data/data.json';
import NavLink from './NavLink';

type Planet = { id: string; name: string };

const Nav = () => {
  const planets: Planet[] = Array.isArray(data) ? data as Planet[] : (data as any).planets;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '1rem', borderBottom: '1px solid rgba(255,255,255,0.75)' }}>
      <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 800 }}>
        The Planet
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        {planets?.map((planet) => (
          <NavLink
            key={planet.id}
            planetName={planet.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Nav;