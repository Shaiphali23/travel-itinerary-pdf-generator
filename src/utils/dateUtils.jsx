export const addDays = (dateString, days) => {
  if (!dateString) return ""; // return empty string if no date is set

  const date = new Date(dateString);
  if (isNaN(date)) return ""; // invalid date

  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0]; // return YYYY-MM-DD format
};
