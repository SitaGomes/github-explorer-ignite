import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repository.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        
        fetch('https://api.github.com/users/SitaGomes/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
        
    }, [])
    
    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {
                    repositories.map((repo, index: number) => (

                        <RepositoryItem key={index} repository={repo}/>
                        
                    ))
                }
            </ul>
        </section>
    )
}