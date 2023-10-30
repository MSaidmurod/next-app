import REpoDir from "@/components/REpoDir"
import Repo from "@/components/Repo"

function RepoPage({params: {name}}) {

  
  return (
    <div>
        <Repo name={name}/>
        {/* <REpoDir name={name}/> */}
    </div>
  )
}

export default RepoPage