import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'SubTitle',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'string',
    }),
    defineField({
      name: 'imgUrl',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'subtitle',
      media: 'imgUrl',
    },
    prepare(selection) {
      const {title} = selection
      return {...selection, subtitle: title && `${title}`}
    },
  },
})
