import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Count } from './Count'

describe('Count', () => {
  it('should increment count when button is clicked', () => {
    render(<Count />)

    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()

    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument()
  })

  it('should start with count of 0', () => {
    render(<Count />)

    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })
})
