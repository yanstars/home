import BalmUI from 'balm-ui' // Official Google Material Components

import { type UserModule } from '~/types'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = ({ app }) => {
  app.use(BalmUI)
}
