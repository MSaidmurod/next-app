import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'

const fetchRepos = async (name) => {
    const request = await fetch(`https://api.github.com/repos/MSaidmurod/${name}`)
    const repo = await request.json()
    return repo
}


async function Repo({name}) {
const repo = await fetchRepos(name)
  return (
    <div className='card'>
         <h3>{repo.name}</h3>
           <div className="repo-details">
           <p>{repo.description}</p>
                <span>
                    <FaStar/> {repo.stargazers_count}
                </span>
                <span>
                    <FaCodeBranch/> {repo.forks_count}
                </span>
                <span>
                    <FaEye/> {repo.watchers_count}
                </span>
            </div>
    </div>
  )
}

export default Repo