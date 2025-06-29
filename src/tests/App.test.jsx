import { render, screen } from '@testing-library/react'
import App from '../App'
import { describe, expect, it } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

describe('App', () => {
  it('renders StringCalculator', () => {
    render(<App />)
    expect(screen.getByText(/String Calculator/i)).toBeInTheDocument()
  })
})