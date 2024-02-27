import { type UserInterface } from '@/models/ProductInterface';

const checkValid = (carStore: UserInterface[], product: UserInterface) => {
  const res = [
    ...carStore,
    {
      ...product,
    },
  ];
  return res.reduce(function (acc: UserInterface[], current: UserInterface) {
    if (acc.findIndex(({ id }) => id === current.id) === -1) {
      acc.push(current);
    }
    return acc;
  }, []);
};

export const useMyCartStore = () => {
  const cartStore = useState<UserInterface[]>('cart', () => []);

  const addCart = (product: UserInterface) => {
    cartStore.value = checkValid(cartStore.value, product);
  };

  const removeCart = (id: number) => {
    const newData = cartStore.value.filter((item) => item.id !== id);
    cartStore.value = newData;
  };

  return {
    addCart,
    removeCart,
    cartStore,
  };
};
