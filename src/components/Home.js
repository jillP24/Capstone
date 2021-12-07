
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, {Component} from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        CollegeConnect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

// const MSG_SUBCRIPTION = 
// {

// }

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const email = data.get('email')
    //const password = data.get('password')

    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"email":email});
  }
// const [Messages, setMessages]= React.useState([]);

//   React.useEffect(() => {
//     fetch('', {
//       method: "POST",
//       headers: { "Content-Type": "application/json"},
//       body: JSON.stringify({ subscription: MSG_SUBCRIPTION})
//     }).then(response => response.json())
//     .then(data => setMessages(data))
//   }, []);
<div>
  <h1>New Messages</h1>
  <ul>

  </ul>
</div>

return (
    
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
     

      <Box
        sx={{
          marginTop: -1,     
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        Message Log
        <Typography component="h1" variant="h5">
        ※ CollegeConnect ※
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 50 }}>
             
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Send Message"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            width = "200px"
            position= "absolute"
            variant="contained"
            
            sx={{ mt: 0, mb: 0, "float": "right" }}
          >
            Send
          </Button>
          <a href="/" class="active">Go Back To Login</a>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>
);

}
  
