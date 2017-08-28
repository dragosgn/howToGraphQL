const links = [
  {
    id: 1,
    url: 'http://graphql.org/',
    description: 'The best quey language'
  },
  {
    id: 2,
    url: 'http://dev.apollodata.com',
    description: 'Awesome Graphql Client'
  }
]

module.exports = {
  Query: {
    allLinks: () => links,
  },
  Mutation: {
    createLink: (_, data) => {
      const newLink = Object.assign({id: links.length + 1}, data)
      links.push(newLink)
      return newLink
    }
  }
}
