import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/index.tsx";
import { Orders } from "./components/Orders/index.tsx";


export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  )
}
