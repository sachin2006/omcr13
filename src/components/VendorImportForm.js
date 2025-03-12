import React, { useState } from "react";
import './FormStyles.css';
//import VendorDeliveryEstimate from "../models/VendorDeliveryEstimate";
import Vendor from "../models/Vendor";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    vendorName: "",
    concept: "",
    parentConcept: "",
    vendorType: "",
    country: "",
    weekoff: [],
    customerNameEnglish: "",
    customerNameArabic: "",
    currency: "",
    deliveryPromise: "",
    cutoffTime: ""
  });

  const [errors, setErrors] = useState({});

  const vendorTypes = [
    { label: "CONLOC", value: "CONLOC" },
    { label: "DROPSHIP", value: "DROPSHIP" },
    { label: "SORT", value: "SORT" },
  ];

  const countries = [
    { label: "KUWAIT", value: "KW", currency: "KWD" },
    { label: "UAE", value: "AE", currency: "AED" },
    { label: "KSA", value: "SA", currency: "SAR" },
    { label: "QATAR", value: "QA", currency: "QAR" },
  ];

  const weekoff = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const parentConcept = [
    { label: "HOMECENTRE", value: "HOMECENTRE" },
    { label: "CENTREPOINT", value: "CENTREPOINT" },
    { label: "BABYSHOP", value: "BABYSHOP" },
    { label: "LIFESTYLE", value: "LIFESTYLE" },
    { label: "HOMEBOX", value: "HOMEBOX" },
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "country") {
      const selectedCountry = countries.find((country) => country.value === value);
      setFormData({
        ...formData,
        [name]: value,
        currency: selectedCountry ? selectedCountry.currency : "",
      });
    }
  };

  const handleMultiSelectChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, weekoff: options });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] || (Array.isArray(formData[key]) && formData[key].length === 0)) {
        newErrors[key] = "This field is required";
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Data:", formData);
      setErrors({});
      var vendor = new Vendor(formData);
      const vendorJson = JSON.stringify(vendor);
      console.log("Vendor JSON:", vendorJson);
      // var vendorEstimate = new VendorDeliveryEstimate(formData.concept, formData.deliveryPromise, formData.cutoffTime, formData.weekoff, formData.country);
      // const vendorEstimateJson = JSON.stringify(vendorEstimate);
      // console.log("Vendor Estimate JSON:", vendorEstimateJson);
      alert(vendorJson);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">
          <h5 className="card-title highlighted-title">Vendor Information Form</h5>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="vendorName" className="form-label">
                  Vendor Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="vendorName"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleInputChange}
                  required
                />
                {errors.vendorName && <div className="text-danger">{errors.vendorName}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="concept" className="form-label">
                  Concept <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="concept"
                  name="concept"
                  value={formData.concept}
                  onChange={handleInputChange}
                  required
                />
                {errors.concept && <div className="text-danger">{errors.concept}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="parentConcept" className="form-label">
                  Parent Concept <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  id="parentConcept"
                  name="parentConcept"
                  value={formData.parentConcept}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a Parent Concept</option>
                  {parentConcept.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.parentConcept && <div className="text-danger">{errors.parentConcept}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="vendorType" className="form-label">
                  Vendor Type <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  id="vendorType"
                  name="vendorType"
                  value={formData.vendorType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a Vendor Type</option>
                  {vendorTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.vendorType && <div className="text-danger">{errors.vendorType}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="country" className="form-label">
                  Country <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a Country</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
                {errors.country && <div className="text-danger">{errors.country}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="currency" className="form-label">
                  Currency <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  readOnly
                  required
                />
                {errors.currency && <div className="text-danger">{errors.currency}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="customerNameEnglish" className="form-label">
                  Customer Facing Name (English)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerNameEnglish"
                  name="customerNameEnglish"
                  value={formData.customerNameEnglish}
                  onChange={handleInputChange}
                />
                {errors.customerNameEnglish && <div className="text-danger">{errors.customerNameEnglish}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="customerNameArabic" className="form-label">
                  Customer Facing Name (Arabic)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerNameArabic"
                  name="customerNameArabic"
                  value={formData.customerNameArabic}
                  onChange={handleInputChange}
                />
                {errors.customerNameArabic && <div className="text-danger">{errors.customerNameArabic}</div>}
              </div>
            </div>
            <div className="row">
                <div className="">
                    <label htmlFor="deliveryPromise" className="form-label ">
                         <h5>Delivery Promise</h5>
                    </label>
                </div>
            </div>
            <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="deliveryPromise" className="form-label">
                      Delivery Promise <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="deliveryPromise"
                      name="deliveryPromise"
                      value={formData.deliveryPromise}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.deliveryPromise && <div className="text-danger">{errors.deliveryPromise}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cutoffTime" className="form-label">
                      Cutoff Time (HH:MM:SS) <span className="text-danger">*</span>
                    </label>
                    <input
                      type="time"
                      step="1"
                      className="form-control"
                      id="cutoffTime"
                      name="cutoffTime"
                      value={formData.cutoffTime}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.cutoffTime && <div className="text-danger">{errors.cutoffTime}</div>}
                  </div>
                </div>
            
                <div className="row">
              <div className="col-md-12 mb-3">
                <label htmlFor="weekoff" className="form-label">
                  Week Days <span className="text-danger">*</span>
                </label>
                <select
                  multiple
                  className="form-select"
                  id="weekoff"
                  name="weekoff"
                  value={formData.weekoff}
                  onChange={handleMultiSelectChange}
                  required
                >
                  {weekoff.map((day, index) => (
                    <option key={index} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                {errors.weekoff && <div className="text-danger">{errors.weekoff}</div>}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
