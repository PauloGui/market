import React from 'react';
import { useCart } from '../../contexts';

import {
  Container,
  ContainerModal,
  Wrapper,
  Text,
  ContainerText,
  Button,
  Card,
  ContainerCard,
  Image,
  Title,
  Description,
  ContainerTextCard,
  AlertFreight,
} from './styles';

interface Props {
  children?: React.ReactNode;
  handleClose: () => void;
  id?: string;
  onClose?: () => void;
}

interface Item {
  key: string;
  name: string;
  imageUrl: string;
  price: number;
  uniqueId: string;
}

const Modal = ({
  id = 'modal',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose = () => {},
  handleClose,
}: Props) => {
  const { cart, handleRemoveItemFromCart } = useCart();
  const totalPrice = cart.reduce(
    (acc: any, act: any) => acc + act.price / 100,
    0,
  );

  function priceFormat(price: number) {
    const value = price / 100;
    const newValue = value.toFixed(2);
    return newValue;
  }

  const handleOutSide = (e: any) => {
    if (e.target.id === id) onClose();
  };

  return (
    <Container id={id} onClick={handleOutSide}>
      <ContainerModal>
        <Wrapper>
          <Text>Meu carrinho</Text>
          <ContainerCard>
            {cart.map(
              ({ uniqueId, imageUrl, name, price }: Item, index: number) => (
                <Card key={index}>
                  <Image src={imageUrl} />
                  <ContainerTextCard>
                    <Title>{name}</Title>
                    <Description>R$ {priceFormat(price)}</Description>
                    <Button
                      remove
                      onClick={() => handleRemoveItemFromCart(uniqueId)}
                    >
                      Remover item
                    </Button>
                  </ContainerTextCard>
                </Card>
              ),
            )}
          </ContainerCard>
          <ContainerText>
            <Text>Total</Text>
            <Text>R$ {totalPrice}</Text>
          </ContainerText>
          {totalPrice.toFixed(2) > 10 && (
            <AlertFreight>
              <Text text>Parabéns, sua compra tem frete grátis !</Text>
            </AlertFreight>
          )}
          <Button onClick={handleClose}>Finalizar compra</Button>
        </Wrapper>
      </ContainerModal>
    </Container>
  );
};

export default Modal;
