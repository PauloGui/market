import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { ReactComponent as Icon } from '../../assets/shopping-cart.svg';
import { CardItem } from '../../components/CardItem';
import Modal from '../../components/Modal';
import { useCart } from '../../contexts';

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
    (async () => {
      const res = await fetch(
        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220106T150132Z&X-Amz-Expires=86400&X-Amz-Signature=ee553e3e58245d4779f739cb7209c3bf58f501b7800a32d33de5c8cd971be143&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22&x-id=GetObject',
      );
      const json = await res.json();
      setState(json);
    })();
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
