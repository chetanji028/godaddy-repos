import { Link } from 'react-router-dom';
import { Repo } from '../types/repo';

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => (
  <Link
    to={`/repo/${encodeURIComponent(repo.name)}`} 
    className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-white"
  >
    <h3 className="text-lg font-semibold text-blue-600">{repo.name}</h3>
    <p className="text-gray-600 mt-2">
      {repo.description || 'No description available'}
    </p>
    <p className="text-sm text-gray-500 mt-1">Language: {repo.language || 'N/A'}</p>
  </Link>
);

export default RepoCard;