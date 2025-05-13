import { useEffect, useState } from 'react';
import API from '../api/api';

function Dashboard() {
  const [homeData, setHomeData] = useState(null);
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get('/fetch-all');
      setHomeData(res.data.home);
      setServicesData(res.data.services);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Home Data</h2>
      <pre>{JSON.stringify(homeData, null, 2)}</pre>

      <h2>Services Data</h2>
      <pre>{JSON.stringify(servicesData, null, 2)}</pre>
    </div>
  );
}

export default Dashboard;
