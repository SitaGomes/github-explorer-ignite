
export function RepositoryItem({repository}) {
    return(
        <li>
            <h2>{repository.name}</h2>
            <p>{repository.desc}</p>
            <a href={repository.url} target="_blank">Check Repository</a>
        </li>
    )
}