import logo from '../../assets/images/logo.svg'
import { Conteiner, Content } from './styles'

export function Header() {
  return (
    <Conteiner>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe o pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="WAITERAPP"></img>
      </Content>
    </Conteiner>
  )
}
