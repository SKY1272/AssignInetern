import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Second1.css'
import DepartmentList from './DepartmentList'
function Second1() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1 className="header">API DATA Page</h1>
      <DataGrid rows={posts} columns={columns} />
      <DepartmentList />
    </div>
  );
}

export default Second1;




