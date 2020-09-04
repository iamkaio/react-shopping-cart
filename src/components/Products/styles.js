import styled from 'styled-components';
import React from "react";

export const Container = styled.div`
   width: 100%;
   
   ul.products {
   display: flex;
   flex-wrap: wrap;
   
   li {   
   max-width: 370px;
   width: 100%;
   flex: 1 0 25%;
   margin: 5px;
   list-style: none;
   transition: ease-in-out 180ms;
   transform-origin: center center;
   animation: showProducts ease-in-out 580ms forwards;
   @keyframes showProducts {
    0% {
    opacity: 0;
    transform: translateY(15px);
    }
    100% {
    opacity: 1;
    transform: translateY(0px);
    }
   }
   
   .product {
   width: 100%;
   display: flex;
   flex-direction: column;
   
   a {
       display: flex;
       flex-direction: column;
       img {
           max-width: 100%;
           height: auto;
       }
       p {
        color: #232323;
        margin-top: 10px;
        font-size: 14px;
       }
   }
   .product-price {
   font-size: 18px;
   font-weight: bold;
   }
   
   .btnBuy {
    border: none;
    background: transparent;
    border: 1px solid #232323;
    padding: 7px 10px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
    transition: ease-in-out 180ms;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    &:hover{
      background: #232323;
      color: #fff;
    }
   }
   }
   }
   }
`;


export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
        background: #FFF;

    
    .close-modal {
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
    background: #f2f2f2;
    border: none;
    cursor: pointer;
    &:hover {
    background: #DDD;
    }
    }
    
    .product-details {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      
      .product-detail-image {
        display: flex;
        flex: 1;
        
        img {
        max-width: 100%;
    height: 100%;
        }
      }
      
      .product-description {
      height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 15px 25px;
        p {
        font-size: 16px;
        }
        
        .available-sizes {
        margin-top: 50px;
   
                 display: flex;
            flex-direction: column;
            
            .sizes {
            span button {
            width: 40px;
            height: 40px;
            border: 1px solid #f2f2f2;
            background: transparent;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
            background: #232323;
            border: 1px solid #232323;
            color: #FFF;
            }
            }
            }
        }
        
        .product-detail-price {
        margin-top: 50px;
        p {
        font-size: 28px;
        font-weight: bold;
        }
        }
        
        .product-detail-btn {
        width: 100%;
        margin-top: 15px;
        
        button {
        width: 100%;
        padding: 15px;
        background: #ffcc77;
        border: none;
        }
        }
      }
    }
`;

