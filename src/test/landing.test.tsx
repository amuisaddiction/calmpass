import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('Landing Page (Phase 1)', () => {
  it('renders brand wordmark, main headline, and action buttons', () => {
    render(<App />)

    // Headline with emphasis
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Feel more prepared before you arrive/i)

    // Primary and secondary CTAs
    expect(screen.getByRole('link', { name: /Explore a sample place/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /How Calmpass works/i })).toBeInTheDocument()

    // Brand in header
    expect(screen.getByLabelText(/Calmpass home — return to top/i)).toBeInTheDocument()
  })

  it('renders all three key benefits with numbered indicators and interactive preview', () => {
    render(<App />)

    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText(/EXPLORE IN ADVANCE/i)).toBeInTheDocument()
    expect(screen.getByText(/See the space before stepping inside/i)).toBeInTheDocument()

    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText(/TAILORED PRIORITIES/i)).toBeInTheDocument()
    expect(screen.getByText('Focus on what matters to you')).toBeInTheDocument()

    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText(/ACTIONABLE REASSURANCE/i)).toBeInTheDocument()
    expect(screen.getByText(/Form a calm, printable visit plan/i)).toBeInTheDocument()

    // Test the interactive sensory preview inside Card 02
    const crowdTab = screen.getByRole('tab', { name: /Crowd/i })
    fireEvent.click(crowdTab)
    expect(screen.getByText('Crowd Density')).toBeInTheDocument()
  })

  it('renders the sample venue section with Harbour Learning Centre preview', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /Meet Harbour Learning Centre/i })).toBeInTheDocument()
    expect(screen.getByText(/A modern public learning and civic center/i)).toBeInTheDocument()
  })

  it('allows clicking room directory tabs to update the room spotlight', () => {
    render(<App />)

    // Default room spotlight is Quiet Room
    expect(screen.getByRole('heading', { level: 3, name: 'Quiet Room' })).toBeInTheDocument()
    expect(screen.getByText(/Designated Low-Stimulus Refuge/i)).toBeInTheDocument()

    // Click Entrance button
    const entranceTab = screen.getByRole('tab', { name: /Entrance/i })
    fireEvent.click(entranceTab)

    // Spotlight updates to Entrance
    expect(screen.getByRole('heading', { level: 3, name: 'Entrance' })).toBeInTheDocument()
    expect(screen.getByText(/Arrival & Orientation Zone/i)).toBeInTheDocument()
  })

  it('displays the required sample data disclosure clearly', () => {
    render(<App />)

    const disclosures = screen.getAllByText(/Sample conditions, not live measurements/i)
    expect(disclosures.length).toBeGreaterThan(0)
  })

  it('renders the four sensory dimensions and 1-5 scale guide', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /Four sensory dimensions of public space/i })).toBeInTheDocument()
    expect(screen.getByText('Acoustic Level')).toBeInTheDocument()
    expect(screen.getByText('Human Density')).toBeInTheDocument()
    expect(screen.getByText('Visual Environment')).toBeInTheDocument()
    expect(screen.getByText('Olfactory Stimuli')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Our Illustrative 1 to 5 Rating Scale/i })).toBeInTheDocument()
  })
})
