import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Reference : https://mui.com/material-ui/react-card/
//https://mui.com/material-ui/react-typography/


const WorkExperience = () => {
    const workexp = [
      {
        id: 1,
        title: 'Code Coach - Part-Time',
        company: 'theCoderSchool - Cerritos, CA',
        date: 'September 2019 - March 2022',
        description: "- Worked in 2-On-1's and large class settings teaching students from K-12 programming and creating projects.\n" +
        "- Maintained a flexible timeline of progress as progression is different per student.\n" +
        "- Building customer loyalty through excellent customer service and lesson quality, resulting in multiple 5-star reviews.\n" +
        "- Assisted in language translations for customers that spoke Mandarin Chinese.\n" +
        "- Fostered a teaching environment that successfully helped students get first place in theCoderSchool nationwide competition\n"
      },
      {
        id: 2,
        title: 'Undergraduate Student Researcher',
        company: 'California State University, Fullerton - Fullerton, CA',
        date: 'March 2022 - June 2022' ,
        description: "- Analyzed research around cortisol Activity in Individuals within an Educational Institution.\n" +
        "- Extrapolated datasets to classify and test cortisol levels using Python Pandas and NumPy\n"
      },
      {
        id: 3,
        title: 'Software Engineer and Research Intern',
        company: 'University of Southern California - Institute for Creative Technologies - Playa Vista, CA',
        date: 'June 2022 - August 2022',
        description: "- Expanded website capabilities of existing content registration portal to allow for web-authored content using React.js and Node.js.\n" +
        "- Implemented automated tests to ensure reliability and code quality with Cypress Testing Framework.\n" +
        "- Developed a Python script algorithm that determined permutations of sentences, increasing efficiency greatly. \n" +
        "- Analyzed video and audio data for a machine learning task evaluating a US Army fireteam’s performance.\n"
      }
    ]

  };
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
