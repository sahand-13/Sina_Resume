import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Birth Information',
    children: [{ name: 'Birth Day : 1994 / 9 / 15' }, { name: 'Birth Location : Tehran,Iran' }],
  },
  {
    headline: 'Contact',
    children: [{ name: 'Number : +989359550273' }, { name: 'Email : sina.golkar01@gmail.com' }],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 5 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 2 }}
        >
          <Grid item xs={12} sx={{ mb: 3, textAlign: 'center' }}>
            {' '}
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              <Logo
                width={'50pt'}
                height={'40pt'}
                sx={{
                  width: '100%',
                  mx: { xs: 'auto', md: 'inherit' },
                  mb: 2,
                }}
                disabledLink
              />
              Sina Golkar
            </Typography>

            <Stack direction="row" justifyContent={{ xs: 'center', md: 'center' }}>
              <SocialsButton
                links={{
                  // linkedin: 'https://www.linkedin.com/in/Sina-golkar-8a79b5210',
                  github: 'https://github.com/SinaGolkar',
                }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7} sx={{ justifyContent: 'center' }}>
            <Stack spacing={20} direction={{ xs: 'column', md: 'row' }} justifyContent="center">
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <Typography key={link.name} color="inherit" variant="caption" sx={{ display: 'block' }}>
                      {link.name}
                    </Typography>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
