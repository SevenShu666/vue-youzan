import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import AsideListStore from "./modules/AsideList";
import goodStore from "./modules/good";
import searchStore from "./modules/AsideSearch";
import loginStore from "./modules/login";
import dashboardStore from "./modules/dashboard";

const store = new Vuex.Store({
  modules:{
	AsideListStore,
	goodStore,
	searchStore,
	loginStore,
	dashboardStore
  }
})

export default store;