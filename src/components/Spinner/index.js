import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: black;
`;

const Spinner = () => {
    return <ClockLoader css={override} size={100} />
}

export default Spinner;