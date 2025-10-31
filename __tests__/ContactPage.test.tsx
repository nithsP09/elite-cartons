import { render, screen } from '@testing-library/react'
import ContactPage from '../app/contact/ContactClient'

describe('ContactPage', () => {
  it('renders heading correctly', () => {
    render(<ContactPage />)
    const heading = screen.getByText(/Get in Touch/i)
    expect(heading).toBeInTheDocument()
  })
})
