import React from 'react'
import { Link } from '@mui/material'

interface Props {
    planetName: string;
    planetId: number;
}

const NavLink = ({planetName, planetId}) => {
  return (
    <Link href={planetId}>
      {planetName}
    </Link>
  )
}

export default NavLink
