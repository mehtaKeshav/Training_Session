import React from 'react';
import { useAtom, useUpdateAtom } from 'jotai'; // Import useUpdateAtom hook
import { Button } from '@nextui-org/react';
import { cartAtom } from '../states/Cartatom';
import { ItemsAtom } from '../states/ItemsAtom';

const Cart = () => {
  const [cart, setCart] = useAtom(cartAtom);
  // const setCart = useUpdateAtom(cartAtom)
  const [items, setItems] = useAtom(ItemsAtom); // Use atom directly without destructuring
  // const setItems = useUpdateAtom(ItemsAtom); // Use useUpdateAtom for updating state

  const handleIncrement = (item) => {
    // const updatedCart = cart.map((i) => {
    //   if (i.id === item.id) {
    //     return { ...i, quantity: i.quantity + 1 };
    //   }
    //   return i;
    // });
    // setCart(updatedCart);

    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    });
    setItems(updatedItems); // Update items atom state with the new array
  };

  const handleDecrement = (item) => {
    // const updatedCart = cart.map((i) => {
    //   if (i.id === item.id && i.quantity > 0) {
    //     return { ...i, quantity: i.quantity - 1 };
    //   }
    //   return i;
    // });
    // setCart(updatedCart);

    const updatedItems = items.map((i) => {
      if (i.id === item.id && i.quantity > 0) {
        return { ...i, quantity: i.quantity - 1 };
      }
      return i;
    });
    setItems(updatedItems); // Update items atom state with the new array
  };

  return (
    <div className="justify-center mt-16 w-9/12 mx-auto">
      <h4 className="text-3xl flex justify-center mb-5">In Cart Items</h4>
      {cart.map((item) => (
        <ul className="w-full flex" key={item.id}>
          <li className="flex pb-5 w-full items-center">
            <h1 className="ml-0">{item.name}</h1>
            <h1 className="text-center">({item.volume} oz)</h1>
            <div className="ml-auto flex items-center space-x-2">
              <h1>${item.price} X </h1>
              <Button
                disableRipple
                className="border-2 rounded-xl border-black"
                size="sm"
                onPress={() => handleIncrement(item)} // Use arrow function to pass reference
              >
                +
              </Button>
              <h1>{item.quantity}</h1>
              <Button
                disableRipple
                className="border-2 rounded-xl border-black"
                size="sm"
                onPress={() => handleDecrement(item)} // Use arrow function to pass reference
              >
                -
              </Button>
            </div>
            <h1 className="ml-auto"> ${item.quantity * item.price}</h1>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Cart;
