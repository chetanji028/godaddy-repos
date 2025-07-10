 
# GoDaddy GitHub Repositories App

A simple React application that fetches and displays GoDaddy's public GitHub repositories using the GitHub API. Users can view a list of repositories and click on a repository to see detailed information.

## Features
- Displays a list of GoDaddy's public repositories fetched from `https://api.github.com/orgs/godaddy/repos`.
- Clicking a repository navigates to a details page showing:
  - Repository title
  - Description
  - Link to the GitHub repository
  - Primary language
  - Number of forks
  - Number of open issues
  - Number of watchers
- Responsive design with Tailwind CSS.
- Basic unit tests using Vitest and React Testing Library.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/chetanji028/godaddy-repos.git
   cd godaddy-repos

   ##Install dependencies:

npm install

##Run the development server:

npm run dev

##Open http://localhost:5173 in your browser.
##Run tests

npm test

