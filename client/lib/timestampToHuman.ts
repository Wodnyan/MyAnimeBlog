const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const timestampToHumanReadable = (timestamp: string) => {
  const date = new Date(timestamp);
  const humanReadable = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  return humanReadable;
};

export default timestampToHumanReadable;
