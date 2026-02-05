import FunctionForm from "./components/Form"
import { createTheme, ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Container, Box, Paper } from "@mui/material"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
      marginBottom: '1rem',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        }
      }
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(30,30,30,0.7)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, background: 'linear-gradient(45deg, #bb86fc, #03dac6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
              Experiment 6
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="sm" sx={{ mt: 8, mb: 4, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Paper elevation={6} sx={{ p: 4, width: '100%', borderRadius: 4, background: 'linear-gradient(145deg, #1e1e1e, #252525)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <Box>
              <Typography variant="h4" align="center" color="primary" gutterBottom>
                Registration Form
              </Typography>
              <FunctionForm />
            </Box>
          </Paper>
        </Container>

        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              Your Website {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
