import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const WorkExperience = () => {
    const workexp = [
      {
        id: 1,
        title: 'Code Coach',
        company: 'theCoderSchool - Cerritos, CA',
        date: 'September 2019 - March 2022',
      },
      {
        id: 2,
        src: csuf,
        link: 'https://github.com/jllewis11/titan-talks-2.0'
      },
      {
        id: 3,
        src: lessons,
        link: 'https://github.com/jllewis11/Python-Project-Lessons'
      },
      {
        id: 4,
        src: workle,
        link: 'https://github.com/jllewis11/WorkleV3'
      },
      {
        id: 5,
        src: dsgo,
        link: 'https://github.com/jllewis11/Data-Structures-in-Go'
      },
      {
        id: 6,
        src: portfolio,
        link: 'https://github.com/jllewis11/jllewis11.github.io'
      }
    ]


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
