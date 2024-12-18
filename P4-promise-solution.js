console.log("Before");

const p1=getUser(1234);

p1
    .then((user)=>{
        console.log("User:",user)
       return  getReposForUser(user)
    })
    .then((repos)=>{
        console.log("Repos:",repos)
        for (let repo of repos){
             getCommitsForRepo(repo)
                .then((noOfCommits)=>{console.log("No of commits :",noOfCommits)})
        }
    })
    .catch((error)=>{
        console.log("Encountered Error:",error.message)
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

function getReposForUser(gitUser, ) {
    const p2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Connecting to github.com [", gitUser.userid, "]...");
            const listOfRepos = ["repo1", "repo2", "repo3"];
            // resolve(listOfRepos);
            reject(new Error("Account Doesn't exists"))
          }, 3000);
    })

    return p2;
 
}

function getCommitsForRepo(repo) {
  const p3=new Promise((resolve,reject)=>{

    setTimeout(() => {
        console.log("Connecting to github.com [", repo, "]...");
        const noOfCommits = 15;
        resolve(noOfCommits);
      }, 3000);
  })
  return p3;
  
}

// CALLBACK HELL
