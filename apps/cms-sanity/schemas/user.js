import {DocumentIcon} from '@sanity/icons'
import {JsonView} from '../components/views/JsonView'
import S from '@sanity/desk-tool/structure-builder'

export default {
  name: 'user',
  type: 'document',
  title: 'User',
  views: [
    S.view.component(JsonView).title('JSON').icon(DocumentIcon),
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
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
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age',
      validation: Rule => Rule.required().min(18).max(150)
    },
    {
      name: 'languages',
      type: 'array',
      title: 'Languages',
      validation: Rule => Rule.required(),
      of: [{
        type: "string",
        options: {
          list: [
            "English",
            "Spanish",
            "Japanese",
            "Korean",
            "Chinese (Mandarin)",
            "Chinese (Cantonese)",
            "Vietnamese",
            "Thai",
            "French",
            "German",
            "Swiss German",
            "Afrikaans",
          ]
        }
      }]
    },
    {
      name: 'location',
      type: 'geopoint',
      title: 'Location',
      validation: Rule => Rule.required(),
    },
    {
      name: 'properties',
      type: 'array',
      title: 'Properties',
      of: [{type: 'reference', to: [{type: 'property'}]}],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      validation: Rule => Rule.required().min(1),
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
