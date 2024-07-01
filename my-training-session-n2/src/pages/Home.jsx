import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { useAtom, useUpdateAtom } from 'jotai'; // Import useUpdateAtom
import { cartAtom } from '../states/Cartatom';
import { ItemsAtom } from '../states/ItemsAtom';
import data from "../components/groceries.json"

const Home = () => {
  const [cart, setCart] = useAtom(cartAtom);
  // const setCart = useUpdateAtom(cartAtom)
  const [items, setItems] = useAtom(ItemsAtom); 
  // const setItems = useUpdateAtom(ItemsAtom); // Use useUpdateAtom to update ItemsAtom

  const handlePress = (item) => {
    // Check if item is already in cart
    // const cartItem = cart.find((i) => i.id === item.id);

    // if (!cartItem) {
    //   // If item is not in cart, add it with quantity 1
    //   setCart([...cart, { ...item, quantity: 1 }]);
    // } else {
    //   // If item is already in cart, update its quantity
    //   const updatedCart = cart.map((i) => {
    //     if (i.id === item.id) {
    //       return { ...i, quantity: i.quantity + 1 };
    //     }
    //     return i;
    //   });
    //   setCart(updatedCart);
    // }

    // Update item quantity in ItemsAtom
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    });
    setItems(updatedItems);
  };

  return (
    <div className="h-full">
      <div className="grid gap-4 grid-cols-3 w-11/12 m-auto mt-16">
        {items.map((item) => {
          // Ensure each item has a quantity property initialized
          if (!item.quantity) item.quantity = 0;
          const disabled = item.quantity > 0; // Simplified disabled state

          const imageUrl = new URL(item.url, import.meta.url).href;

          return (
            <div key={item.id} className="border-2 shadow-lg shadow-gray-950 h-fit rounded-3xl p-3">
              <img src={imageUrl} alt={item.name} className="h-48 w-44 m-auto border-2" />
              <div className="text-black">
                <h2 className="text-xl text-center">{item.name}</h2>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>Price: ${item.price}</h3>
                </div>
                <div>
                  <h3>Weight: {item.volume} oz</h3>
                </div>
              </div>
              <div>
                <Button
                  radius="full"
                  disabled={disabled} // Use disabled prop directly
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                  onPress={() => {
                    handlePress(item);
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
