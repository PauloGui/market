import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { ReactComponent as Icon } from '../../assets/shopping-cart.svg';
import { CardItem } from '../../components/CardItem';
import Modal from '../../components/Modal';
import { useCart } from '../../contexts';
import { data } from '../../mock';

import { Container, Wrapper, Text, ButtonCart, BadgeCar } from './styles';

interface Item {
  uniqueId: string;
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface Api {
  value: number;
  items: Item[];
}

export const ListMarket = () => {
  const { quantityCart, setCart } = useCart();
  const [visible, setVisible] = useState(false);

  const [state, setState] = useState<Api>({
    value: 0,
    items: [],
  });

  const handleClose = () => {
    setVisible(false);
    setCart([]);
    Swal.fire({
      title: 'Sucesso',
      text: 'Compra realizada com sucesso!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3b74f2',
    });
  };

  useEffect(() => {
    setState(data);
  }, []);

  return (
    <Container>
      <Text>MarketTrufas</Text>
      <ButtonCart
        onClick={() => {
          if (quantityCart === 0) {
            return Swal.fire({
              title: 'Ops!',
              text: 'Seu carrinho está vazio!',
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#3b74f2',
            });
          }
          setVisible(true);
        }}
      >
        {quantityCart > 0 && <BadgeCar>{quantityCart}</BadgeCar>}
        <Icon />
      </ButtonCart>
      <Wrapper>
        {state?.items?.map((product) => (
          <CardItem
            key={product.uniqueId}
            uniqueId={product.uniqueId}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </Wrapper>
      {visible && (
        <Modal handleClose={handleClose} onClose={() => setVisible(false)} />
      )}
    </Container>
  );
};
