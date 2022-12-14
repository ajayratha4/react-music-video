import moment from "moment";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import momentDurationFormatSetup from "moment-duration-format";

export const getTimeInDurationFormat = (duration) => {
  return moment.duration(duration, "seconds").format("mm.ss", { trim: false });
};

export const getValueToPercentage = (curentTime, duration) => {
  return (parseFloat(curentTime) / parseFloat(duration)) * 100;
};

export const getPercentageToValue = (percentage, total) => {
  return (percentage * total) / 100;
};
