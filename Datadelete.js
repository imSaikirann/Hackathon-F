import React, { useState, useEffect } from "react";
import axios from "axios";

const MyTable = () => {
  const [data, setData] = useState([]);
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    fetchData();
    getAllUsers();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("api/data");
    setData(result.data);
    console.log(data)
  };

  const handleEdit = (item) => {
    setEditingData(item);
  };

  const handleSave = async () => {
    await axios.put(`api/data/${editingData._id}`, editingData);
    setEditingData(null);
    fetchData();
  };

  const getAllUsers = () => {
    fetch('api/data', {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  const handleDelete = (id) => {
    fetch(`api/data/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: id
      })
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.data);
        getAllUsers();
      });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item._id}</td>
            <td>
              {editingData && editingData._id === item._id ? (
                <input
                  type="text"
                  value={editingData.fname}
                  onChange={(e) =>
                    setEditingData({ ...editingData, fname: e.target.value })
                  }
                />
              ) : (
                item.name
              )}
            </td>
            <td>
              {editingData && editingData._id === item._id ? (
                <input
                  type="text"
                  value={editingData.age}
                  onChange={(e) =>
                    setEditingData({ ...editingData, age: e.target.value })
                  }
                />
              ) : (
                item.age
              )}
            </td>
            <td>
              {editingData && editingData._id === item._id ? (
                <>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={() => setEditingData(null)}>Cancel</button>
                </>
              ) : (
                <button onClick={() => handleEdit(item)}>Edit</button>
              )}
            </td>
            <td>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;