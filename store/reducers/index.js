const bannerState = {
  isBannerLoaded: false,
};

export const bannerReducer = (state = bannerState, action) => {
  switch (action.type) {
    case "SET_BANNER_LOADED":
      return {
        ...state,
        isBannerLoaded: true,
      };
    default:
      return state;
  }
};

const deviceState = {
  device: "desktop",
};

export const deviceReducer = (state = deviceState, action) => {
  switch (action.type) {
    case "SET_DEVICE":
      return {
        ...state,
        device: action.device,
      };
    default:
      return state;
  }
};
