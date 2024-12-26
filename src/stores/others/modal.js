import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
    const toggle = ref(false);
    const confirmToggle = ref(false);
    const logoutConfirm = ref(false);
    const id = ref('');
    const editToggle = ref(false);

    function setLogoutConfirm(payload) {
        logoutConfirm.value = payload;
    }

    function setEdit({ id: newId, editToggle: newEditToggle }) {
        id.value = newId;
        editToggle.value = newEditToggle;
    }

    function setConfirmToggle(payload) {
        confirmToggle.value = payload;
    }

    function setToggle(payload) {
        toggle.value = payload;
        if (!payload) {
            id.value = '';
            editToggle.value = false;
        }
    }

    return {
        toggle,
        confirmToggle,
        logoutConfirm,
        id,
        editToggle,
        setLogoutConfirm,
        setEdit,
        setConfirmToggle,
        setToggle,
    };
});
