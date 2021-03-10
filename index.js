const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 0;
  let batteryBatchesSum = [4, 5, 3, 4, 4, 6, 5].reduce( (total, element) => element * 2 + total, 10);