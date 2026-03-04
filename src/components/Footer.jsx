import React from 'react'
import { Box, Container, Link, Stack, Typography } from '@mui/material'

export default function Footer({ contact }) {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', mt: 4, py: 3, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="body2" color="text.secondary">
            {contact ? (
              <>
                <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
                {' — '}
                <Link href={contact.github} target="_blank" rel="noreferrer">GitHub</Link>
                {' — '}
                <Link href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link>
              </>
            ) : (
              'Contact info coming soon'
            )}
          </Typography>

          <Typography variant="caption" color="text.secondary">Built with React + Vite</Typography>
        </Stack>
      </Container>
    </Box>
  )
}
