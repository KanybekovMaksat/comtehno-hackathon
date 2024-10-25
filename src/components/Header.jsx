import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

const Header = () => {
  // const navigate = useNavigate();

  // const handleRegister = () => {
  //   navigate('/register'); // Change '/registration' to your desired route
  // };
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
            {/* <Button  onClick={handleRegister} variant="contained" className="shadow-none">
              Регистрация
            </Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
