import React from 'react'
import { Box, Typography, Chip, Stack } from '@mui/material'

const CATEGORY_ORDER = ['Languages', 'Frameworks', 'Cloud & Infra', 'Databases', 'Integration']

const colorMap = {
  expert: 'success',
  advanced: 'primary',
  intermediate: 'warning',
  beginner: 'default',
}

export default function Skills({ skills }) {
  const list = skills || []

  const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
    const items = list.filter((s) => s.category === cat)
    if (items.length) acc[cat] = items
    return acc
  }, {})

  // Catch-all for skills without a recognised category
  const uncategorized = list.filter((s) => !s.category || !CATEGORY_ORDER.includes(s.category))
  if (uncategorized.length) grouped['Other'] = uncategorized

  return (
    <Box component="section" id="skills" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
          Skills
        </Typography>
        <Box sx={{ mt: 0.5, height: 3, width: 48, borderRadius: 1, bgcolor: 'primary.main' }} />
      </Box>

      <Stack spacing={4}>
        {Object.entries(grouped).map(([category, items]) => (
          <Box key={category}>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                color: 'text.secondary',
                fontWeight: 700,
                letterSpacing: 2,
                mb: 1.5,
              }}
            >
              {category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {items.map((s) => (
                <Chip
                  key={s.name}
                  label={s.name}
                  variant="outlined"
                  color={colorMap[s.level] || 'default'}
                  sx={{ fontWeight: 600, borderRadius: 1.5 }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
