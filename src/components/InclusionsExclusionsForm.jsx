import React from "react";

const InclusionsExclusionsForm = ({ inclusions, exclusions, setInclusions, setExclusions }) => {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h3 className="font-semibold mb-2">Inclusions & Exclusions</h3>
      <div className="grid grid-cols-1 gap-2">
        <textarea value={inclusions} onChange={e=>setInclusions(e.target.value)} rows={3} className="border p-2 rounded" placeholder="Inclusions (one per line)"></textarea>
        <textarea value={exclusions} onChange={e=>setExclusions(e.target.value)} rows={3} className="border p-2 rounded" placeholder="Exclusions (one per line)"></textarea>
      </div>
    </div>
  );
};

export default InclusionsExclusionsForm;
