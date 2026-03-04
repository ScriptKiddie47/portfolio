import { useEffect, useState, useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import { ThemeProvider, createTheme, CssBaseline, Container, Typography, Box } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light')
  })

  // Sync data-theme attribute on <html> so CSS variables track the toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
  }, [mode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#0ea5e9' : '#0284c7',
          },
          secondary: {
            main: mode === 'dark' ? '#8b5cf6' : '#7c3aed',
          },
          background: {
            default: mode === 'dark' ? '#020617' : '#f8fafc',
            paper:   mode === 'dark' ? '#0f172a' : '#ffffff',
          },
          text: {
            primary:   mode === 'dark' ? '#f1f5f9' : '#0f172a',
            secondary: mode === 'dark' ? '#94a3b8' : '#475569',
          },
          divider: mode === 'dark' ? 'rgba(148,163,184,0.12)' : 'rgba(15,23,42,0.12)',
        },
        typography: {
          fontFamily: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'].join(','),
          h1: { fontWeight: 800 },
          h2: { fontWeight: 800 },
          h3: { fontWeight: 700 },
          h4: { fontWeight: 700 },
          h5: { fontWeight: 700 },
        },
      }),
    [mode]
  )

  const toggleTheme = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark'
    setMode(newMode)
    localStorage.setItem('theme', newMode)
  }

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load data')
        return res.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onToggleTheme={toggleTheme} mode={mode} profile={data?.profile} contact={data?.contact} />
      {data && <Hero profile={data.profile} contact={data.contact} resumeUrl={data.resume} />}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ width: '100%', maxWidth: 980, mx: 'auto' }}>
          {loading && (
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Loading portfolio...
            </Typography>
          )}
          {error && (
            <Typography variant="body1" color="error" sx={{ mb: 2 }}>
              Error: {error}
            </Typography>
          )}

          {data && (
            <>
              <Profile profile={data.profile} />
              <Experience experience={data.experience} />
              <Certifications certifications={data.certifications} />
              <Skills skills={data.skills} />
              <Projects projects={data.projects} />
            </>
          )}
        </Box>
      </Container>

      <Footer contact={data?.contact} />
    </ThemeProvider>
  )
}

export default App
