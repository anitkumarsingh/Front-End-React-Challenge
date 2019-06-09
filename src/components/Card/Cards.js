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
    boxShadow: '12px 15px 20px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      opacity:'0.7',
      boxShadow: '12px 15px 20px rgba(0, 0, 0, 0.1)',
      transition: "0.2s box-shadow ease-in-out, 0.2s background-color ease-in-out, 0.2s border-color ease-in-out"
    },
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
                <Typography className={[classes.title,'text-center'].join(' ')} color="textSecondary" gutterBottom>
                    Results for your query
                </Typography>
                <Typography variant="h5" component="h2" className='text-center'>
                    Interest Rate : {payments.interestRate}
                    {bull}
                    Monthly Payment : $ {payments.monthlyPayment.amount}
                    {bull}
                </Typography>
            </CardContent>
        </Card>
    </div>
  );
}
export default  withStyles(styles)(Cards);