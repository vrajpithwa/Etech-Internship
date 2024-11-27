// // import React, { useEffect, useState } from "react";
// // import { DataGrid, GridColDef } from "@mui/x-data-grid";
// // import { v4 as uuidv4 } from 'uuid';
// // import { Box, styled } from "@mui/material";
// // interface users {
// //     id: string;
// //     name: string;
// // }


// // const StyledGridOverlay = styled('div')(( ) => ({
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   height: '100%',
// //   '& .no-results-primary': {
// //     fill: '#3D4751',
// //   },
// //   '& .no-results-secondary': {
// //     fill: '#1D2126',
// //   },
// // }));

// // const StyledNoRowsOverlay: React.FC = () => {
// //   return (
// //     <StyledGridOverlay>
// //       <svg
// //         xmlns="http://www.w3.org/2000/svg"
// //         fill="none"
// //         width={96}
// //         viewBox="0 0 523 299"
// //         aria-hidden
// //         focusable="false"
// //       >
// //         <path
// //           className="no-results-primary"
// //           d="M262 20c-63.513 0-115 51.487-115 115s51.487 115 115 115 115-51.487 115-115S325.513 20 262 20ZM127 135C127 60.442 187.442 0 262 0c74.558 0 135 60.442 135 135 0 74.558-60.442 135-135 135-74.558 0-135-60.442-135-135Z"
// //         />
// //         <path
// //           className="no-results-primary"
// //           d="M348.929 224.929c3.905-3.905 10.237-3.905 14.142 0l56.569 56.568c3.905 3.906 3.905 10.237 0 14.143-3.906 3.905-10.237 3.905-14.143 0l-56.568-56.569c-3.905-3.905-3.905-10.237 0-14.142ZM212.929 85.929c3.905-3.905 10.237-3.905 14.142 0l84.853 84.853c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0l-84.853-84.853c-3.905-3.905-3.905-10.237 0-14.142Z"
// //         />
// //         <path
// //           className="no-results-primary"
// //           d="M212.929 185.071c-3.905-3.905-3.905-10.237 0-14.142l84.853-84.853c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-84.853 84.853c-3.905 3.905-10.237 3.905-14.142 0Z"
// //         />
// //         <path
// //           className="no-results-secondary"
// //           d="M0 43c0-5.523 4.477-10 10-10h100c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 53 0 48.523 0 43ZM0 89c0-5.523 4.477-10 10-10h80c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 99 0 94.523 0 89ZM0 135c0-5.523 4.477-10 10-10h74c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 181c0-5.523 4.477-10 10-10h80c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 227c0-5.523 4.477-10 10-10h100c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM523 227c0 5.523-4.477 10-10 10H413c-5.523 0-10-4.477-10-10s4.477-10 10-10h100c5.523 0 10 4.477 10 10ZM523 181c0 5.523-4.477 10-10 10h-80c-5.523 0-10-4.477-10-10s4.477-10 10-10h80c5.523 0 10 4.477 10 10ZM523 135c0 5.523-4.477 10-10 10h-74c-5.523 0-10-4.477-10-10s4.477-10 10-10h74c5.523 0 10 4.477 10 10ZM523 89c0 5.523-4.477 10-10 10h-80c-5.523 0-10-4.477-10-10s4.477-10 10-10h80c5.523 0 10 4.477 10 10ZM523 43c0 5.523-4.477 10-10 10H413c-5.523 0-10-4.477-10-10s4.477-10 10-10h100c5.523 0 10 4.477 10 10Z"
// //         />
// //       </svg>
// //       <Box sx={{ mt: 2 }}>No results found.</Box>
// //     </StyledGridOverlay>

// //   );
// // };

// // const UserDetails: React.FC = () => {
// //   const [rows, setRows] = useState<users[]>([]);
// //   const [loading, setLoading] = useState<boolean>(false);


 
  

// //   const columns: GridColDef[] = [
// //     { field: 'id', headerName: 'ID', width: 100 },
// //     { field: 'username', headerName: 'Name', width: 150 },
// //     { field: 'Actions', headerName: 'Actions', width: 150, },
    
// //   ];  

// //   return (
// //     <div className="p-5" style={{margin: 100}}> 
// //       <div style={{ height: 500, width: '100%' }}>
// //         <DataGrid
// //           rows={rows}
// //           columns={columns}
// //           loading={loading}
// //           slots={{
// //             noRowsOverlay: StyledNoRowsOverlay,
// //             noResultsOverlay: StyledNoRowsOverlay,
// //           }}
// //           initialState={{
// //             pagination: { paginationModel: { pageSize: 25 } },
// //           }}
// //           slotProps={{
// //             loadingOverlay: {
// //               variant: 'linear-progress',
// //             },
// //           }}
// //           pageSizeOptions={[5, 10, 25, 50, 100, 250]}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserDetails;

// import React, { useEffect, useState } from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// // import sql from "mssql";

// const UserDetails: React.FC = () => {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const config = {
//           user: "sa", // Your SQL Server username
//           password: "dockerStringPwd123", // Your SQL Server password
//           server: "localhost", // Replace with your SQL Server address
//           database: "etech", // Replace with your database name
//           port: 1433,
//           options: {
//             encrypt: false, // Set to true if using Azure
//           },
//         };

//         // Connect to the database
//         // const pool = await sql.connect(config);
//         // const result = await pool.request().query("SELECT * FROM users");
//         // setRows(result.recordset); // Use the recordset data for the DataGrid
//       } catch (error) {
//         console.error("Error connecting to the database:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const columns: GridColDef[] = [
//    { field: "id", headerName: "ID", width: 100 },
// ¯¯¯    { field: "username", headerName: "Username", width: 150 
//     { field: "password", headerName: "Password", width: 150 },
//     { field: "notes", headerName: "Notes", width: 200 },
//   ];

//   return (
//     <div style={{ height: 500, width: "100%" }}>
//       <DataGrid rows={rows} columns={columns} loading={loading} />
//     </div>
//   );
// };

// export default UserDetails;
