'use client';

import React from 'react';
import NextLink from 'next/link';
import { Link, Typography } from '@mui/material';

interface Props {
  planetName: string;
  planetId: number;
}

const NavLink: React.FC<Props> = ({ planetName, planetId }) => {
  return (
    <Link
      component={NextLink}
      href={`/planets/${planetId}`}
      underline="none"
      sx={{ mr: 2, color: 'white', '&:hover': { opacity: 0.7 } }}
    >
      <Typography variant="body1" sx={{ fontWeight: 500, letterSpacing: 1 }}>
        {planetName.toUpperCase()}
      </Typography>
    </Link>
  );
};

export default NavLink;