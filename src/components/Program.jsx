import { Box, Typography, Paper, Divider } from '@mui/material';

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
      </div>

      {/* Day 1 */}
      <Box className="relative mb-16 max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className="text-blue-600 mb-4 font-serif">
          День 1 – Понедельник, 28 октября 2024 года
        </Typography>
        <Typography variant="subtitle1" className="text-gray-600 mb-4">
          Место проведения: УК МУИТ, 2-й корпус
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-4 lg:left-10 h-full border-l-2 border-blue-500"
        />
        <Box className="ml-8 lg:ml-20 space-y-10">
          {/* Event Item */}
          {[
            { time: '09:30 – 10:00', title: 'Регистрация участников', description: 'Участники проходят регистрацию, получают бейджи и информационные материалы.' },
            { time: '10:00 – 10:10', title: 'Открытие', description: 'Исполнение Гимна КР. Торжественное открытие мероприятия.' },
            { time: '10:10 – 10:15', title: 'Приветственная речь', description: 'Ректор МУИТ, доктор технических наук, профессор Бегалиев Улугбек Турдалиевич.' },
            { time: '10:15 – 10:30', title: 'Объявление тем хакатона и критериев оценки', description: 'Объявление направлений хакатона, правил и важной информации для участников.' },
            { time: '10:30 – 11:00', title: 'Спикер: Жумаматова Гульмира Каимовна', description: 'Директор Школы креативной индустрии МУИТ. Тема: «Генерация идей». Основы поиска инновационных идей и их оценка.' },
            { time: '11:00 – 11:30', title: 'Спикер: Эргешов Султан Эрмекович', description: 'Mentor, Mid-level UI/UX Developer, GEEKS. Тема: «Доступный и инклюзивный дизайн: как сделать продукт удобным для всех»' },
            { time: '11:30 – 12:00', title: 'Спикер: Нурбеков Айдин Нурбекович', description: 'Product Manager, Бакай Банк. Тема: «Работа с данными для улучшения городского пространства»' },
            { time: '12:00 – 13:00', title: 'Обед', description: '' },
            { time: '13:00 – 14:30', title: 'Тимбилдинг', description: 'Участники знакомятся друг с другом, формируют команды и учатся эффективно работать вместе.' },
            { time: '14:30 – 18:00', title: 'Генерация идей и разработка прототипов', description: 'Начало работы над проектами под менторским сопровождением.' },
          ].map(({ time, title, description }) => (
            <Box key={title} className="flex items-start">
              <Box className="w-20 lg:w-28">
                <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                  {time}
                </Typography>
              </Box>
              <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
                <Typography variant="body1" className="font-medium font-serif">
                  {title}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="relative mb-16 pt-9 max-w-full lg:w-[800px] mx-auto">
        <Typography variant="h5" className="text-blue-600 mb-4 font-serif">
          День 2 – Вторник, 29 октября 2024 года
        </Typography>
        <Typography variant="subtitle1" className="text-gray-600 mb-4">
          Место проведения: УК МУИТ, 2-й корпус и 1-й корпус, 4 этаж КОМТЕХНО
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          className="absolute left-4 lg:left-10 h-[90%] border-l-2 border-blue-500"
        />
        <Box className="ml-8 lg:ml-20 space-y-10">
          {/* Event Item */}
          {[
            { time: '09:30 – 10:00', title: 'Регистрация участников', description: '' },
            { time: '10:00 – 10:30', title: 'Спикер: Зархин Евгений Юрьевич', description: 'Технический специалист, ЦАИТО МУИТ. Тема: «Передовые технологии для образовательного процесса»' },
            { time: '10:30 – 11:00', title: 'Спикер: Шабельник Данил Петрович', description: 'Middle Backend Developer, выпускник КОМТЕХНО. Тема: «Как быстро вести IT-разработку на хакатонах»' },
            { time: '11:00 – 11:30', title: 'Спикер: Сартов Ахмед Исмазович', description: 'Middle Frontend Developer, выпускник КОМТЕХНО. Тема: «10 советов для успешной презентации»' },
            { time: '11:30 – 12:30', title: 'Обед', description: '' },
            { time: '12:30 – 18:00', title: 'Разработка прототипов', description: 'Работа над проектами с консультациями от менторов. Участники дорабатывают свои прототипы, уточняют технические детали и проводят тестирование.' },
          ].map(({ time, title, description }) => (
            <Box key={title} className="flex items-start">
              <Box className="w-20 lg:w-28">
                <Typography variant="body1" className="text-gray-600 font-bold font-sans">
                  {time}
                </Typography>
              </Box>
              <Paper elevation={3} className="p-4 w-full bg-white shadow-none">
                <Typography variant="body1" className="font-medium font-serif">
                  {title}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>





      </Box>
    </Box>
  );
};

export default Program;
