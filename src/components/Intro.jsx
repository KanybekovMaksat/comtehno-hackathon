import { Button } from '@mui/material';

const Intro = () => {
  return (
    <section className="intro">
      <div className="flex">
        <div className="container">
          <h1 className="text-2xl font-bold pt-[100px] pb-4">
            Хакатон Город БУДУЩЕГО Bishkek
          </h1>
          <p className="pb-5">
            Онлайн-программа обучения навыкам социального проектирования для
            финалистов конкурса «Могу всё изменить!» позволит запустить и
            масштабировать свои социальные проекты при поддержке команды
            наставников, экспертов и советников, которые помогут подготовиться к
            грантовому конкурсу и повысят шансы на победу.
          </p>
          <Button variant="contained" className="shadow-none">
            Регистрация
          </Button>
        </div>
        <img src="/public/intro.png" alt="" className="h-[450px]" />
      </div>
    </section>
  );
};

export default Intro;
