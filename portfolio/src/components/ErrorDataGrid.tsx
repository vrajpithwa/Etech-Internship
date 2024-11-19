import * as React from 'react';
import { DataGrid, GridColDef, } from '@mui/x-data-grid';
import { errorHandler } from './ErrorHandler';

interface ErrorData {
  id: number;
  message: string;
  stack: string;
  timestamp?: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'message', headerName: 'Message', width: 300 },
  { field: 'stack', headerName: 'Stack', width: 400 },
  {
    field: 'timestamp',
    headerName: 'Timestamp',
    width: 200,
    valueFormatter: () => {
        return new Date().toLocaleString();
    },
  },
];

const ErrorDataGrid: React.FC = () => {
  const [errors, setErrors] = React.useState<ErrorData[]>([]);

  React.useEffect(() => {
    const storedErrors = localStorage.getItem('errors');
    if (storedErrors) {
      try {
        const parsedErrors: ErrorData[] = JSON.parse(storedErrors);
        setErrors(parsedErrors);
      } catch (error) {
        console.error('Error parsing stored errors:', error);
      }
    }

    const handleNewError = (error: ErrorData) => {
      setErrors((prevErrors) => [...prevErrors, error]);
    };

    errorHandler.addListener(handleNewError);

    return () => {
      errorHandler.removeListener(handleNewError);
    };
  }, []);

  const handleClearErrors = () => {
    localStorage.removeItem('errors');
    setErrors([]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <button>Open dailog</button>
        <h2 className="text-xl font-semibold">Error Log</h2>
        <button
          onClick={handleClearErrors}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear Errors
        </button>
      </div>
      <div style={{ height: 1000, width: '100%' }}>
        <DataGrid
          rows={errors}
          columns={columns}
          getRowId={(row) => row.id}
          initialState={{
            pagination: { paginationModel: { pageSize: 25 } },
          }}
          pageSizeOptions={[5, 10, 25, 50, 100, 250]}
          checkboxSelection
        />
      </div>

    </div>
  );
};

export default ErrorDataGrid;
