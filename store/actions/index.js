export const setBannerLoaded = () => {
  return {
    type: "SET_BANNER_LOADED",
  };
};

export const setDevice = (device) => {
  return {
    type: "SET_DEVICE",
    device: device,
  };
};
