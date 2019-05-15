export default {
  //存储session
  setSessionStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  // 设置LocalStorage
  setLocalStorage(key, value) {
    let smap = { zhuanhuankey_local: value };
    let valstr = JSON.stringify(smap);
    localStorage.setItem(key, valstr);
  },
  // 获取LocalStorage
  getLocalStorage(key) {
    let objstr = localStorage.getItem(key);
    if (objstr) {
      let obj = JSON.parse(objstr);
      return obj.zhuanhuankey_local;
    } else {
      return objstr;
    }
  },
  //获取session
  getSessionStorage(key) {
    let objstr = sessionStorage.getItem(key);
    if (objstr) {
      let obj = JSON.parse(objstr);
      return obj;
    } else {
      return false;
    }
  },
  removeSession(key) {
    sessionStorage.removeItem(key);
  },
  removeLocal(key) {
    localStorage.removeItem(key);
  }
};
