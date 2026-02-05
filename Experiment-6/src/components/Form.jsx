import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormHelperText
} from '@mui/material';
import { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    terms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing/selecting
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let temp = {};

    // Name validation
    if (!formData.name.trim()) temp.name = "Name is required.";
    else if (formData.name.length < 3) temp.name = "Name must be at least 3 characters.";

    // Email validation
    if (!formData.email) temp.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) temp.email = "Email is invalid.";

    // Password validation - check for length
    if (!formData.password) temp.password = "Password is required.";
    else if (formData.password.length < 6) temp.password = "Password must be at least 6 characters.";

    // Gender validation
    if (!formData.gender) temp.gender = "Please select a gender.";

    // Terms validation
    if (!formData.terms) temp.terms = "You must agree to the terms.";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(`Registration Successful!\n
      Name: ${formData.name}
      Email: ${formData.email}
      Gender: ${formData.gender}
      `);
      // Reset form or redirect
    }
  }

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Create your account with ease
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }} noValidate>

          {/* Name Field */}
          <TextField
            name="name"
            value={formData.name}
            onChange={handleChange}
            label="Full Name"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            error={Boolean(errors.name)}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Email Field */}
          <TextField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Email Address"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            error={Boolean(errors.email)}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Password Field */}
          <TextField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            error={Boolean(errors.password)}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Radio Buttons for Gender */}
          <FormControl component="fieldset" error={Boolean(errors.gender)} sx={{ mt: 2, width: '100%' }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
          </FormControl>

          {/* Checkbox for Terms */}
          <FormControl error={Boolean(errors.terms)} sx={{ mt: 1, width: '100%' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.terms}
                  onChange={handleChange}
                  name="terms"
                  color="secondary"
                />
              }
              label={
                <Typography variant="body2">
                  I agree to the Terms and Conditions
                </Typography>
              }
            />
            {errors.terms && <FormHelperText>{errors.terms}</FormHelperText>}
          </FormControl>

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            size="large"
            endIcon={<SendIcon />}
            sx={{ mt: 3, mb: 2, background: 'linear-gradient(45deg, #03dac6, #018786)' }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
}