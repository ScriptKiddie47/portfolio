import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Profile({ profile }) {
  return (
    <Box component="section" id="profile" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
          About
        </Typography>
        <Box sx={{ mt: 0.5, height: 3, width: 48, borderRadius: 1, bgcolor: 'primary.main' }} />
      </Box>

      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, lineHeight: 1.8 }}>
        {profile?.summary}
      </Typography>
    </Box>
  )
}
