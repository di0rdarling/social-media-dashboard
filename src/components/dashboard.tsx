import React, { useState } from 'react';
import { makeStyles, Box, Typography, Grid, IconButton, Theme, createStyles } from '@material-ui/core';
import PrimaryDataContainer from './primaryDataContainer';
import SecondaryDataContainer from './secondaryDataContainer'
import styled from 'styled-components';
import { useThemeState, useThemeDispatch } from '../context/themeContext';

const useStyles = makeStyles({

    root: {
        justifyContent: 'center',
        display: 'flex'
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
        marginBottom: 70,
        marginLeft: 23
    },
    rootBottom: {
        marginLeft: 70
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
        paddingTop: 2,
    },
    toggleBackgroundDarkMode: {
        width: 50,
        height: 22,
        backgroundColor: '#AEB3CB',
        borderRadius: 20,
        textAlign: 'right',
        paddingTop: 2,
        background: 'linear-gradient(90deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%)'
    },
    toggleCircle: {
        backgroundColor: 'white',
        borderRadius: '50%',
        width: 15,
        height: 15,
        float: 'right'
    },
    darkModeText: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 14,
        color: 'gray',
        margin: '2px 16px 0px 0px'
    },
    secondaryDataContainerRow: {
        marginBottom: 16
    }
})

const Background = styled('div') <{ backgroundColour: string }>`
    padding: 56px 250px;
    background-color: ${props => props.backgroundColour};
    height: 100vh
`;

const DashBoardTitle = styled('p') <{ textColor: string }>`
    color: ${props => props.textColor};
    font-family: Inter;
    font-weight: 700;
    font-size: 32px;
    margin: 10px 0px;
`;

const TotalFollowersText = styled('p') <{ textColor: string }>`
    color: ${props => props.textColor};
    font-family: Inter;
    font-weight: 700;
    font-size: 14px;
    margin: 0px;
`;

const OverviewText = styled('p') <{ textColor: string }>`
    color: ${props => props.textColor};
    font-family: Inter;
    font-weight: 700;
    font-size: 26px;
    marginBottom: 20px;
`;

export default function Dashboard() {

    let classes = useStyles();
    let theme = useThemeState();
    let themeDispatch = useThemeDispatch();
    let [darkMode, setDarkModeOn] = useState<boolean>(false);

    const toggleTheme = () => {
        console.log(theme.backgroundColour)
        if (!darkMode) {
            themeDispatch({
                type: 'toggle dark mode',
                active: true
            })
            console.log(theme.backgroundColour)
            setDarkModeOn(true);
        }
        else {
            themeDispatch({
                type: 'toggle dark mode',
                active: false
            })
            setDarkModeOn(false);

        }
    }

    return (
        <Box className={classes.root}>
            <Background backgroundColour={theme.backgroundColour}>
                <Box>
                    <div className={classes.rootTop}>
                        <div className={classes.rootTopLeft}>
                            <DashBoardTitle textColor={theme.primaryTextColor}>Social Media Dashboard</DashBoardTitle>
                            <TotalFollowersText textColor={theme.secondaryTextColor} >Total followers: 23,004</TotalFollowersText>
                        </div>
                        <div className={classes.rootTopRight}>
                            <Box className={classes.toggleContainer}>
                                <Typography className={classes.darkModeText}>Dark Mode</Typography>
                                <div className={darkMode ? classes.toggleBackgroundDarkMode : classes.toggleBackground}>
                                    <IconButton onClick={() => toggleTheme()} size='small'>
                                        <div className={classes.toggleCircle} />
                                    </IconButton>
                                </div>
                            </Box>
                        </div>
                    </div>
                    <div className={classes.rootMiddle}>
                        <PrimaryDataContainer
                            borderTopColor='#198FF5'
                            dataNumber={'1987'}
                            dataUnit={'FOLLOWERS'}
                            accountIcon='Facebook'
                            userAccount='@shecodes'
                            changeType='Gain'
                            changeAmount={12}
                        />
                        <PrimaryDataContainer
                            borderTopColor='#1CA0F2'
                            dataNumber={'1044'}
                            dataUnit={'FOLLOWERS'}
                            accountIcon='Twitter'
                            userAccount='@shecodes'
                            changeType='Gain'
                            changeAmount={99}
                        />
                        <PrimaryDataContainer
                            borderTopColorGradient={{ colourOne: '#fdc468', colourTwo: '#df4996' }}
                            dataNumber={'11k'}
                            dataUnit={'FOLLOWERS'}
                            accountIcon='Instagram'
                            userAccount='@shecodes'
                            changeType='Gain'
                            changeAmount={1099}
                        />
                        <PrimaryDataContainer
                            borderTopColor='#C4032A'
                            dataNumber={'8239'}
                            dataUnit={'SUBSCRIBERS'}
                            accountIcon='Youtube'
                            userAccount='SheCodes'
                            changeType='Loss'
                            changeAmount={144}
                        />
                    </div>
                    <div className={classes.rootBottom}>
                        <OverviewText textColor={!darkMode ? theme.primaryTextColor : theme.secondaryTextColor}>Overview - Today</OverviewText>
                        <Grid className={classes.secondaryDataContainerRow} container spacing={3}>
                            <Grid item xs={3}>
                                <SecondaryDataContainer
                                    title='Page Views'
                                    dataNumber={'87'}
                                    accountIcon='Facebook'
                                    changeType='Gain'
                                    changePercentage={3}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <SecondaryDataContainer
                                    title='Likes'
                                    dataNumber={'52'}
                                    accountIcon='Facebook'
                                    changeType='Loss'
                                    changePercentage={2}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <SecondaryDataContainer
                                    title='Likes'
                                    dataNumber={'542'}
                                    accountIcon='Instagram'
                                    changeType='Gain'
                                    changePercentage={2257}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <SecondaryDataContainer
                                    title='Profile Views'
                                    dataNumber={'52k'}
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
                                    dataNumber={'117'}
                                    accountIcon='Twitter'
                                    changeType='Gain'
                                    changePercentage={303}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <SecondaryDataContainer
                                    title='Likes'
                                    dataNumber={'507'}
                                    accountIcon='Twitter'
                                    changeType='Gain'
                                    changePercentage={553}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <SecondaryDataContainer
                                    title='Likes'
                                    dataNumber={'107'}
                                    accountIcon='Youtube'
                                    changeType='Loss'
                                    changePercentage={19}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <SecondaryDataContainer
                                    title='Total views'
                                    dataNumber={'1407'}
                                    accountIcon='Youtube'
                                    changeType='Loss'
                                    changePercentage={12}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Background>
        </Box>
    );
}