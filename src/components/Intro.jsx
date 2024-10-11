import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register'); 
  };

  return (
    <section className="intro mt-20">
      <div className="container">
        <div className="flex lg-max:flex-col ">
          <div className=" md-max:flex md-max:flex-col">
            <h1 className="text-2xl font-bold pt-[50px] md:pt-[100px] pb-4 font-serif text-center md:text-left">
              Хакатон <br /> ГОРОД БУДУЩЕГО
            </h1>
            <p className="pb-5 font-sans font-bold">
              Хакатон «Бишкек — Город будущего» — это уникальная возможность для
              молодежи и IT-специалистов внести свой вклад в развитие города
              через цифровые решения. Основные цели включают улучшение экологии
              и поддержку здорового образа жизни.
            </p>
            <Button onClick={handleRegister} variant="contained" className="shadow-none">
              Регистрация
            </Button>
          </div>
          <img
            src="/public/intro.png"
            alt=""
            className="mt-10 md:mt-0 h-[250px] md:h-[450px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
