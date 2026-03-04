import React from 'react'
import { Typography, Chip, Stack, Box } from '@mui/material'

function ExperienceItem({ e }) {
  return (
    <Box
      sx={{
        position: 'relative',
        pl: 3,
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          bgcolor: 'primary.main',
          opacity: 0.3,
          borderRadius: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          left: -4,
          top: 20,
          width: 10,
          height: 10,
          borderRadius: '50%',
          bgcolor: 'primary.main',
        },
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          p: 3,
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          sx={{ mb: 0.5 }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {e.company}
          </Typography>
          <Chip
            label={e.period}
            size="small"
            variant="outlined"
            sx={{ borderColor: 'secondary.main', color: 'secondary.main', fontWeight: 600 }}
          />
        </Stack>

        <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600, mb: 0.5 }}>
          {e.role}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
          {e.location}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {e.summary}
        </Typography>

        <Stack component="ul" sx={{ pl: 2, m: 0, mb: 2 }} spacing={0.5}>
          {e.highlights.map((h, idx) => (
            <Typography component="li" variant="body2" key={idx} sx={{ lineHeight: 1.7 }}>
              {h}
            </Typography>
          ))}
        </Stack>

        <Stack direction="row" flexWrap="wrap" gap={0.75}>
          {e.tech.map((t) => (
            <Chip key={t} label={t} size="small" variant="outlined" color="primary" sx={{ fontWeight: 500 }} />
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default function Experience({ experience }) {
  if (!experience || !experience.length) return null

  return (
    <Box component="section" id="experience" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
          Experience
        </Typography>
        <Box sx={{ mt: 0.5, height: 3, width: 48, borderRadius: 1, bgcolor: 'primary.main' }} />
      </Box>

      <Stack spacing={3}>
        {experience.map((e) => (
          <ExperienceItem key={e.company + e.role} e={e} />
        ))}
      </Stack>
    </Box>
  )
}
