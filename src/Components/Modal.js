import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../Context'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=> {
            const {modalOpen,closeModal} = value;
            const {img,title,price} = value.modalProduct;
            
            if (!modalOpen) {
                return null
            }
            else {
                return(
                <ModalContainer className='modal-container'>
                    <div className="container">
                        <div className="row">
                            <div id='modal' className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                <h5>item added to the cart</h5>
                                <img src={img} alt="product" className='img-fluid' />
                                <h4>{title}</h4>
                                <h5 className='text-muted'>price : ${price}</h5>
                                <div className='btn-modal'>
                                    <Link to="/">
                                    <ButtonContainer onClick={()=> closeModal()}>
                                        continue shopping
                                    </ButtonContainer>
                                </Link>
                                <Link to="/cart">
                                    <ButtonContainer cart onClick={()=> closeModal()}>
                                        go to cart
                                    </ButtonContainer>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalContainer> 
    )} 
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
postion: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-item: center;
justify-content;
#modal{
    background: var(--mainWhite)
}
`
