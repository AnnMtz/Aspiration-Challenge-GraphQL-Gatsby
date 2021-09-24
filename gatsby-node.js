// const { default: Table } = require("./src/components/Table/table");

// exports.createPages = async ({ actions, graphql, reporter}) => {
//     const result = await graphql(`
//     query { 
//         topic(name:"react") {
//             id
//         name
//         relatedTopics(first: 10) {
//             id
//             name
//             stargazerCount
//             viewerHasStarred
//             relatedTopics(first: 10) {
//                 id
//                 name
//                 stargazerCount
//                 viewerHasStarred
//             }
//         }
//     }
//     `)
//     // console.log(result.data.topic.relatedTopics);
//     if(result.errors){
//         reporter.panic('No results', result.errors)
//     }

//     const topics = result.data.topic.relatedTopics;

//     topics.forEach(topic => {
//         actions.createPage({
//             path: topic.id,
//             component: require.resolve('./src/components/Card/cards.js'),
//             context: {
//                 id: table.js
//             }
//         })
//     })
// }