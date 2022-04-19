const fetchUser = async (userName) => {
  const apiResponse = await fetch('https://api.github.com');
  const body = await apiResponse.json();
  console.log(body);
  const currentUserUrl = body['current_user_url'];
  const currentUser = await fetch(currentUserUrl);
  const userData = await currentUser.json();
}

const fetchRepos = async (userName) => {
  const query = `https://api.github.com/users/${userName}/repos`;
  const apiResponse = await fetch(query);
  const repos = await apiResponse.json();
  console.log(repos);
}

const name = 'sergeialimov';

// fetchUser(name);
fetchRepos(name);