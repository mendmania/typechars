import { defineStore } from 'pinia';

export const useModalStore = defineStore('useModalStore', {
  state: () => ({
    showModal: true,
    active: false,
    data: 'meni'
  }),
  actions: {
    showModal() {
      this.active = true;
    },
    hideModal() {
      this.active = false;
    },
    setModalData(data) {
      this.data = data
    }
  },
});