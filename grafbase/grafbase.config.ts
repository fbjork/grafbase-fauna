import { g, config, connector } from '@grafbase/sdk'

const fauna = connector.GraphQL({
  url: 'https://graphql.fauna.com/graphql',
  headers: (headers) => {
    headers.static('Authorization', 'Bearer {{ env.FAUNA_API_KEY }}')
  }
})

g.datasource(fauna, { namespace: 'Fauna' })

export default config({ schema: g })
