const initState = {
  isBannerLoaded: false,
};

export const bannerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_BANNER_LOADED':
      return {
        ...state,
        isBannerLoaded: true,
      };
    default:
      return state;
  }
};