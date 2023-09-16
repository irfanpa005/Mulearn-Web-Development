
// const avatarElement = document.getElementById("avatar");
// const usernameElement = document.getElementById("username");
// const repoListElement = document.getElementById("repo-list");

// const username = "vishakh-abhayan"; // Replace with your GitHub username


// fetch(`https://api.github.com/users/irfanpa005/repos`)
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((repo) => {
//       const repoCard = document.createElement("div");
//       repoCard.classList.add("repo-card");
//       repoCard.innerHTML = `
//                 <h3>${repo.name}</h3>
//                 <p>${repo.description}</p>
//                 <p>Stars: ${repo.stargazers_count}</p>
//                 <a href="${repo.html_url}" target="_blank">View on GitHub</a>
//             `;
//       repoListElement.appendChild(repoCard);
//     });
//   });




fetch(`https://api.github.com/users/irfanpa005/repos`)
.then(response => response.json())
.then(data =>{
    const listDiv = document.getElementById("repo-list");
    data.forEach(repo => {
        var repoDiv = document.createElement('div');
        repoDiv.className ="card my-2";
        repoDiv.innerHTML = `
        <p>Name: ${repo.name}</p>
        <p>Link: ${repo.html_url}</p>
        <a class="btn btn-info text-white" href="${repo.html_url}"}>View</a>
        `;
        listDiv.appendChild(repoDiv)
        console.log(repoDiv)
    })
});