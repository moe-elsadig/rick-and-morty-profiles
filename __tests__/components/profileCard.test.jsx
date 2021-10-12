import React from 'react'
import { render, screen } from '@testing-library/react'
import ProfileCard from '../../components/ProfileCard'

describe('Component', () => {
  it('ProfileCard component renders correctly', () => {
    render(<ProfileCard />)
    const profileCard = screen.getAllByTestId('profile-card-component')
    expect(profileCard).toBeTruthy()
  })

  it('ProfileCard image area renders correctly', () => {
    render(<ProfileCard />)
    const imageArea = screen.getAllByTestId('profile-card-image')
    expect(imageArea).toBeTruthy()
  })

  it('ProfileCard information area renders correctly', () => {
    render(<ProfileCard />)
    const infoArea = screen.getAllByTestId('profile-card-info')
    expect(infoArea).toBeTruthy()
  })

  it.todo('ProfileCard clickable area renders correctly')
})
