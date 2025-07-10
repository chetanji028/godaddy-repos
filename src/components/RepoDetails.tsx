 
import { Repo } from '../types/repo';

interface RepoDetailsProps {
  repo: Repo;
}

const RepoDetails = ({ repo }: RepoDetailsProps) => (
  <div className="p-6 bg-white rounded-lg shadow max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold text-blue-600">{repo.name}</h2>
    <p className="mt-4 text-gray-600">
      {repo.description || 'No description available'}
    </p>
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline mt-2 block"
    >
      View on GitHub
    </a>
    <div className="mt-4 space-y-2">
      <p><strong>Language:</strong> {repo.language || 'N/A'}</p>
      <p><strong>Forks:</strong> {repo.forks_count}</p>
      <p><strong>Open Issues:</strong> {repo.open_issues_count}</p>
      <p><strong>Watchers:</strong> {repo.watchers_count}</p>
    </div>
  </div>
);

export default RepoDetails;