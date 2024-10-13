import React from 'react'
import { BaseStyles } from './BaseStyles'
import { ResetStyles } from './ResetStyles'

export const GlobalStyles: React.FC = () => {
  return (
    <>
      <ResetStyles />
      <BaseStyles />
    </>
  )
}
