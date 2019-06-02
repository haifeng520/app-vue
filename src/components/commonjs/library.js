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
  },

  // 数组分割字符串
  arrayJoin(a) {
    let str = '';
		str = a.join(',');
		if(str.length > 0 && str[str.length-1] == ",") {
			str = str.substring(0,str.length-1);
        } else {
        	str = str;
		}
		return str;
  },
  // 是否为ie环境
  isIE() {
		if (!!window.ActiveXObject || "ActiveXObject" in window){
		  return true;
		}else{
		  return false;
		}
	}    
};
