import React from 'react';
import { useCart } from '../../contexts';

import {
  Container,
  Wrapper,
  Image,
  ContainerText,
  Text,
  Title,
  Button,
} from './styles';

interface Item {
  key: string;
  uniqueId: string;
  name: string;
  imageUrl: string;
  price: number;
}

export const CardItem = ({ name, price, imageUrl, uniqueId }: Item) => {
  const { handleAddItemToCart } = useCart();
  const value = price / 100;
  const newValue = value.toFixed(2);
  return (
    <Container>
      <Wrapper>
        <Image src={imageUrl} />
        <ContainerText>
          <Title>{name}</Title>
          <Text>R${newValue}</Text>
          <Button
            onClick={() => {
              handleAddItemToCart({ name, price, imageUrl, uniqueId });
            }}
          >
            Adicionar ao carrinho
          </Button>
        </ContainerText>
      </Wrapper>
    </Container>
  );
};
