import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" color="default" className="shadow-none">
      <Container maxWidth="lg">
        <Toolbar className="flex justify-between items-center p-0 md:px-[20px] ">
          <Box className="header_box">
            <Typography variant="h6" className="font-medium text-[15px] md:font-bold font-serif">
              Хакатон <br />
              ГОРОД БУДУЩЕГО
            </Typography>
          </Box>
          <Box className="header_box">
            <Button variant="contained" className="shadow-none">
              Регистрация
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
