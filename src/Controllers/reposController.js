import * as reposService from "../Services/reposService.js";

export async function getAllRepos(req, res) {
  const repos = await reposService.getRepos();

  res.send(repos).status(200);
}