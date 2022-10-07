import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Reference : https://mui.com/material-ui/react-card/
//https://mui.com/material-ui/react-typography/

const workexp = [
  {
    id: 1,
    title: 'Code Coach',
    company: 'theCoderSchool - Cerritos',
    location: 'Cerritos, CA',
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
    company: 'California State University, Fullerton',
    location: 'Fullerton, CA',
    date: 'March 2022 - June 2022' ,
    description: "- Analyzed research around cortisol Activity in Individuals within an Educational Institution.\n" +
    "- Extrapolated datasets to classify and test cortisol levels using Python Pandas and NumPy\n"
  },
  {
    id: 3,
    title: 'Software Engineer and Research Intern',
    company: 'University of Southern California - Institute for Creative Technologies',
    location: 'Playa Vista, CA',
    date: 'June 2022 - August 2022',
    description: "- Expanded website capabilities of existing content registration portal to allow for web-authored content using React.js and Node.js.\n" +
    "- Implemented automated tests to ensure reliability and code quality with Cypress Testing Framework.\n" +
    "- Developed a Python script algorithm that determined permutations of sentences, increasing efficiency greatly. \n" +
    "- Analyzed video and audio data for a machine learning task evaluating a US Army fireteam’s performance.\n"
  }
];

const card = () => {
  return ( 
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
    {workexp.map(({ id, title, company, location, date, description }) => (
      <div key={id} >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {company}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {location}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {date}
            </Typography>
            <Typography variant="body2">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>
    ))}
    </div>
  );
};

const WorkExperience = () => {
    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
        
          {card()}
        </div>
      </div>
    )
}

export default WorkExperience;