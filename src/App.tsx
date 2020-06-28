import React from 'react';
import { makeStyles, Box, Typography, Grid } from '@material-ui/core';
import PrimaryDataContainer from './components/primaryDataContainer';
import SecondaryDataContainer from './components/secondaryDataContainer'
import './App.css';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    padding: '56px 250px',
    //TODO: On large screen?
    // maxWidth: '40%'
  },
  rootTop: {
    marginLeft: 70,
    marginBottom: 16,
    display: 'flex'
  },
  rootTopRight: {
    width: '50%',
  },
  rootTopLeft: {
    width: '50%'
  },
  rootMiddle: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 70
  },
  rootBottom: {
    marginLeft: 70
  },
  dashBoardTitle: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 32
  },
  totalFollowersText: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 14,
    color: 'gray'
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    right: 40,
    top: 20
  },
  toggleBackground: {
    width: 50,
    height: 22,
    backgroundColor: '#AEB3CB',
    borderRadius: 20,
  },
  toggleCircle: {
    backgroundColor: 'white',
    borderRadius: '50%',
    width: 15,
    height: 15,
    margin: '3px 3px 0px 3px',
    float: 'right'
  },
  darkModeText: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 14,
    color: 'gray',
    margin: '2px 16px 0px 0px'
  },
  overviewText: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 26,
    color: 'gray',
    marginBottom: 20
  },
  secondaryDataContainerRow: {
    marginBottom: 16
  }
})

function App() {

  let classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.rootTop}>
        <div className={classes.rootTopLeft}>
          <Typography className={classes.dashBoardTitle}>Social Media Dashboard</Typography>
          <Typography className={classes.totalFollowersText} >Total followers: 23,004</Typography>
        </div>
        <div className={classes.rootTopRight}>
          <Box className={classes.toggleContainer}>
            <Typography className={classes.darkModeText}>Dark Mode</Typography>
            <div className={classes.toggleBackground}>
              <div className={classes.toggleCircle} />
            </div>
          </Box>
        </div>
      </div>
      <div className={classes.rootMiddle}>
        <PrimaryDataContainer
          borderTopColor='#198FF5'
          dataNumber={1987}
          dataUnit={'FOLLOWERS'}
          accountIcon='Facebook'
          userAccount='@nathanf'
          changeType='Gain'
          changeAmount={12}
        />
        <PrimaryDataContainer
          borderTopColor='#1CA0F2'
          dataNumber={1044}
          dataUnit={'FOLLOWERS'}
          accountIcon='Twitter'
          userAccount='@nathanf'
          changeType='Gain'
          changeAmount={99}
        />
        <PrimaryDataContainer
          borderTopColor='#C4032A'
          dataNumber={11000}
          dataUnit={'FOLLOWERS'}
          accountIcon='Instagram'
          userAccount='@realnathanf'
          changeType='Gain'
          changeAmount={1099}
        />
        <PrimaryDataContainer
          borderTopColor='#C4032A'
          dataNumber={8239}
          dataUnit={'SUBSCRIBERS'}
          accountIcon='Youtube'
          userAccount='Nathan F.'
          changeType='Loss'
          changeAmount={144}
        />
      </div>
      <div className={classes.rootBottom}>
        <Typography className={classes.overviewText}>Overview - Today</Typography>
        <Grid className={classes.secondaryDataContainerRow} container spacing={3}>
          <Grid item xs={3}>
            <SecondaryDataContainer
              title='Page Views'
              dataNumber={87}
              accountIcon='Facebook'
              changeType='Gain'
              changePercentage={3}
            />
          </Grid>
          <Grid item xs={3}>
            <SecondaryDataContainer
              title='Likes'
              dataNumber={52}
              accountIcon='Facebook'
              changeType='Loss'
              changePercentage={2}
            />
          </Grid>
          <Grid item xs={3}>
            <SecondaryDataContainer
              title='Likes'
              dataNumber={542}
              accountIcon='Instagram'
              changeType='Gain'
              changePercentage={2257}
            />
          </Grid>
          <Grid item xs={3}>
            <SecondaryDataContainer
              title='Profile Views'
              dataNumber={52000}
              accountIcon='Instagram'
              changeType='Gain'
              changePercentage={1375}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SecondaryDataContainer
              title='Retweets'
              dataNumber={117}
              accountIcon='Twitter'
              changeType='Gain'
              changePercentage={303}
            />
          </Grid>
          <Grid item xs={3}>
            <SecondaryDataContainer
              title='Likes'
              dataNumber={507}
              accountIcon='Twitter'
              changeType='Gain'
              changePercentage={553}
            />
          </Grid>
          <Grid item xs={3}>
            <SecondaryDataContainer
              title='Likes'
              dataNumber={107}
              accountIcon='Youtube'
              changeType='Loss'
              changePercentage={19}
            />
          </Grid>
          <Grid item xs={3}>
            <SecondaryDataContainer
              title='Total views'
              dataNumber={1407}
              accountIcon='Youtube'
              changeType='Loss'
              changePercentage={12}
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default App;
