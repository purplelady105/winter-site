/* eslint-disable */
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'fa' || 'fa4' || 'mdi',
	},
	theme: {
		themes: {
			light: {
				primary: '#3E0804',
				secondary: '#5A1705',
				accent: '#FFFCD8',
				error: '#f44336',
				warning: '#ff5722',
				info: '#4caf50',
				success: '#03a9f4',
			}
		}
	}
});