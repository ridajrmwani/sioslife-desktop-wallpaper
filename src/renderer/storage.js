/* eslint-disable no-undef */
export default {
    SetValue: (storageKey, value) => localStorage.setItem(storageKey, value),
    GetValue: storageKey => localStorage.getItem(storageKey),
}
