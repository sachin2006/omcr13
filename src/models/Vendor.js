import VendorDeliveryEstimate from "./VendorDeliveryEstimate";

class Vendor {
  constructor(formData) {
    this.name = formData.vendorName;
    this.vendorRef = formData.concept;
    this.defaultLocale = "en";
    this.defaultCurrency = formData.currency;
    this.vendorType = formData.vendorType;
    this.lmgConcept = formData.parentConcept;
    this.vendorDeliveryEstimate = new VendorDeliveryEstimate(formData.deliveryPromise, formData.cutoffTime, formData.weekoff.join(","), formData.country);
  }
}

export default Vendor;
