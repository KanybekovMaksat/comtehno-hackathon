import { Card, CardContent, Typography, Box } from "@mui/material";

const HackathonDescription = () => {
  return (
    <section>
      <div className="container my-20">
        <Box className="flex gap-5 flex-col md:flex-row">
          <Box className="flex gap-5 flex-col md:flex-row">
            <img
              src="/Rectangle 601 (2).png"
              alt="Hackathon"
              className="h-[200px]"
            />
            <Card className="bg-[#eddd9f] p-2 rounded-sm">
              <CardContent>
                <Typography variant="h5" className="font-bold text-xl">
                  Сроки регистрации
                </Typography>
                <Typography variant="body1" className="font-serif">
                  С 10 октября по <br /> 25 октября
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Typography variant="h5" className="font-medium font-serif">
              Темы хакатона:
            </Typography>
            <ul className="list-disc pl-5 mt-3">
              <li>Экология и благоустройство города</li>
              <li>Здоровый образ жизни</li>
            </ul>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default HackathonDescription;
