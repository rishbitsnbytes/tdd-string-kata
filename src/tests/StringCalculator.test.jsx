import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import StringCalculator from '../StringCalculator'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

// Clean up after each test to prevent multiple elements
afterEach(() => {
  cleanup()
})

describe('StringCalculator', () => {
  it('renders input and calculate button', () => {
    render(<StringCalculator />)
    expect(screen.getAllByPlaceholderText(/Enter numbers/i)[0]).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Calculate/i })).toBeInTheDocument()
  })

  it('calculates sum for comma separated numbers', () => {
    render(<StringCalculator />)
    const input = screen.getAllByPlaceholderText(/Enter numbers/i)[0]
    fireEvent.change(input, { target: { value: '1,2,3' } })
    fireEvent.click(screen.getByRole('button', { name: /Calculate/i }))
    expect(screen.getByText(/Result: 6/)).toBeInTheDocument()
  })

  it('calculates sum for numbers separated by newlines', () => {
    render(<StringCalculator />)
    const input = screen.getAllByPlaceholderText(/Enter numbers/i)[0]
    fireEvent.change(input, { target: { value: '1\\n2,3' } })
    fireEvent.click(screen.getByRole('button', { name: /Calculate/i }))
    expect(screen.getByText(/Result: 6/)).toBeInTheDocument()
  })

   it('shows error for negative numbers', () => {
    render(<StringCalculator />)
    const input = screen.getAllByPlaceholderText(/Enter numbers/i)[0]
    fireEvent.change(input, { target: { value: '1,-2,3' } })
    fireEvent.click(screen.getByRole('button', { name: /Calculate/i }))
    expect(screen.getByText(/negative numbers are not allowed/i)).toBeInTheDocument()
  })
})