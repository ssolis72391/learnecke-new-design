import React from 'react';
import { Button, Paper, Stack, Typography } from '@mui/material';
// import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';
import useStyles from './DashboardStyles';

const chartData = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 2 },
  { country: 'Others', area: 55 },
];

const StudentDashboard = function (props) {
  const classes = useStyles();

  return (
    <Stack className={classes.dashboardRoot} spacing={5} pt={4}>
      <Stack direction='row' spacing={5}>
        <Stack direction='row' spacing={2.5} bgcolor='white' width={310} height={104} p={1.5} borderRadius='1px'>
          {/* <Chart height='80px' width='80px' data={chartData}>
            <PieSeries valueField='area' argumentField='country' />
            <Title text='COURSE COMPLETION' />
            <Animation />
          </Chart> */}
        </Stack>
      </Stack>

      <Stack bgcolor='grey.main' spacing={2} width='100%' p={5} borderRadius={1}>
        <Typography variant='h1'>Hello Student!</Typography>

        <Stack direction='row' spacing={2.5}>
          <Stack spacing={2.5}>
            <Stack bgcolor='white' border='1px solid rgba(0, 0, 0, 0.12)' p={2.5}>
              <Typography variant='h3'>Announcements</Typography>
              <Typography variant='body' pt={1.25}>
                Any daily announcements from the teacher could go here. Maybe this is where the student is notified of
                new quizzes assigned for them, new coursework, and new articles available to them.
              </Typography>
            </Stack>
            <Stack bgcolor='white' border='1px solid rgba(0, 0, 0, 0.12)' spacing={1} p={1.5}>
              <Stack bgcolor='green.secondary' p={1}>
                <Typography variant='h5'>You’re currently passing this course</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack width='100%' maxWidth={335} spacing={2.5}>
            <Stack bgcolor='white' border='1px solid rgba(0, 0, 0, 0.12)' spacing={1} p={1.5}>
              <Typography variant='h6'>Your Certificate Is Available!</Typography>
              <Typography variant='bodyS'>
                Showcase your accomplishments on LinkedIn or your resume today. You can download your certificate now
                and access it any time from your Dashboard and Profile.
              </Typography>
              <Button variant='contained' sx={{ borderRadius: '0', height: 40 }}>
                VIEW YOUR CERTIFICATE
              </Button>
            </Stack>
            <Stack bgcolor='white' border='1px solid rgba(0, 0, 0, 0.12)' spacing={1} p={1.5}>
              <Stack>
                <Typography variant='bodyXSItalic'>Course Section</Typography>
                <Typography variant='h6'>Section Header/Content</Typography>
              </Stack>
              <Typography variant='body'>
                <Typography component='span' variant='h5'>
                  @instructor
                </Typography>
                &nbsp; This is a comment to the instructor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography color='#D2AF39' variant='h5'>
                <Typography component='span' variant='h6'>
                  @student
                </Typography>
                &nbsp; This is the response from the instructor. This is details on what you need to do. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.Fusce consequat elementum diam non bibendum.
              </Typography>
            </Stack>
            <Stack bgcolor='white' border='1px solid rgba(0, 0, 0, 0.12)' spacing={1} p={1.5}>
              <Typography variant='h6'>Assignment Summary</Typography>
              <Typography variant='bodyS'>Assignment here </Typography>
              <br />
              <Typography color='red' variant='bodyS'>
                Assignment due date
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StudentDashboard;
