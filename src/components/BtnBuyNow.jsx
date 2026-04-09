import React, { useState } from "react";

const BtnBuyNow = ({ product, quantity, totalPrice }) => {
  const [showForm, setShowForm] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    if (!phone || !address) {
      alert("Please fill all fields");
      return;
    }

    alert(`Order Success!
Phone: ${phone}
Address: ${address}`);

    setShowForm(false);
    setPhone("");
    setAddress("");
  };

  return (
    <div>
      {/* Buy Now Button */}
      <button
        onClick={() => setShowForm(true)}
        className="border px-4 py-2 rounded-lg cursor-pointer bg-red-600 hover:scale-110 transition-all duration-300"
      >
        Buy Now
      </button>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 backdrop-blur-3xl  flex justify-center items-center z-50">
        
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg text-black">
            <h2 className="text-xl font-bold mb-4 text-black">Checkout</h2>
            <div className="border p-2 mb-3 rounded">
              <p><strong>Product:</strong> {product.name}</p>
              <p><strong>Qty:</strong> {quantity}</p>
              <p><strong>Total:</strong> ${totalPrice}</p>
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-black p-2 mb-3 rounded"
            />

            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-black p-2 mb-4 rounded "
            />

            <div className="flex justify-between">
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-400 px-4 py-2 rounded text-white"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-green-600 px-4 py-2 rounded text-white"
              >
                Confirm
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default BtnBuyNow;