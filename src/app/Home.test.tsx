import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('should render the Hero component', () => {
    render(<Home />)

    const heroImage = screen.getByAltText('hero-image')

    expect(heroImage).toBeInTheDocument()
  })

  it('should render the Mosaic component', () => {
    render(<Home />)

    const mosaicMainImage = screen.getByAltText('mosaic-main-image')

    expect(mosaicMainImage).toBeInTheDocument()
  })
})
