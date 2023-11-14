import { render, screen } from "@testing-library/react"
import App from "./App"


describe('Teste do principal component',()=>{
    test('Deve renderizar na tela',()=>{
        render(<App/>)
        expect(screen.getByTestId('app')).toBeInTheDocument()

    })
})