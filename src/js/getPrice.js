function getRandomPrice() {
  return (Math.floor(Math.random() * 900) + 100).toFixed(2);
}

export {getRandomPrice};