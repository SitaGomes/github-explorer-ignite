interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem({repository}: RepositoryItemProps) {


    return(
        <li>
            <h2>{repository.name}</h2>
            <p>{repository.description}</p>
            <a href={repository.html_url} target="_blank">Check Repository</a>
        </li>
    )
}