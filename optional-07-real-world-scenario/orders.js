// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
const orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const id = generateUniqueId();
  const order = {
    id,
    customerName,
    items,
    totalPrice: items.reduce((totalPrice, item) => totalPrice + item.price, 0),
    status: "Menunggu",
  };
  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const index = orders.findIndex((order) => order.id === orderId);

  if (index != -1) {
    orders[index].status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.reduce((totalRevenue, order) => {
    return order.status == "Selesai" ? totalRevenue + order.totalPrice : totalRevenue;
  }, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex((order) => order.id === id);

  if (index != -1) {
    orders.splice(index, 1);
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
