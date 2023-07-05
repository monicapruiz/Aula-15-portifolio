import axios from "axios"

const apiGithubUrl = "https://api.github.com/users/monicapruiz/repos"

const api = axios.create({
    baseURL: apiGithubUrl
})

export default api