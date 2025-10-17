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
    <Box sx={{ backgroundColor: '#0b0d17', color: 'white', minHeight: '100vh' }}>
      <Nav />
      <Container
        maxWidth="lg"
        sx={{
          mt: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          gap: 6,
        }}
      >
        {/* Immagine */}
        <Box sx={{ flex: '1 1 40%', textAlign: 'center' }}>
          <Image
            src={planetSrc}
            alt={`${planet.name} image`}
            width={400}
            height={400}
            priority
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>

        {/* Testo */}
        <Box
          sx={{
            flex: '1 1 60%',
            maxWidth: 600,
            mx: 'auto',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              letterSpacing: '2px',
              mb: 2,
              textTransform: 'uppercase',
            }}
          >
            {planet.name}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}>
            {planet.overview.content}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              opacity: 0.6,
              '& a': { color: '#4fa3f7', textDecoration: 'none', ml: 0.5 },
              '& a:hover': { textDecoration: 'underline' },
            }}
          >
            Source:
            <Link href={planet.overview.source} target="_blank" rel="noopener">
              Wikipedia
            </Link>
          </Typography>
        </Box>
      </Container>

      {/* Data Boxes */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          mt: 8,
          pb: 8,
        }}
      >
        <DataBox title="Rotation Time" data={planet.rotation} />
        <DataBox title="Revolution Time" data={planet.revolution} />
        <DataBox title="Radius" data={planet.radius} />
        <DataBox title="Average Temperature" data={planet.temperature} />
      </Box>
    </Box>
  );
}