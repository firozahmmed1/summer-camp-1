/* eslint-disable react/prop-types */
import {Helmet} from "react-helmet";

const Tabtitle = ({title}) => {
    return (
        <div>
            <Helmet><title>{title}</title></Helmet>
        </div>
    );
};

export default Tabtitle;