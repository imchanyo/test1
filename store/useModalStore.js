import { defineStore } from "pinia";
import { reactive } from "vue";

export const useModalStore = defineStore("modal", () => {
  const modalState = reactive({
    show: false,
    modalTitle: "",
    modalText: "",
  });

  const showModal = (title, text) => {
    modalState.modalText = text;
    modalState.modalTitle = title;
    modalState.show = true;
    console.log(22);
  };
  const hideModal = () => {
    modalState.show = false;
    console.log(19);
  };

  return { modalState, hideModal, showModal };
});
