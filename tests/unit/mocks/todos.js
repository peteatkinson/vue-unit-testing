import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const mockArraysCurrency = [
  {
    currency: "idr",
    nominalCurrency: 14400
  }
]

const mockRates = {
  "idr": 144000
}


export const state = {
  arraysCurrency: mockArraysCurrency,
  rates: mockRates,
  showModal: false
}

export const getters = {}

export const mutations = {
  GET_FORMAT_EXCHANGE_CURRENCY: jest.fn(),
  ADD_NEW_CURRENCY: jest.fn(),
  DELETE_CURRENCY: jest.fn(),
  CLOSE_MODAL: jest.fn(),
}

export const actions = {
  getFormatExchangeCurrency: jest.fn(),
  deleteCurrency: jest.fn(),
  addNewCurrency: jest.fn(),
  closeModal: jest.fn()
}

export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
  const mockGetters = Object.assign({}, getters, custom.getters);
  const mockMutations = Object.assign({}, mutations, custom.mutations);
  const mockActions = Object.assign({}, actions, custom.actions);
  const mockState = Object.assign({}, state, custom.state);
  return {
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
      store: new Vuex.Store({
          getters: mockGetters,
          mutations: mockMutations,
          actions: mockActions,
          state: mockState,
      }),
  };
}

export const store = __createMocks().store;