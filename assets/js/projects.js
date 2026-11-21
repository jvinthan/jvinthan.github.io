'use strict';
(async function () {
  const config = window.PORTFOLIO_PROJECTS;
  const grid = document.querySelector('#repository-grid');
  const status = document.querySelector('#project-status');
  if (!config || !grid || !status) return;
  const validName = value => typeof value === 'string' && /^[a-zA-Z0-9_.-]+$/.test(value);
  if (!validName(config.username)) return;
  const limit = Math.max(1, Math.min(Number(config.limit) || 3, 30));
  const cacheKey = 'portfolio-repositories-v1-' + config.username;
  const repositoryURL = name => `https://github.com/${encodeURIComponent(config.username)}/${encodeURIComponent(name)}`;
  const select = repositories => {
    const excluded = config.excludedRepositories.map(name => name.toLowerCase());
    const eligible = repositories.filter(repo => repo && validName(repo.name) && !excluded.includes(repo.name.toLowerCase()));
    if (config.featuredRepositories.length) {
      return config.featuredRepositories.map(name => eligible.find(repo => repo.name.toLowerCase() === name.toLowerCase())).filter(Boolean).slice(0, limit);
    }
    return eligible.slice(0, limit);
  };
  function render(repositories) {
    grid.replaceChildren();
    for (const repo of repositories) {
      const article = document.createElement('article');
      article.className = 'card repository-card';
      const eyebrow = document.createElement('p');
      eyebrow.className = 'eyebrow'; eyebrow.textContent = 'GITHUB REPOSITORY';
      const heading = document.createElement('h3');
      const titleLink = document.createElement('a');
      titleLink.href = repositoryURL(repo.repository || repo.name);
      titleLink.textContent = repo.name;
      heading.append(titleLink);
      const description = document.createElement('p');
      description.textContent = repo.description || 'Explore the README, source files, and project documentation on GitHub.';
      article.append(eyebrow, heading, description);
      const labels = [repo.language, ...(Array.isArray(repo.topics) ? repo.topics.slice(0, 3) : [])].filter(value => typeof value === 'string' && value);
      if (labels.length) {
        const list = document.createElement('ul'); list.className = 'tags';
        for (const label of labels) { const item = document.createElement('li'); item.textContent = label; list.append(item); }
        article.append(list);
      }
      const link = document.createElement('a'); link.className = 'repo-link'; link.href = titleLink.href;
      link.textContent = 'View repository ↗'; link.setAttribute('aria-label', 'View ' + repo.name + ' on GitHub');
      article.append(link); grid.append(article);
    }
  }
  const manual = config.manualProjects.filter(project => project && validName(project.repository)).slice(0, limit);
  if (manual.length) { render(manual); status.textContent = 'Selected public projects and source code.'; return; }
  let cached = [];
  try { const saved = JSON.parse(localStorage.getItem(cacheKey)); if (saved && Array.isArray(saved.repositories)) cached = select(saved.repositories); } catch (_) { /* Storage is optional. */ }
  if (cached.length) render(cached);
  status.textContent = cached.length ? 'Showing saved projects while checking GitHub for updates…' : 'Loading public projects from GitHub…';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    let repositories;
    if (config.featuredRepositories.length) {
      repositories = await Promise.all(config.featuredRepositories.filter(validName).slice(0, limit).map(async name => {
        const response = await fetch(`https://api.github.com/repos/${encodeURIComponent(config.username)}/${encodeURIComponent(name)}`, {signal: controller.signal, headers: {Accept: 'application/vnd.github+json'}});
        if (!response.ok) throw new Error('Repository unavailable'); return response.json();
      }));
    } else {
      const response = await fetch(`https://api.github.com/users/${encodeURIComponent(config.username)}/repos?per_page=100&sort=updated&type=owner`, {signal: controller.signal, headers: {Accept: 'application/vnd.github+json'}});
      if (!response.ok) throw new Error('GitHub unavailable');
      repositories = await response.json();
    }
    if (!Array.isArray(repositories)) throw new Error('Unexpected response');
    const projects = select(repositories);
    render(projects);
    status.textContent = projects.length ? 'Public projects and source code from my GitHub profile.' : 'Explore my GitHub profile using the link above.';
    try { localStorage.setItem(cacheKey, JSON.stringify({repositories})); } catch (_) { /* Private browsing can disable storage. */ }
  } catch (_) {
    status.textContent = cached.length ? 'Showing saved projects. Visit GitHub for the latest updates.' : 'Projects are available on GitHub. Use “Browse all repositories” above to view them.';
  } finally { clearTimeout(timer); }
})();
