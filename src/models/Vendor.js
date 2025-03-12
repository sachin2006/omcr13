import VendorDeliveryEstimate from "./VendorDeliveryEstimate";

class Vendor {
  constructor(formData) {
    this.name = formData.vendorName;
    this.vendorRef = formData.concept;
    this.defaultLocale = "en";
    this.defaultCurrency = formData.currency;
    this.vendorType = formData.vendorType;
    this.lmgConcept = formData.parentConcept;
    this.vendorDeliveryEstimates = new VendorDeliveryEstimate(formData.concept, formData.deliveryPromise, formData.cutoffTime, formData.weekoff, formData.country);
  }
}

export default Vendor;
