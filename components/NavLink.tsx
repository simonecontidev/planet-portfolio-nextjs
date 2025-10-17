'use client';

import Link from 'next/link';
import { Typography } from '@mui/material';

interface Props {
  planetName: string;
}

const NavLink: React.FC<Props> = ({ planetName }) => {
  const slug = encodeURIComponent(planetName); // es. "Mars" -> "Mars"

  return (
    <Link href={`/planet/${slug}`} style={{ textDecoration: 'none' }}>
      <Typography variant="body1" sx={{ fontWeight: 500, letterSpacing: 1, color: 'white', '&:hover': { opacity: 0.7 } }}>
        {planetName.toUpperCase()}
      </Typography>
    </Link>
  );
};

export default NavLink;