exports.createPages = async ({ actions, graphql, reporter }) => {

  try {
    const result = await graphql(`
      {
        allContentfulEvent {
          edges {
            node {
              titel
              slug
            }
          }
        }
      }
    `);

    const events = result.data.allContentfulEvent.edges;
    events.forEach(event => {
      actions.createPage({
        path: `/${event.node.slug}`,
        component: require.resolve('./src/templates/event-template.js'),
        context: {
          slug: event.node.slug,
        }
      })
    })
  
  } catch (err) {
    console.error('Error loading contentful Events', err);
  }
}
