import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
const Hw = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      
      <Typography variant="h5" component="div">
        MOVIES
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        (available movies)
      </Typography>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
       1.MOONFALL
      </Typography>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
       2.OPPENHIEMER
      </Typography>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
       3.FINCH
      </Typography>
    </CardContent>
    <CardActions>
      
        <Button size="small">Book Now</Button>
      </CardActions>
  </Card>
  )
}

export default Hw