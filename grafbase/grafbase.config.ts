import { g, config, connector } from '@grafbase/sdk'

const fauna = connector.GraphQL({
  url: 'https://graphql.fauna.com/graphql',
  headers: (headers) => {
    headers.set('Authorization', 'Bearer {{ env.FAUNA_API_KEY }}')
  }
})

g.datasource(fauna, { namespace: 'Fauna' })

export default config({
  schema: g,
  cache: {
    rules: [
      {
        types: ['Query'],
        maxAge: 120,
        staleWhileRevalidate: 120
      }
    ]
  }
})
