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

export const setWidth = (width) => {
  return {
    type: "SET_WIDTH",
    width: width,
  };
};
