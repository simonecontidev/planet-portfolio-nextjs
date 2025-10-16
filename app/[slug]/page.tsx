import React from 'react'
import data from '@/data/data.json';
import { Box, Container } from '@mui/material';
import Nav from '@/components/Nav';


const Planet = async ({ params }: {params : Promise<{slug: string}>}) => {
  const { slug } = await params;
  const planet = data[Number(slug)];

  return (
    <Box>
    <Nav/>
    <Container>

    </Container>
    </Box>
  )
}

export default Planet