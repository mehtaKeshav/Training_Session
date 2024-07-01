import React from 'react';
import { Button } from '@nextui-org/react';
import { useAtom } from 'jotai'; // Only use useAtom
import { cartAtom } from '../states/Cartatom';
import { ItemsAtom } from '../states/ItemsAtom';

const Home = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [items, setItems] = useAtom(ItemsAtom); 

  const handlePress = (item) => {
    const cartItem = cart.find((i) => i.id === item.id);

    if (!cartItem) {
      
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      
      const updatedCart = cart.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return i;
      });
      setCart(updatedCart);
    }

 
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
       
          if (!item.quantity) item.quantity = 0;
          const disabled = item.quantity > 0; 
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
              <div class="flex">
                <Button
                  radius="full"
                  disabled={disabled}
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                  onPress={() => {
                    handlePress(item);
                  }}
                >
                  Add
                </Button>
                <h3 class=' text-right grow'> Quantity in Cart: {item.quantity}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
