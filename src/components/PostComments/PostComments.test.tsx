import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {

        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
        fireEvent.change(screen.getByTestId('textArea'),{
            target:{
                value: 'muito bom'
            }
        })
        fireEvent.click(screen.getByTestId('botao'))

        fireEvent.change(screen.getByTestId('textArea'),{
            target:{
                value: 'show de bola'
            }
        })
        fireEvent.click(screen.getByTestId('botao'))
        
        expect(screen.getByText('muito bom')).toBeInTheDocument()
        expect(screen.getByText('show de bola')).toBeInTheDocument()
    
    })
});