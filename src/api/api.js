import axios from "axios";

export const getData = async () => {
    const graphql = "https://api.github.com/graphql";
    const token = process.env.API_KEY;
    const oauth = { Authorization: "bearer " + token };
    const query = ` {
        topic(name:"react") {
                id
            name
            relatedTopics(first: 10) {
                id
                name
                stargazerCount
                viewerHasStarred
                relatedTopics(first: 10) {
                    id
                    name
                    stargazerCount
                    viewerHasStarred
                }
            }
        }
    }`;

    const resp = await axios.post(
        graphql,
        { query: query },
        { headers: oauth }
    );
    return resp.data;
}