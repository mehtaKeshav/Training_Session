import React from 'react';
import { useAtom } from 'jotai';
import { Button } from '@nextui-org/react';
import { cartAtom } from '../states/Cartatom';
import { ItemsAtom } from '../states/ItemsAtom';
import confetti from 'canvas-confetti';

const Cart = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [items, setItems] = useAtom(ItemsAtom);

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 10, x:10 },
    });
  };

  const handleIncrement = (item) => {
    const updatedCart = cart.map((i) => {
      if (i.id === item.id) {
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    });
    setCart(updatedCart);

    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    });
    setItems(updatedItems);
  };

  const handleDecrement = (item) => {
    const updatedCart = cart.map((i) => {
      if (i.id === item.id && i.quantity > 0) {
        return { ...i, quantity: i.quantity - 1 };
      }
      return i;
    });
    setCart(updatedCart);

    const updatedItems = items.map((i) => {
      if (i.id === item.id && i.quantity > 0) {
        return { ...i, quantity: i.quantity - 1 };
      }
      return i;
    });
    setItems(updatedItems);
  };

  const handleRemove = (item) => {
    const updatedCart = cart.filter((i) => i.id !== item.id);
    setCart(updatedCart);

    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, quantity: 0 };
      }
      return i;
    });
    setItems(updatedItems);
  };

  const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  };

  return (
    <div className="justify-center mt-16 w-9/12 mx-auto">
      <h4 className="text-3xl flex justify-center mb-5">In Cart Items</h4>
      {cart.map((item) => (
        <ul className="w-full flex" key={item.id}>
          <li className="flex pb-5 w-full items-center">
            <Button
              disableRipple
              onPress={() => handleRemove(item)} // Pass the item correctly to the handler
              className="rounded-full text-red-700 border-2 border-red-500 p-1 mr-3"
            >
              Remove
            </Button>
            <h1 className="ml-0">{item.name}</h1>
            <h1 className="text-center">({item.volume} oz)</h1>
            <div className="ml-auto flex items-center space-x-2">
              <h1>${item.price} X </h1>
              <Button
                disableRipple
                className="border-2 rounded-xl border-black"
                size="sm"
                onPress={() => handleIncrement(item)}
              >
                +
              </Button>
              <h1>{item.quantity}</h1>
              <Button
                disableRipple
                className="border-2 rounded-xl border-black"
                size="sm"
                onPress={() => handleDecrement(item)}
              >
                -
              </Button>
            </div>
            <h1 className="ml-auto"> ${item.quantity * item.price}</h1>
          </li>
        </ul>
      ))}
      <h1 className="text-right text-2xl">Total: ${calculateTotal(cart)}</h1>
      <div className="w-full flex justify-end pt-3">
        <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onPress={handleConfetti}>
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Cart;
