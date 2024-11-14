import React, { useEffect, useState } from 'react';
import { Container, Button, Modal, TextField, Box, CircularProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';

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
  const [editRow, setEditRow] = useState<ScoreData | null>(null);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<number | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get<ScoreData[]>('http://localhost:3000/api/score');
      setRows(response.data);
    } catch (error) {
      setError('Error fetching data. Please try again later.');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshData]);

  const validateEditData = (data: ScoreData): string | null => {
    if (!data.player_name.trim()) {
      return 'Player name is required';
    }
    if (data.score < 0) {
      return 'Score must be a positive number';
    }
    return null;
  };

  const handleEdit = (row: ScoreData) => {
    setEditRow(row);
    setOpenEditModal(true);
    setError('');
  };

  const handleSaveEdit = async () => {
    if (!editRow) return;

    const validationError = validateEditData(editRow);
    if (validationError) {
      setError(validationError);
      return;
    }

    setSaveLoading(true);
    setError('');

    try {
      const response = await axios.put<ScoreData>(
        `http://localhost:3000/api/score/${editRow.id}`,
        editRow
      );
      
      setRows(rows.map((row) => (row.id === editRow.id ? response.data : row)));
      setOpenEditModal(false);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Error updating data. Please try again.');
      console.error('Error updating data:', error);
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this score?')) {
      return;
    }

    setDeleteLoading(id);
    setError('');

    try {
      await axios.delete(`http://localhost:3000/api/score/${id}`);
      setRows(rows.filter((row) => row.id !== id));
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Error deleting data. Please try again.';
      setError(errorMessage);
      console.error('Error deleting data:', error);
    } finally {
      setDeleteLoading(null);
    }
  };

  const handleCloseModal = () => {
    setOpenEditModal(false);
    setError('');
    setEditRow(null);
  };

  const columns: GridColDef[] = [

    { field: 'player_name', headerName: 'Player Name', width: 150 },
    { field: 'score', headerName: 'Score', width: 100 },
    { field: 'created_at', headerName: 'Time', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row)}
            style={{ marginRight: 8 }}
            disabled={deleteLoading === params.row.id}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(params.row.id)}
            disabled={deleteLoading === params.row.id}
          >
            {deleteLoading === params.row.id ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              'Delete'
            )}
          </Button>
        </div>
      ),
    },
  ];

  return (
 <>
      <h1>Score Board</h1>
      {error && (
        <div style={{ color: 'red', marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#ffebee' }}>
          {error}
        </div>
      )}
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

      <Modal open={openEditModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '80vw', sm: '60vw', md: '40vw' },
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Edit Score</h2>
          {error && (
            <div style={{ color: 'red', marginBottom: '1rem' }}>
              {error}
            </div>
          )}
          <TextField
            label="Player Name"
            value={editRow?.player_name || ''}
            onChange={(e) =>
              setEditRow((prev) => (prev ? { ...prev, player_name: e.target.value } : prev))
            }
            fullWidth
            margin="normal"
            disabled={saveLoading}
          />
          <TextField
            label="Score"
            type="number"
            value={editRow?.score || ''}
            onChange={(e) =>
              setEditRow((prev) => (prev ? { ...prev, score: Number(e.target.value) } : prev))
            }
            fullWidth
            margin="normal"
            disabled={saveLoading}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveEdit}
            sx={{ mt: 2 }}
            disabled={saveLoading}
          >
            {saveLoading ? <CircularProgress size={24} color="inherit" /> : 'Save'}
          </Button>
        </Box>
      </Modal>
      </>
  );
};

export default DataTable;
