import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box, Typography, Button, CircularProgress, Paper, TextField, Grid, MenuItem, Rating } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookDetails, setBookDetails] = useState({
    name: '',
    author: '',
    price: '',
    description: '',
    category: '',
    stock: 1,
    ratings: 0,
    shareableLink: '',
    image: { public_id: '', url: '' },
  });
  const [formLoading, setFormLoading] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({
      ...bookDetails,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({
      ...bookDetails,
      image: {
        ...bookDetails.image,
        [name]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('http://localhost:8080/product/oldBook/product/new', bookDetails, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Book listed successfully:', response.data);
      setBookDetails({
        name: '',
        author: '',
        price: '',
        description: '',
        category: '',
        stock: 1,
        ratings: 0,
        shareableLink: '',
        image: { public_id: '', url: '' },
      });
    } catch (error) {
      console.error('Error listing book:', error);
    } finally {
      setFormLoading(false);
    }
  };

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

      <Paper elevation={3} className="p-6 mt-6">
        <Typography variant="h5" component="h2" className="text-gray-900 font-bold mb-4">
          Sell Your Old Book
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Book Name"
                name="name"
                value={bookDetails.name}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Author"
                name="author"
                value={bookDetails.author}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Price"
                name="price"
                value={bookDetails.price}
                onChange={handleInputChange}
                type="number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={bookDetails.description}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Category"
                name="category"
                value={bookDetails.category}
                onChange={handleInputChange}
                fullWidth
                required
                select
              >
                {/* Add your categories here */}
                <MenuItem value="Fiction">Fiction</MenuItem>
                <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
                <MenuItem value="Romance">Romance</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                {/* Add more categories as needed */}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Stock"
                name="stock"
                value={bookDetails.stock}
                onChange={handleInputChange}
                type="number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="legend">Ratings</Typography>
              <Rating
                name="ratings"
                value={bookDetails.ratings}
                onChange={(event, newValue) => setBookDetails({ ...bookDetails, ratings: newValue })}
                precision={0.5}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Shareable Link"
                name="shareableLink"
                value={bookDetails.shareableLink}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Image Public ID"
                name="public_id"
                value={bookDetails.image.public_id}
                onChange={handleImageChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Image URL"
                name="url"
                value={bookDetails.image.url}
                onChange={handleImageChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth disabled={formLoading}>
                {formLoading ? <CircularProgress size={24} /> : 'Submit'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Profile;
