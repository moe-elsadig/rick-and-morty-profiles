import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'

describe('Component', () => {
  it('Header component renders correctly', () => {
    render(<Header />)

    const header = screen.getAllByTestId('Header-component')
    const heading = screen.getAllByTestId('Header-heading')
    const buttons = screen.getAllByTestId('Header-buttons-area')

    expect(header).toBeTruthy()
    expect(heading).toBeTruthy()
    expect(buttons).toBeTruthy()
  })

  it('Header component Heading renders correctly', () => {
    render(<Header />)
    const heading = screen.getAllByTestId('Header-heading')
    expect(heading).toBeTruthy()
  })

  it('Header component buttons area renders correctly', () => {
    render(<Header />)
    const buttons = screen.getAllByTestId('Header-buttons-area')
    expect(buttons).toBeTruthy()
  })
})
