import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('should render the Navbar component', () => {
    render(<Navbar />)

    const navbarElement = screen.getByRole('navigation')

    expect(navbarElement).toBeInTheDocument()
  })

  it('should render the Logo Component', () => {
    render(<Navbar />)
    const logoElement = screen.getByTestId('logo')

    expect(logoElement).toBeInTheDocument()
  })

  it('should render the BurgerIcon Component', () => {
    render(<Navbar />)
    const burgerIconElement = screen.getByRole('button', {
      name: 'Burger Icon',
    })

    expect(burgerIconElement).toBeInTheDocument()
  })

  it('should be a "fixed" navbar', () => {
    render(<Navbar />)

    expect(screen.getByTestId('header')).toHaveClass('fixed')
  })

  it('should have a div with a "mb-20" class', () => {
    render(<Navbar />)

    expect(screen.getByTestId('spacer')).toHaveClass('mb-20')
  })
})
