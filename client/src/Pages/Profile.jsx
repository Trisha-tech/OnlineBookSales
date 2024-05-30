import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box, Typography, Button, CircularProgress, Paper } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:8080/customer/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log(response);
          setUser(response.data.customer);
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <Typography variant="h6">User not found</Typography>
      </Box>
    );
  }

  const avatarText = `${user.name[0]}${user.name.split(' ').slice(-1)[0][0]}`;

  return (
    <Box className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg">
      <Paper elevation={3} className="p-6">
        <Box className="flex items-center space-x-6 mb-8">
          <Avatar sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}>
            {avatarText}
          </Avatar>
          <Box>
            <Typography variant="h4" component="h1" className="text-gray-900 font-bold">
              {user.name}
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              {user.email}
            </Typography>
          </Box>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Box className="p-4 bg-gray-100 rounded-lg shadow">
            <Typography variant="h6" className="text-gray-700 font-semibold">
              Address
            </Typography>
            <Typography variant="body1" className="text-gray-900">
              {user.address}
            </Typography>
          </Box>
          <Box className="p-4 bg-gray-100 rounded-lg shadow">
            <Typography variant="h6" className="text-gray-700 font-semibold">
              Phone
            </Typography>
            <Typography variant="body1" className="text-gray-900">
              {user.phone}
            </Typography>
          </Box>
          <Box className="p-4 bg-gray-100 rounded-lg shadow">
            <Typography variant="h6" className="text-gray-700 font-semibold">
              Role
            </Typography>
            <Typography variant="body1" className="text-gray-900">
              {user.role}
            </Typography>
          </Box>
        </Box>
        <Button variant="contained" color="primary" className="mt-6" sx={{ mt: 4 }}>
          Edit Profile
        </Button>
      </Paper>
    </Box>
  );
};

export default Profile;
