import React from "react";

const InclusionsExclusionsForm = ({ inclusions, exclusions, setInclusions, setExclusions }) => {
  return (
    <div className="bg-white p-3 sm:p-4 rounded shadow-sm">
      <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-2">Inclusions & Exclusions</h3>
      <div className="grid grid-cols-1 gap-3 sm:gap-2">
        <textarea 
          value={inclusions} 
          onChange={e => setInclusions(e.target.value)} 
          rows={3} 
          className="border p-2 sm:p-2 rounded w-full text-sm sm:text-base"
          placeholder="Inclusions (one per line)"
        ></textarea>
        <textarea 
          value={exclusions} 
          onChange={e => setExclusions(e.target.value)} 
          rows={3} 
          className="border p-2 sm:p-2 rounded w-full text-sm sm:text-base"
          placeholder="Exclusions (one per line)"
        ></textarea>
      </div>
    </div>
  );
};

export default InclusionsExclusionsForm;