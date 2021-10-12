import React from 'react'
import { render, screen } from '@testing-library/react'
import ProfileCard from '../../components/ProfileCard'

const characterData =  {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1'
  },
  location: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20'
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    'https://rickandmortyapi.com/api/episode/3',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z'
}

describe('Component', () => {
  it('ProfileCard component renders correctly', () => {
    render(<ProfileCard />)
    const profileCard = screen.getByTestId('profile-card-component')
    expect(profileCard).toBeTruthy()
  })

  it('ProfileCard image area renders correctly', () => {
    render(<ProfileCard />)
    const imageArea = screen.getByTestId('profile-card-image')
    expect(imageArea).toBeTruthy()
  })

  it('ProfileCard information area renders correctly', () => {
    render(<ProfileCard />)
    const infoArea = screen.getByTestId('profile-card-info')
    expect(infoArea).toBeTruthy()
  })

  it.todo('ProfileCard clickable area renders correctly')

  it('ProfileCard image with valid data', ()=>{
    render(<ProfileCard characterData={characterData} index={9905}/>)
    const imageEl = screen.getByTestId('profile-card-image-9905')
    expect(imageEl).toBeTruthy()
  })

  it('ProfileCard image with invalid data',()=>{
    render(<ProfileCard />)
    const imageEl = screen.getByTestId('profile-card-image-loading')
    expect(imageEl).toBeTruthy()
  })
  it.todo('ProfileCard information with valid data')
  it.todo('ProfileCard information with invalid data')
})
