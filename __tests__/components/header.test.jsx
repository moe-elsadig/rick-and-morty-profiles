import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'

describe('Component', () => {
  it('Header component renders', () => {
    let component = render(<Header />)
    const headerEl = component.getByTestId('Header-component')
    expect(headerEl).toBeTruthy()
  })

  it('Header component Heading renders correctly', () => {
    render(<Header />)
    const heading = screen.getByTestId('Header-heading')
    expect(heading.textContent).toBe('The Rick & Morty Encyclopedia')
  })

  it('Header component Logo renders correctly', () => {
    render(<Header />)
    const heading = screen.getByTestId('Header-heading')
    expect(heading.textContent).toBe('The Rick & Morty Encyclopedia')
  })


  it('Header component buttons area renders', () => {
    render(<Header />)
    const buttons = screen.getAllByTestId('Header-buttons-area')
    expect(buttons).toBeTruthy()
  })
})
