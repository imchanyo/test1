import { defineStore } from 'pinia';
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

export const useMyCartpiniaStore = defineStore({
  id: 'MyCartStre',
  state: () => {
    return {
      cartStore: [] as UserInterface[],
    };
  },
  actions: {
    addCart(product: UserInterface) {
      this.cartStore = checkValid(this.cartStore, product);
    },
    removeCart(id: number) {
      const newData = this.cartStore.filter((item) => item.id !== id);
      this.cartStore = newData;
    },
  },
});
