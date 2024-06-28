import axios from "axios"

export async function getRepos() {
    const config = createConfig()
    
    const repos = await axios.get(`${process.env.GITHUB_API_URL}orgs/takenet/repos?sort=created&direction=asc&per_page=10`, config)

    return repos.data.filter(repo => repo.language === 'C#')
        .map((repo) => {
            return {
                id: repo.id,
                name: repo.full_name,
                description: repo.description,
                language: repo.language,
                created_at: repo.created_at,
                url_image: repo.owner.avatar_url
            }
    }).slice(0, 5);
} 

function createConfig() {
    return { headers: { 'Authorization': `${process.env.GITHUB_API_KEY}` } }
}
