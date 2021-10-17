import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'

describe('Header Component', () => {
  it('Header component renders', () => {
    let component = render(<Header />)
    const headerEl = component.getByTestId('Header-component')
    expect(headerEl).toBeTruthy()
  })

  it('Header component parts render', () => {
    render(<Header />)
    
    const headingEl = screen.getByTestId('Header-heading')
    const logoEl = screen.getByTestId('Header-logo')
    const themeBtn = screen.getByTestId('Header-theme-button')

    expect(headingEl.textContent).toBe('The Rick & Morty Encyclopedia')
    expect(logoEl).toBeTruthy()
    expect(themeBtn).toBeTruthy()
  })

  it.todo('test that theme button renders and changes correctly')
  it.todo('the dark classes is added to the body correctly')
})
