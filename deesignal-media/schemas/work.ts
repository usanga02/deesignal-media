import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Wedding Films',
          'Documentary Films',
          'Live Event Streaming',
          'Audio - Visual Support',
        ],
      },
    }),
    defineField({
      name: 'imgUrl',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video (url from google drive)',
      type: 'string',
    }),
    defineField({
      name: 'note',
      title: 'Wedding Note',
      type: 'string',
    }),
    defineField({
      name: 'whatwedid',
      title: 'What We Did (Note)',
      type: 'string',
    }),
    defineField({
      name: 'whatweused',
      title: 'What We Used (Note)',
      type: 'string',
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome (Note)',
      type: 'string',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery (url from google drive)',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
