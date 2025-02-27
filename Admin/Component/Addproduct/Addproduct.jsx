import React, { useState } from 'react';
import './Addproduct.css';

const Addproduct = () => {
  const [productDetails, setProductDetails] = useState({
    id: "",
    image: null,
    DealerName: "",
    category: "",
    litter: "",
    PhoneNumber: "",
    Email: "",
    address: "",
    state: "",
    District: "",
    Dimensions: "",
    decorationLevel: "",
    filterationType: "",
    price: "",
  });

  const [isLoading, setIsLoading] = useState(false); // For button state

  const changeHandler = (e) => {
    if (e.target.name === "image") {
      setProductDetails({ ...productDetails, image: e.target.files[0] });
    } else {
      setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }
  };

  const Add_Product = async () => {
    // Dynamic field validation
    for (const key in productDetails) {
      if (!productDetails[key] && key !== "image") {
        alert(`Please fill the ${key} field.`);
        return;
      }
    }
    if (!productDetails.image) {
      alert("Please upload an image.");
      return;
    }

    setIsLoading(true); // Disable button while processing

    let formData = new FormData();
    for (const key in productDetails) {
      formData.append(key, productDetails[key]);
    }

    try {
      // Upload the image
      const uploadResponse = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
      const responseData = await uploadResponse.json();

      if (responseData.success) {
        // Add the product
        const product = { ...productDetails, image: responseData.image_url };

        const productResponse = await fetch('http://localhost:4000/addproduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });

        const result = await productResponse.json();
        if (result.success) {
          alert("Product added successfully");
          setProductDetails({
            id: "",
            image: null,
            DealerName: "",
            category: "",
            litter: "",
            PhoneNumber: "",
            Email: "",
            address: "",
            state: "",
            District: "",
            Dimensions: "",
            decorationLevel: "",
            filterationType: "",
            price: "",
          });
        } else {
          alert("Failed to add product.");
        }
      } else {
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the product.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="addproduct">
      <div className="addproduct-items">
        <h1>ADD PRODUCT</h1>
        <div className="addproduct-field">
          <p>Product ID</p>
          <input
            value={productDetails.id}
            onChange={changeHandler}
            type="text"
            name="id"
            placeholder="Enter ID"
            required
          />
        </div>

        <div className="addproduct-field">
          <p>Dealer Name</p>
          <input
            value={productDetails.DealerName}
            onChange={changeHandler}
            type="text"
            name="DealerName"
            placeholder="Enter Name"
            required
          />
        </div>

        <div className="addproduct-field">
          <p>Product Capacity</p>
          <input
            value={productDetails.litter}
            onChange={changeHandler}
            type="text"
            name="litter"
            placeholder="Enter Capacity"
            required
          />
        </div>

        <div className="addproduct-field">
          <p>Address</p>
          <input
            value={productDetails.address}
            onChange={changeHandler}
            type="text"
            name="address"
            placeholder="Enter Address"
            required
          />
        </div>

        <div className="addproduct-field addproduct-category">
          <p>State</p>
          <select
            value={productDetails.state}
            onChange={changeHandler}
            name="state"
            className="selector"
            required
          >
           <option value="">Select State</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Ladakh">Ladakh</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>

           
          </select>
        </div>

        <div className="addproduct-field addproduct-category">
          <p>Category</p>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            className="selector"
            required
          >
            <option value="">Select Category</option>
            <option value="pond">Pond</option>
            <option value="planted">Planted</option>
            <option value="decorative">Decorative</option>
            <option value="marine">Marine</option>
          </select>
        </div>

        <div className="addproduct-field">
          <p>Phone Number</p>
          <input
            value={productDetails.PhoneNumber}
            onChange={changeHandler}
            type="text"
            name="PhoneNumber"
            placeholder="Enter Phone Number"
            required
          />
        </div>

        <div className="addproduct-field">
          <p>Dimensions</p>
          <input
            value={productDetails.Dimensions}
            onChange={changeHandler}
            type="text"
            name="Dimensions"
            placeholder="Enter Dimensions"
            required
          />
        </div>

        <div className="addproduct-field">
          <p>Price</p>
          <input
            value={productDetails.price}
            onChange={changeHandler}
            type="text"
            name="price"
            placeholder="Enter Price"
            required
          />
        </div>

        <div className="addproduct-field">
          <p>Email</p>
          <input
            value={productDetails.Email}
            onChange={changeHandler}
            type="text"
            name="Email"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="addproduct-field">
          <p>District</p>
          <input
            value={productDetails.District}
            onChange={changeHandler}
            type="text"
            name="District"
            placeholder="Enter District"
            required
          />
        </div>

        <div className="addproduct-field">
          <label htmlFor="file-input">
            <p>Upload Product Image</p>
            <img src="" className="imaged" alt="upload" />
          </label>
          <input
            onChange={changeHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>

        <div className="addproduct-field addproduct-category">
          <p>Decoration Level</p>
          <select
            value={productDetails.decorationLevel}
            onChange={changeHandler}
            name="decorationLevel"
            required
            className="selector"
          >
            <option value="">Select Decoration Level</option>
            <option value="high">High</option>
            <option value="mid">Mid</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="addproduct-field addproduct-category">
          <p>Filteration Type</p>
          <select
            value={productDetails.filterationType}
            onChange={changeHandler}
            name="filterationType"
            required
            className="selector"
          >
            <option value="">Select Filteration Type</option>
            <option value="sump">Sump</option>
            <option value="topfilter">Top Filter</option>
            <option value="canister">Canister</option>
          </select>
        </div>

        <div className="down">
          <button
            onClick={Add_Product}
            className="addproduct-button"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
