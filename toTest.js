module.exports = {
  sum: function(a, b) {
    return a + b
  },
  contains: function(arr, item) {
    return arr.includes(item);
  },
  hashEnoughMoney: function(walletAmount, amount) {
    const leftOver = walletAmount - amount;
    return leftOver >= 0
  },
  canMakeOrder: function(shopStartTime, shopEndTime) {
    const currentTime = new Date()

    const startHour = shopStartTime.getHours()
    const startMinute = shopStartTime.getMinutes()
    const startSeconds = shopStartTime.getSeconds()
    const endHour = shopEndTime.getHours()
    const endMinute = shopEndTime.getMinutes()
    const endSeconds = shopEndTime.getSeconds()

    const isOverStartHour = currentTime.getHours() > startHour;
    const isOverStartMinutes = currentTime.getMinutes() > startMinute;
    const isOverStartSeconds = currentTime.getSeconds() > startSeconds;

    const isBelowEndHour = currentTime.getHours() < endHour
    const isBelowEndMinute = currentTime.getMinutes() < endMinute
    const isBelowEndSeconds = currentTime.getSeconds() < endMinute

    const canMakeOrder = (isOverStartHour && isOverStartMinutes && isOverStartSeconds) && (isBelowEndHour && isBelowEndMinute && isBelowEndMinute)
    return canMakeOrder;
  },
  fullName: function(first, last) {
    return `${first} ${last}`;
  },
  shouldResolve: function() {
    return new Promise(res => {
      setTimeout(() => {
        res('good.')
      }, 600)
    })
  }
}