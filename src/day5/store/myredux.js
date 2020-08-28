export function createStore(reducer, fn) {
  let state; // state 就是用来存储公用数据的
  let listeners = []; // 用来存储subscribe传进来的事件
  let getState = function () {
    //这个函数只是用来返回state的
    return state && JSON.parse(JSON.stringify(state)); // 深拷贝不影响原state
  };
  let dispatch = function (action) {
    // 用来触发reducer
    console.log(action);
    state = reducer(state, action);
    console.log("====", state);
    //发布
    // 数据更新依次执行订阅的函数
    listeners.forEach((item) => {
      item && item();
    });
  };
  dispatch({}); // 第一次执行(初始化) 为了给私有变量state一个初始值
  // 订阅函数
  let subscribe = function (f) {
    listeners.push(f);
    // 返回一个fn 在组件销毁的时候使用清除无用的事件
    return () => {
      // 过滤掉事件池中不需要执行的事件
      listeners = listeners.filter((item) => item !== f);
    };
  };
  if (typeof fn === "function") {
    return fn(createStore)(reducer); //执行整合middleware的fn 返回store对象
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}
// 整合多个reducer 传给createStore
export function combineReducers(obj) {
  // obj:{todo:todoReducer,color:colorReducer}
  //state 之后通过dispatch触发reducer执行 将 此state 赋值给 createStore的state 就是redux的唯一状态对象
  // 实参就是 state唯一状态对象
  return function (state = {}, action) {
    Object.keys(obj).forEach((item) => {
      // obj[item] todoReducer colorReducer
      state[item] = obj[item](state[item], action);
    });
    return state;
  };
}
// 整合多个中间件
export const compose = (...fns) => (...arg) => {
    let first = fns.shift()
    return fns.reduce((prev,cur)=>{
        return cur(prev)
    },first(...arg))
};

export function applyMiddleware(...middleware) {
  //middleware thunk
  return function (createStore) {
    return function (reducer) {
      let store = createStore(reducer); //{getState,dispatch,subscribe}
      // let  middle = middleware(store) //单个中间件
      let middles = middleware.map(item=>item(store));
      console.log("====", middles);
      // let temps = middles.map(item=>item(store.dispatch))
      // console.log(222222,temps)
      // let temp = middles[1](store.dispatch)
      // temp 是一个新的dispatch
      let temp = compose(...middles)(store.dispatch);
      return {
        ...store,
        dispatch: temp  // 覆盖原来的dispatch
      };
    };
  };
}
