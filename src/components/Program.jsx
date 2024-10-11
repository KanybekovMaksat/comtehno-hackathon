import { Box, Typography, Paper, Divider, Button } from '@mui/material';

const Program = () => {
  return (
    <Box className="md:p-6 p-3 bg-gray-100 min-h-screen">
      <div className='flex flex-col items-center mb-8'>
      <Typography
        variant="h4"
        component="h1"
        className="text-center text-blue-600 mb-3 font-serif font-medium"
      >
        Программа Хакатона
      </Typography>
      <Button
      variant="contained"
      color="primary"
      className="bg-blue-600 shadow-none text-white py-2 px-4 rounded-lg"
      href="/hackathon_program.pdf"  // Укажите путь к PDF файлу
      download="Программа_хакатона.pdf"  // Имя файла при скачивании

    >
      Скачать полную программу
    </Button>
      </div>
      <Box className="relative mb-16 max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className="text-blue-600 mb-4 font-serif">
          День 1 – 28 октября
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-4 lg:left-10 h-full border-l-2 border-blue-500"
        />

        <Box className="ml-8 lg:ml-20 space-y-10">
          <Box className="flex items-start ">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                09:00 – 10:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-medium font-serif">
                Регистрация участников и открытие
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Регистрация команд, приветственные слова от организаторов.
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start ">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                10:00 – 11:30
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-medium font-serif">
                Объявление тем и критериев оценки
              </Typography>
              <Typography variant="body2" className="text-gray-600 font-sans">
                Презентация тем хакатона, критерии оценки проектов.
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start ">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                13:30 – 16:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-medium font-serif">
                Тимбилдинг и знакомство команд
              </Typography>
              <Typography variant="body2" className="text-gray-600 font-sans">
                Командные активности для улучшения взаимодействия, распределение
                ролей в командах.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>

      <Box className="relative mb-16 max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className="text-blue-600 mb-4 font-serif">
          День 2 – 29 октября
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-4 lg:left-10 h-full border-l-2 border-blue-500"
        />
        <Box className="ml-8 lg:ml-20 space-y-10">
          <Box className="flex items-start ">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                09:30 – 10:30
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-medium font-serif">
                Лекции от менторов
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Техники ускорения разработки, управление временем и
                советы по созданию презентации.
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                10:30 – 17:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-medium font-serif">
                Разработки концепций проектов
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Команды прорабатывают идеи и создают базовые концепции.
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                17:00 – 18:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold font-serif">
                Промежуточная презентация
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Команды представляют идеи и прототипы, получают обратную связь.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
      <Box className="relative max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className="text-blue-600 mb-4 font-serif">
          День 3 – 30 октября
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-4 lg:left-10 h-[90%] border-l-2 border-blue-500"
        />
        <Box className="ml-8 lg:ml-20 space-y-10">
          <Box className="flex items-start ">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                09:30 – 13:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold font-serif">
              Финальная защита проектов
              </Typography>
              <Typography variant="body2" className="text-gray-600">
              Презентации перед жюри, вопросы и обратная связь.
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                13:00 – 14:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold font-serif">
                Фуршет
              </Typography>
              <Typography variant="body2" className="text-gray-600">
              
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start">
            <Box className="w-20 lg:w-28">
              <Typography
                variant="body1"
                className="text-gray-600 font-bold font-sans"
              >
                14:00 – 15:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold font-serif">
                Подведение итогов и награждение
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Объявление победителей и закрытие мероприятия.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Program;
