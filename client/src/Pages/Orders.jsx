import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  // InputAdornment,
  IconButton,
  Button,
  Box,
  // MenuItem,
  // InputLabel,
} from "@mui/material";
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import RefreshIcon from "@mui/icons-material/Refresh";
import Preloader from "../Components/Preloader";
import { useAuth } from "../Context/AuthContext";
import { useToast } from "../Context/ToastContext";
import { useNavigate } from "react-router-dom";

function OrderList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [hidden, setHidden] = useState(true);

  const { userLoggedIn } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/orders");
      setData(response.data);
    } catch (error) {
      console.error("There was an error fetching the orders!", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!userLoggedIn) {
      showToast("error", "Please login to view your orders.", undefined, 7000);
      setTimeout(() => {
        navigate("/login");
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  // }, [userLoggedIn]);
}, [userLoggedIn, showToast, navigate]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = () => {
    setHidden(!hidden);
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.item.localeCompare(b.item);
      }
      return b.item.localeCompare(a.item);
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredData = data.filter((order) =>
    order.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Preloader />
    <Container maxWidth="lg" className="mt-4">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>

        <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
            <input 
                placeholder="Search Orders"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-3 bg-transparent border border-black rounded-md dark:text-white"
                margin="normal"
            />
            <IconButton sx={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}>
              <SearchIcon />
            </IconButton>
        </Box>

        <span className="relative">
          <Button variant="contained" startIcon={<SortIcon />} onClick={handleSort}>
            Sort
          </Button>
          {
            !hidden && <div className="options absolute top-[100%] text-black flex flex-col mt-1 rounded-lg bg-[#1976d2] border-gray-500 w-[150px] items-center" >
              <span className="p-1 text-white cursor-pointer w-auto h-full flex justify-center">
                <span className="w-auto h-full hover:bg-[#1565c0] text-center">Price: high to low</span>
              </span>
              <span className="p-1 text-white cursor-pointer w-auto h-full flex justify-center">
                <span className="w-auto h-full hover:bg-[#1565c0] text-center">Price: low to high</span>
              </span>
              <span className="p-1 text-white cursor-pointer w-auto h-full flex justify-center">
                <span className="w-auto h-full hover:bg-[#1565c0] text-center">Date: high to low</span>
              </span>
              <span className="p-1 text-white cursor-pointer w-auto h-full flex justify-center">
                <span className="w-auto h-full hover:bg-[#1565c0] text-center">Date: low to high</span>
              </span>
              <span className="p-1 text-white cursor-pointer w-auto h-full flex justify-center">
                <span className="w-auto h-full hover:bg-[#1565c0] text-center">Alphabatical: A-Z</span>
              </span>
              <span className="p-1 text-white cursor-pointer w-auto h-full flex justify-center">
                <span className="w-auto h-full hover:bg-[#1565c0] text-center">Alphabetical: Z-A</span>
              </span>
            </div>
          }
        </span>
        <IconButton onClick={fetchData}>
          <RefreshIcon />
        </IconButton>
      </Box>
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress />
        </Box>
      ) : (
        <>
          {
            filteredData.length === 0 ? (
              <div className="h-[50vh] mb-4 w-full flex justify-center items-center flex-col">
                <div className=" dark:text-white">You Haven't Orderd Something yet.</div>
                <Link to="/shop" className="underline hover:text-blue-600 dark:text-white">Order Now</Link>
              </div>
            ) : (
              <>
              <TableContainer component={Paper} className="mb-4">
                <Table>
                  <TableHead>
                    <TableRow className="">
                      <TableCell>Order ID</TableCell>
                      <TableCell>Item</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {
                    filteredData.map((order) => (
                      <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.item}</TableCell>
                      </TableRow>
                    ))
                  }
                  </TableBody>
                </Table>
              </TableContainer>
              </>
            )
          }
        </>
      )}
    </Container>
    </>
  );
}

function OrderTracking() {
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState(null);

  const handleTrackOrder = () => {
    setIsLoading(true);
    // Simulate a fetch call to backend to get order status
    setTimeout(() => {
      // Simulate order data
      const mockOrderData = {
        id: orderId,
        status: "Shipped",
        expectedDelivery: "2024-07-10",
      };
      setOrderData(mockOrderData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <TextField
          label="Enter Order ID"
          variant="outlined"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleTrackOrder}
          disabled={isLoading}
          style={{ marginTop: 16 }}
        >
          Track Order
        </Button>
        {isLoading && (
          <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <CircularProgress />
          </Box>
        )}
        {!isLoading && orderData && (
          <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
            <h3 className="dark:text-white">Order ID: {orderData.id}</h3>
            <p className="dark:text-white">Status: {orderData.status}</p>
            <p className="dark:text-white">Expected Delivery: {orderData.expectedDelivery}</p>
          </Paper>
        )}
        {!isLoading && !orderData && (
          <p style={{ marginTop: 16 }} className="dark:text-white">Please enter an Order ID to track your order.</p>
        )}
      </Box>
    </Container>
  );
}

export { OrderList, OrderTracking };
