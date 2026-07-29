// src/app/core/models/index.ts
var TRACKING_STEPS = ["Pending", "Processing", "Shipped", "Delivered"];
var ALL_STATUSES = [...TRACKING_STEPS, "Cancelled"];
var STATUS_LABEL = {
  Pending: "Pending",
  Processing: "Processing",
  Shipped: "Shipped",
  Delivered: "Delivered",
  Cancelled: "Cancelled"
};

export {
  TRACKING_STEPS,
  ALL_STATUSES,
  STATUS_LABEL
};
//# sourceMappingURL=chunk-NEQP5CTB.js.map
