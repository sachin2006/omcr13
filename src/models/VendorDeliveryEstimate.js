class VendorDeliveryEstimate {
  constructor(deliveryPromise, cutoffTime, weeklyOff, country) {
    this.deliveryEstimateDays = deliveryPromise;
    this.deliveryCutOffTime = cutoffTime;
    this.weeklyOff = weeklyOff;
    this.territory = country;
  }
}

export default VendorDeliveryEstimate;
