import { RepositoryItem } from "./RepositoryItem";
import '../styles/repository.scss'


export function RepositoryList() {
    const respository = {
        name: 'TaskGround',
        desc: 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum',
        url: 'http://github.com/SitaGomes/Taskground'
    };
    
    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={respository}/>
                <RepositoryItem repository={respository}/>
                <RepositoryItem repository={respository}/>
                <RepositoryItem repository={respository}/>
            </ul>
        </section>
    )
}