import { defineStore } from "pinia";
import { reactive } from "vue";

export const notifStore = defineStore('notifStore', () => {
  const notif = reactive({
    status: 'success',
    text: '',
    title: ''
  });

  const clearNotif = () => {
    notif.status = 'success';
    notif.text = '';
    notif.title = '';
  };

  const setNotif = (data) => {
    Object.assign(notif, data); 
    setTimeout(() => {
      clearNotif();
    }, 3000);
  };

  return {
    notif,
    clearNotif,
    setNotif,
  };
});
