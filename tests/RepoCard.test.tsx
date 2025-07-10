 
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepoCard from '../src/components/RepoCard';
import { describe, it, expect } from 'vitest';
import { Repo } from '../src/types/repo';

describe('RepoCard', () => {
  const mockRepo: Repo = {
    id: 1,
    name: 'test-repo',
    description: 'A test repository',
    html_url: 'https://github.com/godaddy/test-repo',
    language: 'TypeScript',
    forks_count: 10,
    open_issues_count: 5,
    watchers_count: 20,
  };

  it('renders repository name and description', () => {
    render(
      <MemoryRouter>
        <RepoCard repo={mockRepo} />
      </MemoryRouter>
    );

    expect(screen.getByText('test-repo')).toBeInTheDocument();
    expect(screen.getByText('A test repository')).toBeInTheDocument();
    expect(screen.getByText('Language: TypeScript')).toBeInTheDocument();
  });

  it('renders "No description available" when description is null', () => {
    const repoNoDesc: Repo = { ...mockRepo, description: null };
    render(
      <MemoryRouter>
        <RepoCard repo={repoNoDesc} />
      </MemoryRouter>
    );

    expect(screen.getByText('No description available')).toBeInTheDocument();
  });
});