
async function  dipslayReposWithCommits(){
  try {
    const user= await getUser(1234);
    console.log(user)
    const repos=await getReposForUser(user)
    console.log(repos)
    for(let repo of repos){
      const noOfCommits=await getCommitsForRepo(repo)
      console.log(noOfCommits)
    }
  } catch (error) {
    console.log("Error Encountered:",error.message)
  }
   
}

dipslayReposWithCommits()

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
