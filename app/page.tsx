import Nav from '@/components/Nav'
import { Container, Box, Typography } from '@mui/material'
import Image from 'next/image'
import planets from '../data/data.json'
import Link from 'next/link'
import DataBox from '@/components/DataBox'

export default function Home() {
  const currentPlanetName = "Mars"; // cambia qui dinamicamente
  const planet = planets.find(p => p.name === currentPlanetName);

  if (!planet) return <Typography>Planet not found</Typography>;

  const planetSrc = planet.images.planet.replace('./', '/');

  return (
    <Box>
      <Nav />
      <Container maxWidth="lg">
        <Box  sx={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", mt: 4}}>
          <Image
            src={planetSrc}
            alt={`${planet.name} image`}
            width={300}
            height={300}
            priority
          />
          </Box>
          <Box sx={{ width: "30vw"}}>
          <Typography variant="h2" sx={{ mt: 2 }}>
            {planet.name}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, maxWidth: 600, mx: 'auto' }}>
            {planet.overview.content}
          </Typography>
          <Typography>
            Source: <Link href={planet.overview.source} target="_blank" rel="noopener">Wikipedia</Link>
          </Typography>
        </Box>

        <Box>
          <DataBox title="Rotation Time" data={planet.rotation} />
          <DataBox title="Revolution Time" data={planet.revolution} />
          <DataBox title="Radius" data={planet.radius} />
          <DataBox title="Average Temperature" data={planet.temperature} />
        </Box>
      </Container>
    </Box>
  );
}