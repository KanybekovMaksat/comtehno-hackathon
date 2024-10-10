import { Button } from "@mui/material";

const Header = () => {
  return (
    <header className="h-[111px]">
      <div className="container">
        <div className="flex justify-between items-center h-[111px]">
          <div className="header_box">
            <h3 className="font-bold font-serif ">The SMART Bishkek</h3>
          </div>
          <div className="header_box">
            <Button variant="contained" className="shadow-none">Регистрация</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
