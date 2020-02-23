import * as React from "react";


interface ILoader {
    loading: boolean
}
const Loader = (props: ILoader) => {
    const {loading} = props;
    return (
        <div>
        </div>
    )
};


export default Loader;