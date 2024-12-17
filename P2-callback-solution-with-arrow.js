console.log("Before");
// Callback Hell
getUser(1001, (user) => {
  console.log(user);
  getReposForUser(user, (listOfRepos) => {
    for (let repo of listOfRepos) {
      console.log(repo);
      getCommitsForRepo(repo, (noOfCommits) => {
        console.log("No of commits are ", noOfCommits);
      });
    }
  });
});

console.log("After");





function getUser(id, callback) {
  // setTimeout(executesThisArrowFunction,afterWaitingForThisManyMilliseconds)
  setTimeout(() => {
    console.log("Reading Id from Database ....");
    const user = { id: id, userid: "codewithz" };
    callback(user);
  }, 2000);
}

function getReposForUser(gitUser, callback) {
  // setTimeout(executesThisArrowFunction,afterWaitingForThisManyMilliseconds)
  setTimeout(() => {
    console.log("Connecting to github.com [", gitUser.userid, "]...");
    const listOfRepos = ["repo1", "repo2", "repo3"];
    callback(listOfRepos);
  }, 3000);
}

function getCommitsForRepo(repo, callback) {
  setTimeout(() => {
    console.log("Connecting to github.com [", repo, "]...");
    const noOfCommits = 15;
    callback(noOfCommits);
  }, 3000);
}

// CALLBACK HELL
