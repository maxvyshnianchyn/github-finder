class GitHub {
    constructor() {
        this.client_id = '6d14d9dbc2cf3274d6c3';
        this.client_secret = '165baed985ca92aa61949a8047ecc94edd8fc6db';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&
        client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}