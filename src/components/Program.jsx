import { Box, Typography, Paper, Divider } from '@mui/material';

const Program = () => {
  return (
    <Box className="p-6 bg-gray-100 min-h-screen">
      <Typography
        variant="h4"
        component="h1"
        className="text-center text-blue-600 mb-8 font-serif font-medium"
      >
        Программа Хакатона
      </Typography>
      <Box className="relative mb-16 w-[800px] m-auto">
        <Typography variant="h5" className="text-blue-600 mb-4 font-serif">
          День 1 – 28 октября
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-10 h-full border-l-2 border-blue-500"
        />

        <Box className="ml-20 space-y-10  ">
          <Box className="flex items-start space-x-4">
            <Box className="w-28">
              <Typography variant="body1" className="text-gray-600 font-bold font-sans">
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
          <Box className="flex items-start space-x-4">
            <Box className="w-28">
              <Typography variant="body1" className="text-gray-600 font-bold font-sans">
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
          <Box className="flex items-start space-x-4">
            <Box className="w-28">
              <Typography variant="body1" className="text-gray-600 font-bold font-sans">
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

      <Box className="relative mb-16 w-[800px] m-auto">
        <Typography variant="h5" className="text-blue-600 mb-4 font-serif">
          День 2 – 29 октября
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-10 h-full border-l-2 border-blue-500"
        />

        <Box className="ml-20 space-y-10">
          {/* Быстрая разработка */}
          <Box className="flex items-start space-x-4">
            <Box className="w-28">
              <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                09:30 – 10:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-medium font-serif">
                Лекция: Как быстро вести разработку
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Техники ускорения разработки, управление временем и
                использование инструментов.
              </Typography>
            </Paper>
          </Box>

          {/* Разработка концепций */}
          <Box className="flex items-start space-x-4">
            <Box className="w-28">
              <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                10:30 – 13:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-medium font-serif">
                Начало разработки концепций проектов
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Команды прорабатывают идеи и создают базовые концепции.
              </Typography>
            </Paper>
          </Box>

          {/* Промежуточная презентация */}
          <Box className="flex items-start space-x-4">
            <Box className="w-28">
              <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                17:00 – 18:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold">
                Промежуточная презентация
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Команды представляют идеи и прототипы, получают обратную связь.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* День 3 */}
      <Box className="relative w-[800px] m-auto">
        <Typography variant="h5" className="text-blue-600 mb-4 font-serif">
          День 3 – 30 октября
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-10 h-[90%] border-l-2 border-blue-500"
        />
        <Box className="ml-20 space-y-10">
          <Box className="flex items-start space-x-4">
            <Box className="w-28">
              <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                09:30 – 13:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold">
                Завершение разработки
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Команды завершают прототипы и готовятся к финальной презентации.
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start space-x-4">
            <Box className="w-28">
              <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                16:00 – 18:00
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
              <Typography variant="body1" className="font-bold">
                Финальная защита проектов
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Презентации перед жюри, вопросы и обратная связь.
              </Typography>
            </Paper>
          </Box>
          <Box className="flex items-start space-x-4">
            <Box className="w-28">
              <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                18:00 – 18:30
              </Typography>
            </Box>
            <Paper elevation={3} className="p-4 w-full bg-white shadow-none ">
              <Typography variant="body1" className="font-bold">
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