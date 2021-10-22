const ApiKey = "9cff733aee57cb05b63dd4f731c46bc4";
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${ApiKey}&q=`;

const K = 273;

const actionTypes = {
  GUESS_TEMPERATURE: "GUESS_TEMPERATURE",
};

const fetchTempByCity = async (city) => {
  try {
    const result = await fetch(`${URL}${city}`);
    return await result.json();
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  cities: [
    {
      name: "Kyiv",
    },
    {
      name: "Paris",
    },
    {
      name: "Tokyo",
    },
    {
      name: "Budapest",
    },
    {
      name: "Warsaw",
    },
  ],
  guessing: {},
  currentCity: 0,
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GUESS_TEMPERATURE:
      const { city, temp, realTemp } = payload;
      return {
        ...state,
        guessing: { ...state.guessing, [city]: { guessTemp: temp, realTemp } },
        currentCity: state.currentCity + 1,
      };
    default:
      return state;
  }
};

export const guessTemparature = (payload) => {
  return async (dispatch) => {
    const {
      main: { temp },
    } = await fetchTempByCity(payload.city);

    const realTemp = Math.floor(temp - K);

    return dispatch({
      type: "GUESS_TEMPERATURE",
      payload: { ...payload, realTemp },
    });
  };
};
