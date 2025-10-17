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
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Payment Plan</h3>
        <button
          onClick={add}
          className="text-sm px-3 py-1 bg-indigo-600 text-white rounded"
        >
          Add Installment
        </button>
      </div>

      <div className="space-y-2">
        {payments.length === 0 && (
          <div className="text-sm text-gray-500">No installments added</div>
        )}
        {payments.map((p) => (
          <div key={p.id} className="flex gap-2 items-center">
            <input
              value={p.amount}
              onChange={(e) => update(p.id, "amount", e.target.value)}
              placeholder="Amount"
              className="border p-2 rounded flex-1"
            />
            <input
              value={p.dueDate}
              onChange={(e) => update(p.id, "dueDate", e.target.value)}
              placeholder="Due date"
              className="border p-2 rounded"
            />
            <button onClick={() => remove(p.id)} className="text-red-600">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlanForm;
