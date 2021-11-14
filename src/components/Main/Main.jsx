import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
// import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
// import List from './List/List';
// import InfoCard from '../InfoCard';

const ExpenseTracker = () => {
  const classes = useStyles(); //using them as hook
  // const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Voice Powered" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance $100</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          {/* <InfoCard /> */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus quis debitis accusantium
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
