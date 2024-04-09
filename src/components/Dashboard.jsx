import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/users/current",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.payload);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      {user ? (
        <div>Bienvenido, {user.first_name}!</div>
      ) : (
        <div>Iniciando sesión...</div>
      )}
    </>
  );
}

export default Dashboard;
