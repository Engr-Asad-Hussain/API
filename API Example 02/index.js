var app = document.getElementById('root');


const request = new XMLHttpRequest();

const baseURL = "https://api.github.com/users/Engr-Asad-Hussain";
request.open("GET", baseURL, true);

request.onload = function() {
    const { avatar_url, followers, location, name, public_repos } = JSON.parse(this.response);
    
    const logo = document.createElement('img');
    logo.src = avatar_url;
    app.appendChild(logo);

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.appendChild(container);

    const userName = document.createElement('h2');
    userName.textContent = name;
    container.appendChild(userName);

    const userLocation = document.createElement('p');
    userLocation.textContent = location;
    container.appendChild(userLocation);

    const userFollowers = document.createElement('p');
    userFollowers.textContent = `Followers: ${followers}`;
    container.appendChild(userFollowers);

    const userRepos = document.createElement('p');
    userRepos.textContent = `Repositories: ${public_repos}`;
    container.appendChild(userRepos);
}

request.send();
