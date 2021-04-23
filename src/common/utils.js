/**
 * 防抖函数,避免频繁请求
 */
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)//判断有定时器就清除,没有就执行下面的函数,
    //在delay指定时间内如没有再执行该函数才执行func的函数
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}