console.log("Before");

const p1=getUser(1234);

p1
    .then((user)=>{
        console.log("User:",user)
    })

console.log("After");



function getUser(id) {
  p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Reading Id from Database ....");
        const user = { id: id, userid: "codewithz" };
        resolve(user);
      }, 2000);

  })

  return p;
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
