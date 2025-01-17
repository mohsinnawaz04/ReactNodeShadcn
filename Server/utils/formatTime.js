export function formatTimestampForWhatsApp(timestamp) {
  const date = new Date(timestamp); // Convert the timestamp to Date object

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, "0");

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Concatenate into the desired format: yyyyMMddHHmmss
  const formattedTimestamp = `${year}${month}${day}${hours}${minutes}${seconds}`;
  return formattedTimestamp;
}
