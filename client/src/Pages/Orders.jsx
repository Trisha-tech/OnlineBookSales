import { useState, useEffect } from "react";

import axios from "axios";
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
    InputAdornment,
    IconButton,
    Button,
    Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import RefreshIcon from "@mui/icons-material/Refresh";

function Orders() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

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

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = () => {
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
        <Container maxWidth="lg">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <TextField
                    label="Search Orders"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearch}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    variant="contained"
                    startIcon={<SortIcon />}
                    onClick={handleSort}
                >
                    Sort
                </Button>
                <IconButton onClick={fetchData}>
                    <RefreshIcon />
                </IconButton>
            </Box>
            {isLoading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
                    <CircularProgress />
                </Box>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Item</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell>{order.id}</TableCell>
                                    <TableCell>{order.item}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );

import Spinner from "./Spinner";

function Orders() {
  const [isLoading, setIsLoading] = useState(true);
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Simulate a fetch call to backend to check initial loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleTrackOrder = () => {
    setIsLoading(true);
    // Simulate a fetch call to backend to get order status
    setTimeout(() => {
      // Simulate order data
      const mockOrderData = {
        id: orderId,
        status: "Shipped",
        expectedDelivery: "2024-07-10"
      };
      setOrderData(mockOrderData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Tracking</h2>
      
      <div className="mb-4">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID"
          className="appearance-none bg-transparent border border-gray-300 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleTrackOrder}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Track Order
        </button>
      </div>

      {isLoading && <Spinner />}

      {!isLoading && orderData && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Order ID: {orderData.id}</h3>
          <p className="text-gray-600">Status: {orderData.status}</p>
          <p className="text-gray-600">Expected Delivery: {orderData.expectedDelivery}</p>
        </div>
      )}
      
      {!isLoading && !orderData && (
        <p className="text-gray-600">Please enter an Order ID to track your order.</p>
      )}
    </div>
  );

}

export default Orders;
