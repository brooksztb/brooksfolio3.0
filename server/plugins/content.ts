import { readingTime } from 'reading-time-estimator'
import { formatDate } from '@/utils/date'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    // Adding reading time for markdown documents
      if (file.extension === '.md') {
        const { text } = readingTime(file.text)
        const formattedCreatedAtDate = formatDate(file.createdAt)

        file.readingTime = text
        file.formattedCreatedDate = formattedCreatedAtDate
      }
  });
})
