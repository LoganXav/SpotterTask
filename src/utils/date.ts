// ----------------------------
// Reusable Utils
// ----------------------------
/**
 * Convert a Date into a readable flight-friendly label.
 * Example: "Sat, Aug 30"
 */
export const formatDateToLocaleString = (date: Date | null): string => {
  return date
    ? date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })
    : 'Select date';
};
