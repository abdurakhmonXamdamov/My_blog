import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
    const toggle = ref(false);
    const confirmToggle = ref(false);
    const logoutConfirm = ref(false);
    const id = ref('');
    const editToggle = ref(false);

    function setLogoutConfirm(val) {
        logoutConfirm.value = val;
    }

    function setEdit({ id: newId, editToggle: newEditToggle }) {
        id.value = newId;
        editToggle.value = newEditToggle;
    }

    function setConfirmToggle(val) {
        confirmToggle.value = val;
    }

    function setToggle(val) {
        toggle.value = val;
        if (!val) {
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