import React from 'react'
import { Card, CardContent, CardActions, Typography, Grid, Button, Chip, Box } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

function ProjectCard({ p }) {
  return (
    <Card
      variant="elevation"
      sx={{
        height: '100%',
        bgcolor: 'background.paper',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderTop: (theme) => `3px solid ${theme.palette.primary.main}`,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => `0 12px 32px ${theme.palette.primary.main}20`,
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
          {p.name}
        </Typography>
        <Box sx={{ mb: 1.5, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {p.tech.map((t) => (
            <Chip key={t} label={t} size="small" variant="outlined" color="primary" />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {p.description}
        </Typography>
      </CardContent>
      {p.link && (
        <CardActions>
          <Button
            size="small"
            href={p.link}
            target="_blank"
            rel="noreferrer"
            color="primary"
            endIcon={<OpenInNewIcon fontSize="small" />}
          >
            View Project
          </Button>
        </CardActions>
      )}
    </Card>
  )
}

export default function Projects({ projects }) {
  if (!projects || !projects.length) return null

  return (
    <Box component="section" id="projects" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
          Selected Projects
        </Typography>
        <Box sx={{ mt: 0.5, height: 3, width: 48, borderRadius: 1, bgcolor: 'primary.main' }} />
      </Box>

      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {projects.map((p) => (
          <Grid key={p.name} item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 360 }}>
              <ProjectCard p={p} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
