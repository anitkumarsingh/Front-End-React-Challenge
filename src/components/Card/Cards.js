import React from 'react';
import { withStyles,
         Card,
         CardContent,
         Typography 
        } from '@material-ui/core';

const styles = theme =>({
    cardContainer:{
     width:'50%',
     marginLeft:'auto',
     marginRight:'auto'
    },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Cards = ({ classes,payments }) =>{
  const bull = <span className={classes.bullet}><pre>   </pre></span>;
  console.log(payments);
  return (
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Results for your query
                </Typography>
                <Typography variant="h5" component="h2">
                    interestRate : {payments.interestRate}
                    {bull}
                    monthlyPayment : USD {payments.monthlyPayment.amount}
                    {bull}
                </Typography>
            </CardContent>
        </Card>
    </div>
  );
}
export default  withStyles(styles)(Cards);