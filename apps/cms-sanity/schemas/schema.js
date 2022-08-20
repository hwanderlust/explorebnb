// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import siteSettings from './siteSettings'
import link from './link'
import simpleBlockContent from './simpleBlockContent'

import property from './property'
import user from './user'
import review from './review'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    simpleBlockContent, siteSettings, link,
    // pet, human, product, article,  
    property, user, review
  ]),
})
