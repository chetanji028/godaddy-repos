 
import { useEffect, useState } from 'react';
import axios from 'axios';
import RepoCard from './RepoCard';
import LoadingSpinner from './LoadingSpinner';
import { Repo } from '../types/repo';

const RepoList = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/orgs/godaddy/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch repositories');
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;