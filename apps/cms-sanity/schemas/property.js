import {DocumentIcon} from '@sanity/icons'
import {JsonView} from '../components/views/JsonView'
import S from '@sanity/desk-tool/structure-builder'

export default {
  name: 'property',
  type: 'document',
  title: 'Property',
  views: [
    S.view.component(JsonView).title('JSON').icon(DocumentIcon),
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
    },
    {
      name: 'bedrooms',
      type: 'number',
      title: 'Bedrooms',
      validation: Rule => Rule.required(),
      options: {
        layout: "radio",
        direction: "vertical"
      }
    },
    {
      name: 'bathrooms',
      type: 'number',
      title: 'Bathrooms',
      validation: Rule => Rule.required(),
    },
    {
      name: 'guests',
      type: 'number',
      title: 'Guests',
      validation: Rule => Rule.required().min(1),
    },
    {
      name: 'beds',
      type: 'number',
      title: 'Beds',
      validation: Rule => Rule.required(),
    },
    {
      name: 'isAvailable',
      type: 'boolean',
      title: 'Is Available',
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      type: 'geopoint',
      title: 'Location',
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      validation: Rule => Rule.required(),
      options: {
        list: ["House", "Apartment", "Campground", "Vehicle", "Tiny Home"]
      }
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      validation: Rule => Rule.required().min(3),
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
            title: 'Title'
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Caption'
          },
          {
            name: 'alternativeText',
            type: 'string',
            title: 'Alternative Text'
          },
        ]
      }],
    },
  ],
}
