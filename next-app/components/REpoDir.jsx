import Link from "next/link"

async function fetchContents(name) {
    const req = await fetch(`https://api.github.com/repos/MSaidmurod/${name}/contents` , {
        next: {
            revalidate: 60
        }
    })
    const contents = await req.json()
    return contents
}
async function REpoDir({name}) {

    const contents = await fetchContents(name)
   console.log(contents); 
      const dirs = contents.filter((content) => content.type == "dir" )
  return (
    <div>
        <h3>Content Links</h3>
        <ul>
            {dirs.map((dir) => {
                return <li key={dir.url}>
                    <Link href=''>
                        {dir.path}
                    </Link>
                </li>
            })}
        </ul>
    </div>
  )
}

export default REpoDir 