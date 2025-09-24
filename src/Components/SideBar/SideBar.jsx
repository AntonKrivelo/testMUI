import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SideBar = ({ onClickCloseModal, isActiveMenu, isLogin = false }) => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', form);
    onClickCloseModal();
  };

  return (
    <Drawer
      anchor="left"
      open={isActiveMenu}
      onClose={onClickCloseModal}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 300 }, // 100% на мобилках, 300px на больших экранах
          p: 3,
          backgroundColor: '#fff',
        },
      }}
    >
      {isLogin ? (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Авторизация
          </Typography>

          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            name="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary">
            Войти
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography variant="h6" gutterBottom>
            Меню
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Здесь можно разместить навигацию
          </Typography>
          <Button onClick={onClickCloseModal} variant="outlined" color="secondary">
            Закрыть
          </Button>
        </Box>
      )}
    </Drawer>
  );
};

export default SideBar;
