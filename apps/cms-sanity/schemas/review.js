import {DocumentIcon} from '@sanity/icons'
import {JsonView} from '../components/views/JsonView'
import S from '@sanity/desk-tool/structure-builder'

export default {
  name: 'review',
  type: 'document',
  title: 'Review',
  views: [
    S.view.component(JsonView).title('JSON').icon(DocumentIcon),
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'details',
      type: 'string',
      title: 'Details',
      validation: Rule => Rule.required()
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: Rule => Rule.required().min(0).max(5)
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Type',
      to: [
        {type: 'property'},
        {type: 'user'},
      ],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
          accepts: "image/*",
        },
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required(),
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            validation: Rule => Rule.required(),
          },
          {
            name: 'alternativeText',
            type: 'string',
            title: 'Alternative Text',
            validation: Rule => Rule.required(),
          },
        ]
      }],
    },
  ],
}
