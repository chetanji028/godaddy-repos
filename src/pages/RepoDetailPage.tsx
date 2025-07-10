import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RepoDetails from '../components/RepoDetails';
import LoadingSpinner from '../components/LoadingSpinner';
import { Repo } from '../types/repo';

const RepoDetailPage = () => {
  const { name } = useParams<{ name: string }>(); 
  const [repo, setRepo] = useState<Repo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const headers = import.meta.env.VITE_GITHUB_TOKEN
          ? { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` }
          : {};
        const response = await axios.get(`https://api.github.com/repos/godaddy/${name}`, {
          headers,
        });
        setRepo(response.data);
        setLoading(false);
      } catch (err: any) {
        setError('Failed to fetch repository details: ' + (err.response?.status || err.message));
        setLoading(false);
      }
    };
    fetchRepo();
  }, [name]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!repo) return null;

  return (
    <div className="container mx-auto p-4">
      <RepoDetails repo={repo} />
    </div>
  );
};

export default RepoDetailPage;