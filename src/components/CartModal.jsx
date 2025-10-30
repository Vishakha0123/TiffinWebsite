import React from "react";

const CartModal = ({ isOpen, onClose, plan }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-80 p-6 shadow-lg animate-fadeIn">
        <h2 className="text-xl font-semibold mb-3">Confirm Subscription</h2>

        <p className="mb-2">
          <strong>Plan:</strong> {plan}
        </p>

        <p className="text-sm text-gray-600 mb-5">
          This meal plan will be delivered daily. Billing occurs based on your selected cycle.
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              alert(`✅ Subscription confirmed: ${plan}`);
              onClose();
            }}
            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
