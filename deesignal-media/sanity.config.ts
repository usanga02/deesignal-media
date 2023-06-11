import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET

export default defineConfig({
  name: 'default',
  title: 'deesignal-media',
  basePath: '/studio',

  projectId: 'd9i2yb54',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
