import { Card, CardContent, Typography, Box } from '@mui/material';

const HackathonDescription = () => {
  return (
    <section>
      <div className="container my-20">
        <Box className="flex gap-10 flex-col md:flex-row">
          <Box className="flex gap-5 flex-col">
            <img
              src="/Rectangle 601 (2).png"
              alt="Hackathon"
              className="h-[200px]"
            />
            <Card className="bg-[#eddd9f] p-2 rounded-sm  max-h-[200px]">
              <CardContent>
                <Typography variant="h5" className="font-bold text-xl">
                  Сроки регистрации
                </Typography>
                <Typography variant="body1" className="font-serif">
                  С 10 октября по <br /> 24 октября
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Typography variant="h5" className="font-medium font-serif mb-4">
              Темы хакатона:
            </Typography>
            <div className="flex flex-col gap-5">
              <Card className="hover:shadow-xl transition-shadow rounded-lg bg-white">
                <CardContent>
                  <Typography
                    variant="h6"
                    className="font-medium font-serif text-gray-800"
                  >
                    Экология и благоустройство города
                  </Typography>
                  <Typography className="text-gray-600 mt-2">
                    Проекты, направленные на улучшение экологии, озеленение и
                    создание устойчивой городской инфраструктуры.
                  </Typography>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow rounded-lg bg-white">
                <CardContent>
                  <Typography
                    variant="h6"
                    className="font-medium font-serif text-gray-800"
                  >
                    Здоровый образ жизни
                  </Typography>
                  <Typography className="text-gray-600 mt-2">
                    Проекты, способствующие популяризации здорового образа
                    жизни, фитнеса и спортивных мероприятий.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default HackathonDescription;
