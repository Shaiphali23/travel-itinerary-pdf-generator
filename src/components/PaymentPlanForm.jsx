import React from "react";

const PaymentPlanForm = ({ payments, setPayments }) => {
  const add = () => {
    const id = payments.length ? Math.max(...payments.map((p) => p.id)) + 1 : 1;
    setPayments([...payments, { id, amount: "", dueDate: "" }]);
  };
  const remove = (id) => setPayments(payments.filter((p) => p.id !== id));
  const update = (id, key, value) =>
    setPayments(
      payments.map((p) => (p.id === id ? { ...p, [key]: value } : p))
    );

  return (
    <div className="bg-white p-3 sm:p-4 rounded shadow-sm">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-3 sm:mb-2">
        <h3 className="font-semibold text-lg sm:text-xl">Payment Plan</h3>
        <button
          onClick={add}
          className="w-full sm:w-auto text-sm px-4 py-2 sm:px-3 sm:py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          Add Installment
        </button>
      </div>

      <div className="space-y-3 sm:space-y-2">
        {payments.length === 0 && (
          <div className="text-sm text-gray-500 text-center sm:text-left py-2">
            No installments added
          </div>
        )}
        {payments.map((p) => (
          <div key={p.id} className="flex flex-col sm:flex-row gap-2 sm:gap-2 items-stretch sm:items-center">
            <input
              value={p.amount}
              onChange={(e) => update(p.id, "amount", e.target.value)}
              placeholder="Amount"
              className="border p-2 rounded flex-1 text-sm sm:text-base"
            />
            <input
              type="date"
              value={p.dueDate}
              onChange={(e) => update(p.id, "dueDate", e.target.value)}
              placeholder="Due date"
              className="border p-2 rounded flex-1 sm:flex-none text-sm sm:text-base"
            />
            <button 
              onClick={() => remove(p.id)} 
              className="text-red-600 hover:text-red-800 transition-colors py-2 sm:py-0 text-sm sm:text-base w-full sm:w-auto text-center"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlanForm;