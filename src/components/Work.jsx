import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

//Reference : https://mui.com/material-ui/react-card/
//https://mui.com/material-ui/react-typography/

const workexp = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'WeCracked',
    location: 'Remote',
    date: 'March 2024 – January 2025',
    description: [
      '- Developed a Next.js platform to efficiently help students track hackathons and major tech events.',
      '- Led a cross-functional team of 7 to launch the platform, achieving over 3K+ users within three months.',
      '- Developed a Discord AI support system to assist 2K+ weekly active users by generating RAG responses with Pinecone to common questions, improving user support and reducing the load on moderators.'
    ]
  },
  {
    id: 2,
    title: 'Software Engineer and Research Intern',
    company: 'USC ICT',
    location: 'Playa Vista, CA',
    date: 'June 2022 – August 2022',
    description: [
      '- Built interactive web-authoring tools using React.js for a DoD-funded platform supporting a secure CMS system.',
      '- Engineered testing pipelines with Cypress testing, ensuring code coverage and improving software reliability.',
      '- Accelerated NLP workflows by optimizing Python scripts for large-scale sentence permutation generations.',
      '- Implemented a pipeline to streamline processing of over 200+ military training video and audio datasets, extracting actionable insights for an Army-sponsored machine learning research initiative.'
    ]
  },
  {
    id: 3,
    title: 'Undergraduate Student Researcher',
    company: 'California State University, Fullerton',
    location: 'Fullerton, CA',
    date: 'March 2022 - June 2022',
    description: [
      '- Analyzed research around cortisol Activity in Individuals within an Educational Institution.',
      '- Extrapolated datasets to classify and test cortisol levels using Python Pandas and NumPy'
    ]
  },
  {
    id: 4,
    title: 'Code Coach',
    company: 'theCoderSchool - Cerritos',
    location: 'Cerritos, CA',
    date: 'September 2019 - March 2022',
    description: [
      "- Worked in 2-On-1's and large class settings teaching students from K-12 programming and creating projects.",
      '- Maintained a flexible timeline of progress as progression is different per student.',
      '- Building customer loyalty through excellent customer service and lesson quality, resulting in multiple 5-star reviews.',
      '- Assisted in language translations for customers that spoke Mandarin Chinese.',
      '- Fostered a teaching environment that successfully helped students get first place in theCoderSchool nationwide competition'
    ]
  }
]

const card = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-8 px-12 sm:px-0">
      {workexp.map(({ id, title, company, location, date, description }) => (
        <div key={id}>
          <Card
            sx={{
              minWidth: 275,
              backgroundColor: 'transparent',
              border: 1,
              borderColor: 'gray'
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" color="white">
                {title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="white">
                {company}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                {location}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                {date}
              </Typography>
              <Typography variant="body2" color="white">
                {description.map(d => {
                  return <div key={d}> {d}</div>
                })}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

const WorkExperience = () => {
  return (
    <div
      name="work"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work Experience
          </p>
        </div>

        {card()}
      </div>
    </div>
  )
}

export default WorkExperience
