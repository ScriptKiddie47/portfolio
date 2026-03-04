import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Box, Container, Drawer, List, ListItem, ListItemText, Button } from '@mui/material'
import { Brightness4, Brightness7, GitHub, LinkedIn, Menu } from '@mui/icons-material'

export default function Header({ onToggleTheme, mode, profile, contact }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const navItems = ['profile', 'experience', 'certifications', 'skills', 'projects']

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: 'background.default',
          borderBottom: (theme) => `1px solid ${theme.palette.primary.main}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="span" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {profile?.name || 'Your Name'}
              </Typography>
            </Box>

            {/* desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, mr: 2 }} component="nav">
              {navItems.map((id) => (
                <Button
                  key={id}
                  href={`#${id}`}
                  color="inherit"
                  size="small"
                  sx={{ textTransform: 'none', mx: 0.5 }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Button>
              ))}
            </Box>

            {contact?.github && (
              <IconButton href={contact.github} color="inherit" target="_blank" rel="noreferrer">
                <GitHub />
              </IconButton>
            )}
            {contact?.linkedin && (
              <IconButton href={contact.linkedin} color="inherit" target="_blank" rel="noreferrer">
                <LinkedIn />
              </IconButton>
            )}
            <IconButton onClick={onToggleTheme} color="inherit" aria-label="toggle theme">
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {/* mobile menu button */}
            <IconButton
              sx={{ display: { md: 'none' }, ml: 1 }}
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: 'background.paper', width: 220 } }}
      >
        <Box role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navItems.map((id) => (
              <ListItem
                key={id}
                component="a"
                href={`#${id}`}
                sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}
              >
                <ListItemText primary={id.charAt(0).toUpperCase() + id.slice(1)} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
