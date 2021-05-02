export const makeOrder = (order) => {
    let orderList = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("order")) {
        orderList = JSON.parse(localStorage.getItem("order"));
      }
      orderList.push({
        ...order,
        count: 1
      });
      localStorage.setItem("order", JSON.stringify(orderList));
    }
};

export const loadOrder = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("order")) {
        return JSON.parse(localStorage.getItem("order"));
      }
    }
};