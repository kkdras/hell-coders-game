import { fireEvent, render, screen } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../../store/rootReducer'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { Home } from './Home'
import { RouteNames } from '../../App'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('<HomePage/>', () => {
  const store = configureStore({ reducer: rootReducer })
  const setup = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )

  beforeEach(() => {
    setup()
  })

  it('should render', () => {
    const { container } = setup()
    expect(container).toBeInTheDocument()
  })

  it('should contain header', () => {
    const header = screen.getByRole('header')
    expect(header).toBeInTheDocument()
  })

  it('should contain image', () => {
    const image = screen.getByAltText('Tetris')
    expect(image).toHaveAttribute('src', '/tetris.jpeg')
  })

  it('should navigate to game page on button click', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockNavigate).toHaveBeenNthCalledWith(1, RouteNames.GAME)
  })

  it('should have control description', () => {
    const options = screen.getAllByRole('listitem')
    expect(options).toHaveLength(7)
  })
})
