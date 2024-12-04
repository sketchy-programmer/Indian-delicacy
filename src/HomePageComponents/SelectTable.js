import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../HomePageCSS/SelectTable.module.css';

const SelectTable = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get('http://localhost:5038/api/restaurant/getTables');
        setTables(response.data);
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };
    fetchTables();
  }, []);

  return (
    <div className={styles.tableContainer}>
      <h1>Select Your Table</h1>
      <div className={styles.virtualLayout}>
        {tables.map((table) => (
          <div
            key={table._id}
            className={`${styles.table} ${
              table.status === 'occupied' ? styles.occupied : styles.available
            }`}
            style={{ left: table.position.x, top: table.position.y }}
          >
            Table {table.tableNumber} ({table.capacity} seats)
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectTable;
