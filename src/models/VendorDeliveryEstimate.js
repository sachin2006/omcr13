class VendorDeliveryEstimate {
  constructor(vendorId, deliveryPromise, cutoffTime, weeklyOff, country) {
    this.vendorRef = vendorId;
    this.deliveryPromise = deliveryPromise;
    this.cutoffTime = cutoffTime;
    this.weeklyOff = weeklyOff;
    this.country = country;
  }
}

export default VendorDeliveryEstimate;
