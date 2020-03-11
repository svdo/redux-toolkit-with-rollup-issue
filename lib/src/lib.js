import { configureStore } from '@reduxjs/toolkit'

export function cs () {
  const reduxStore = configureStore()
  return reduxStore
}
