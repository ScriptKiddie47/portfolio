import React from 'react'
import { Box, Container, Typography, Button, Avatar, Stack, Chip } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Hero({ profile, contact, resumeUrl }) {
  if (!profile) return null

  const tagChips = (profile.tagline || '').split('·').map((t) => t.trim()).filter(Boolean)

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        px: 2,
        // Radial glow behind the avatar on desktop, centered on mobile
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          right: { xs: '50%', md: '12%' },
          transform: 'translate(50%, -50%)',
          width: { xs: 480, md: 640 },
          height: { xs: 480, md: 640 },
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${theme.palette.primary.main}26 0%, transparent 70%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Text column */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 1,
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              {profile.name}
            </Typography>

            <Typography
              variant="h4"
              component="p"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                mb: 2,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              {profile.title}
            </Typography>

            {tagChips.length > 0 && (
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
                sx={{ mb: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                {tagChips.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: 'secondary.main',
                      color: 'secondary.main',
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Stack>
            )}

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              {resumeUrl && (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  startIcon={<DownloadIcon />}
                  sx={{ fontWeight: 700, borderRadius: 2, px: 3 }}
                >
                  Download CV
                </Button>
              )}
              {contact?.github && (
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  startIcon={<GitHubIcon />}
                  sx={{ fontWeight: 600, borderRadius: 2 }}
                >
                  GitHub
                </Button>
              )}
              {contact?.linkedin && (
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  startIcon={<LinkedInIcon />}
                  sx={{ fontWeight: 600, borderRadius: 2 }}
                >
                  LinkedIn
                </Button>
              )}
            </Stack>
          </Box>

          {/* Avatar column */}
          <Box sx={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src={profile.avatar}
              alt={profile.name}
              sx={{
                width: { xs: 140, md: 200 },
                height: { xs: 140, md: 200 },
                border: (theme) => `3px solid ${theme.palette.primary.main}`,
                boxShadow: (theme) => `0 0 40px ${theme.palette.primary.main}40`,
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
