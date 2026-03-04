import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function Certifications({ certifications }) {
  if (!certifications || !certifications.length) return null

  return (
    <Box component="section" id="certifications" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
          Certifications
        </Typography>
        <Box sx={{ mt: 0.5, height: 3, width: 48, borderRadius: 1, bgcolor: 'primary.main' }} />
      </Box>

      <Stack spacing={2}>
        {certifications.map((c, idx) => (
          <Stack
            key={idx}
            direction="row"
            alignItems="flex-start"
            spacing={1.5}
            sx={{
              p: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
              border: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <CheckCircleIcon sx={{ color: 'primary.main', mt: 0.25, flexShrink: 0 }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {c.name}
              </Typography>
              {c.validUntil && (
                <Typography variant="caption" color="text.secondary">
                  Valid until {c.validUntil}
                </Typography>
              )}
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}
