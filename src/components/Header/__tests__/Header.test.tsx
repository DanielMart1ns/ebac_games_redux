import { render, screen } from '@testing-library/react'
import Header from '..' //como estou selecionando o index,
//posso omitir isso, só retornando a pasta
import { Provider } from 'react-redux'
import { store } from '../../../store'

describe('Testes para o Header', () => {
  test('Deve renderizar corretamente', () => {
    const { debug } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    debug()
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
