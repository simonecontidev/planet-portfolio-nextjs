import { Container, Box, Typography } from '@mui/material'
import Image from 'next/image'
import planets from '@/data/data.json'
import Link from 'next/link'
import DataBox from '@/components/DataBox'
import Nav from '@/components/Nav'

interface Props {
  params: { name: string }
}

export default function PlanetPage({ params }: Props) {
  const planetName = decodeURIComponent(params.name);
  const planet = planets.find(p => p.name.toLowerCase() === planetName.toLowerCase());

  if (!planet) {
    return (
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4">Planet not found</Typography>
      </Box>
    );
  }

  const planetSrc = planet.images.planet.replace('./', '/');

  return (
    <Box>
      <Nav />
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap" }}>
          <Image
            src={planetSrc}
            alt={`${planet.name} image`}
            width={300}
            height={300}
            priority
          />
        </Box>

        <Box sx={{ width: "30vw", mx: "auto", mt: 4 }}>
          <Typography variant="h2">{planet.name}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {planet.overview.content}
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Source:{" "}
            <Link href={planet.overview.source} target="_blank" rel="noopener">
              Wikipedia
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 6, flexWrap: "wrap" }}>
          <DataBox title="Rotation Time" data={planet.rotation} />
          <DataBox title="Revolution Time" data={planet.revolution} />
          <DataBox title="Radius" data={planet.radius} />
          <DataBox title="Average Temperature" data={planet.temperature} />
        </Box>
      </Container>
    </Box>
  );
}