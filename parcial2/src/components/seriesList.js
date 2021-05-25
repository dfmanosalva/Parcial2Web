import React, { useState } from "react";
import {IntlProvider, FormattedMessage, injectIntl, useIntl} from 'react-intl';
import Serie from "./serie";

const SeriesList = () => {

    const intl = useIntl()
    const [series] = useState(JSON.parse(intl.formatMessage({id:"JSON"})))

    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><FormattedMessage id="Name"/></th>
                        <th scope="col"><FormattedMessage id="Channel"/></th>
                        <th scope="col"><FormattedMessage id="Seasons"/></th>
                        <th scope="col"><FormattedMessage id="Episodes"/></th>
                        <th scope="col"><FormattedMessage id="Release Date"/></th>
                    </tr>
                </thead>
                <tbody>
                    {console.log("series", series)}
                    {series.map((e, i) => (
                        <Serie key={i} offer={e} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SeriesList;
