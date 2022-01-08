import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface ContextWallet {
  children: ReactNode;
}

interface CartItems {
  imageUrl: string;
  name: string;
  price: number;
  uniqueId: string;
}

interface HandleAddCart {
  imageUrl: string;
  name: string;
  price: number;
  uniqueId: string;
}

interface HandleRemoveCart {
  uniqueId: string;
}

const ContextWallet = createContext<any | null>(null);

const CarProvider = ({ children }: ContextWallet) => {
  const [quantityCart, setQuantityCart] = useState(0);
  const [cart, setCart] = useState<CartItems[]>([]);

  function handleAddItemToCart({
    imageUrl,
    name,
    price,
    uniqueId,
  }: HandleAddCart) {
    const product = {
      imageUrl,
      name,
      price,
      uniqueId,
    };
    setCart([...cart, product]);
  }

  function handleRemoveItemFromCart(uniqueId: HandleRemoveCart) {
    console.log(uniqueId);
    const filtered = cart?.filter((item: any) => item.uniqueId !== uniqueId);
    setCart(filtered);
  }

  useEffect(() => {
    const quantity = cart.length;
    setQuantityCart(quantity);
  }, [cart.length]);

  return (
    <ContextWallet.Provider
      value={{
        quantityCart,
        setQuantityCart,
        handleAddItemToCart,
        handleRemoveItemFromCart,
        cart,
        setCart,
      }}
    >
      {children}
    </ContextWallet.Provider>
  );
};

export const useCart = () => {
  const context = useContext(ContextWallet);
  if (!context) {
    throw new Error('useCar must be used within a CarProvider');
  }
  return context;
};

export default CarProvider;
