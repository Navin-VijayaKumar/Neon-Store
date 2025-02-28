import React, { useState } from "react";
import "./Addproduct.css";

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    id: "",
    name: "",
    image: null,
    category: "",
    longImage: null,
    gameDes: "",
    gameTitleImg: null,
    rating: "",
    osMin: "",
    osRec: "",
    proMin: "",
    proRec: "",
    memoryMin: "",
    memoryRec: "",
    storageMin: "",
    storageRec: "",
    graphicMin: "",
    graphicRec: "",
    otherMin: "",
    otherRec: "",
    languages: "",
    new_price: "",
    old_price: "",
    offer_percentage: "",
    age_limit: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState({});

  // Handle Input Change
  const changeHandler = (e) => {
    if (e.target.type === "file") {
      setProductDetails({ ...productDetails, [e.target.name]: e.target.files[0] });
    } else {
      setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }
  };

  // Function to Upload Image
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const responseData = await response.json();
      return responseData.image_url;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  // Function to Add Product
  const Add_Product = async () => {
    for (const key in productDetails) {
      if (!productDetails[key] && key !== "image" && key !== "longImage" && key !== "gameTitleImg") {
        alert(`Please fill the ${key} field.`);
        return;
      }
    }

    if (!productDetails.image || !productDetails.longImage || !productDetails.gameTitleImg) {
      alert("Please upload all required images.");
      return;
    }

    setIsLoading(true);

    // Upload images
    const uploadedImage = await uploadImage(productDetails.image);
    const uploadedLongImage = await uploadImage(productDetails.longImage);
    const uploadedGameTitleImg = await uploadImage(productDetails.gameTitleImg);

    if (!uploadedImage || !uploadedLongImage || !uploadedGameTitleImg) {
      alert("Image upload failed. Please try again.");
      setIsLoading(false);
      return;
    }

    // Update product details with uploaded image URLs
    const productData = {
      ...productDetails,
      image: uploadedImage,
      longImage: uploadedLongImage,
      gameTitleImg: uploadedGameTitleImg,
    };

    try {
      const productResponse = await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      const result = await productResponse.json();
      if (result.success) {
        alert("Product added successfully!");
        setProductDetails({
          id: "",
          name: "",
          image: null,
          category: "",
          longImage: null,
          gameDes: "",
          gameTitleImg: null,
          rating: "",
          osMin: "",
          osRec: "",
          proMin: "",
          proRec: "",
          memoryMin: "",
          memoryRec: "",
          storageMin: "",
          storageRec: "",
          graphicMin: "",
          graphicRec: "",
          otherMin: "",
          otherRec: "",
          languages: "",
          new_price: "",
          old_price: "",
          offer_percentage: "",
          age_limit: "",
        });
        setUploadedImages({});
      } else {
        alert("Failed to add product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="addproduct">
      <div className="addproduct-items">
        <h1>ADD PRODUCT</h1>

        {Object.keys(productDetails).map((key) =>
          key !== "image" && key !== "longImage" && key !== "gameTitleImg" ? (
            <div className="addproduct-field" key={key}>
              <label htmlFor={key}>{{
                id: "Product ID",
                name: "Product Name",
                category: "Product Category",
                gameDes: "Game Description",
                rating: "Game Rating (1-5)",
                osMin: "Minimum OS Requirement",
                osRec: "Recommended OS",
                proMin: "Minimum Processor",
                proRec: "Recommended Processor",
                memoryMin: "Minimum RAM (GB)",
                memoryRec: "Recommended RAM (GB)",
                storageMin: "Minimum Storage (GB)",
                storageRec: "Recommended Storage (GB)",
                graphicMin: "Minimum Graphics Card",
                graphicRec: "Recommended Graphics Card",
                otherMin: "Other Minimum Requirements",
                otherRec: "Other Recommended Requirements",
                languages: "Supported Languages",
                new_price: "New Price ($)",
                old_price: "Old Price ($)",
                offer_percentage: "Discount Percentage (%)",
                age_limit: "Age Limit (e.g., 18+)",
              }[key]}</label>
              <input
                value={productDetails[key]}
                onChange={changeHandler}
                type="text"
                name={key}
                id={key}
                placeholder={`Enter ${{
                  id: "Product ID",
                  name: "Product Name",
                  category: "Product Category",
                  gameDes: "Game Description",
                  rating: "Game Rating (1-5)",
                  osMin: "Minimum OS Requirement",
                  osRec: "Recommended OS",
                  proMin: "Minimum Processor",
                  proRec: "Recommended Processor",
                  memoryMin: "Minimum RAM (GB)",
                  memoryRec: "Recommended RAM (GB)",
                  storageMin: "Minimum Storage (GB)",
                  storageRec: "Recommended Storage (GB)",
                  graphicMin: "Minimum Graphics Card",
                  graphicRec: "Recommended Graphics Card",
                  otherMin: "Other Minimum Requirements",
                  otherRec: "Other Recommended Requirements",
                  languages: "Supported Languages",
                  new_price: "New Price ($)",
                  old_price: "Old Price ($)",
                  offer_percentage: "Discount Percentage (%)",
                  age_limit: "Age Limit (e.g., 18+)",
                }[key]}`}
                required
              />
            </div>
          ) : (
            <div className="addproduct-field" key={key}>
              <label htmlFor={key}>
                <p>Upload {{
                  image: "Main Product Image",
                  longImage: "Long Product Image",
                  gameTitleImg: "Game Title Image",
                  
                }[key]}</p>
                <input onChange={changeHandler} type="file" name={key} id={key}  />
              </label>
              {uploadedImages[key] && <img src={uploadedImages[key]} alt={key} width="100px" />}
            </div>
          )
        )}

        <div className="down">
          <button onClick={Add_Product} className="addproduct-button" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
