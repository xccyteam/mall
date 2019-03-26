/** 
 * 操作localStorage
 */
export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getItem = (key) => {
    if (localStorage.key) {
        return JSON.parse(localStorage.getItem(key))
    }
};
export const removeItem = (key) => localStorage.removeItem(key)