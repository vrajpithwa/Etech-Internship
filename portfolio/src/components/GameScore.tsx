import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';

// Define the type for the fetched data
interface ScoreData {
  id: number;
  player_name: string;
  score: number;
  created_at: string;
}

interface DataTableProps {
  refreshData: boolean;
}

const DataTable: React.FC<DataTableProps> = ({ refreshData }) => {
  const [rows, setRows] = useState<ScoreData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'player_name', headerName: 'Player Name', width: 150 },
    { field: 'score', headerName: 'Score', width: 100 },
    { 
      field: 'created_at', 
      headerName: 'Time', 
      width: 200  
    },
  ];

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get<ScoreData[]>('http://localhost:3000/api/score');
      setRows(response.data);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshData]);

  return (
    <Container>
      <h1>Score Board</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
        />
      </div>
    </Container>
  );
};

export default DataTable;