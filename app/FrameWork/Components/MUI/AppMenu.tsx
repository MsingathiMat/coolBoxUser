import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Heart, Home, Menu, Pen, Speaker, Users } from 'lucide-react';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 300 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: 'transparent',
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<Home size={15} />}
          sx={{
            color: 'gray',
            '&.Mui-selected': {
              color: '#f3012d',
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '12px',
              color: 'gray',
              '&.Mui-selected': {
                color: '#f3012d',
              },
            },
          }}
        />
        <BottomNavigationAction
          label="Events"
          icon={<Speaker size={15} />}
          sx={{
            color: 'gray',
            '&.Mui-selected': {
              color: '#f3012d',
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '12px',
              color: 'gray',
              '&.Mui-selected': {
                color: '#f3012d',
              },
            },
          }}
        />
        <BottomNavigationAction
          label="DJ's"
          icon={<Users size={15} />}
          sx={{
            color: 'gray',
            '&.Mui-selected': {
              color: '#f3012d',
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '12px',
              color: 'gray',
              '&.Mui-selected': {
                color: '#f3012d',
              },
            },
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
