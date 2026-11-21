/* Optional: pin the exact three repository names in the order you prefer.
   Example structure: featuredRepositories: ['exact-repository-name']
   With an empty list, the site loads the three most recently updated public
   repositories, excluding the website and GitHub profile README repositories.
   No token is needed. Never put a GitHub token in these public files.

   For verified static cards that also work when the API is unavailable, add:
   manualProjects: [{name: 'Exact project title', repository: 'exact-repo-name',
     description: 'An accurate description.', language: 'Python', topics: []}]
   Manual cards take priority and do not make an API request. */
window.PORTFOLIO_PROJECTS = {
  username: 'jvinthan',
  featuredRepositories: [],
  excludedRepositories: ['jvinthan.github.io', 'jvinthan'],
  limit: 3,
  manualProjects: []
};
