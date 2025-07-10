import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import { describe, it, expect, vi } from 'vitest';
import RepoList from '../src/components/RepoList';

vi.mock('axios');

describe('RepoList', () => {
  const mockRepos = [
    {
      id: 1,
      name: 'repo1',
      description: 'First repo',
      html_url: 'https://github.com/godaddy/repo1',
      language: 'JavaScript',
      forks_count: 5,
      open_issues_count: 2,
      watchers_count: 10,
    },
  ];

  it('renders loading spinner initially', async () => {
    vi.mocked(axios.get).mockImplementation(() => new Promise(() => {})); // Mock pending request
    render(<RepoList />);
    await waitFor(() => {
      expect(screen.getByRole('status')).toBeInTheDocument();
    });
  });

  it('renders repository cards after fetching data', async () => {
    vi.mocked(axios.get).mockResolvedValue({ data: mockRepos });
    render(
      <MemoryRouter>
        <RepoList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('repo1')).toBeInTheDocument();
      expect(screen.getByText('First repo')).toBeInTheDocument();
    });
  });

  it('displays error message on fetch failure', async () => {
    vi.mocked(axios.get).mockRejectedValue(new Error('Fetch error'));
    render(<RepoList />);

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch repositories')).toBeInTheDocument();
    });
  });
});