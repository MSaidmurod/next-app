
async function RepoPage({params: {name}}) {
  const fetchRepos = async () => {
    const req = await fetch(`https://api.github.com/repos/MSaidmurod/${name}`)
    const data =await req.json()
    return data
  }


  const repo = await fetchRepos()

  
  return (
    <div>
        <h1>{repo.full_name}</h1>
    </div>
  )
}

export default RepoPage