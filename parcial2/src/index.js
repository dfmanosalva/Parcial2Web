import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import SeriesList from "./components/seriesList";

ReactDOM.render(
    <IntlProvider locale="es-ES" messages= {localeEsMessages}>
		<SeriesList/>
	</IntlProvider>, document.getElementById("root")
);