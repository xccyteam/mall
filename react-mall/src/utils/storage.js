/** 
 * 操作sessionStorage
 */
export const setItem = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));
export const getItem = (key) => {
    if (sessionStorage.key) {
        return JSON.parse(sessionStorage.getItem(key))
    }
};
export const removeItem = (key) => sessionStorage.removeItem(key)