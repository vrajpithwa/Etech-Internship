import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios'; // Or you can use `fetch`

// Define the type for the fetched data
interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const DataTable: React.FC = () => {
  const [rows, setRows] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Define columns for the DataGrid
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'player_name', headerName: 'Player_name', width: 150 },
    { field: 'score', headerName: 'Score', width: 200 },
    { field: 'created_at', headerName: 'Time', width: 150 },
  ];

  
  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get<UserData[]>('http://localhost:3000/users');
        setRows(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const interval = setInterval(() => {
        fetchData(); // Fetch data periodically
      }, 2000);
      return () => clearInterval(interval);
    
  }, []);

  return (
    <Container>
      <h1>Score Board</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
        />
      </div>
    </Container>
  );
};

export default DataTable;
