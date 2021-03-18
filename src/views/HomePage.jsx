import { useState, useEffect } from 'react';
import TrendList from '../components/TrendList';
import api from '../api';

const HomePage = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => api.getTrends().then(trends => setTrends(trends)), []);

  return <TrendList trends={trends} />;
};

export default HomePage;
