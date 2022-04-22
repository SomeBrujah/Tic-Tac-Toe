import Field from "./Field";
import { connect } from "react-redux";
import { handleCellClick, restartGame } from "../../store/rootReducer/actions";
import { ourState } from "../../store/rootReducer/selectors";
import { createStructuredSelector } from 'reselect';

const mapDispatchToProps = {
    handleCellClick,
    restartGame
}

const mapStateToProps = createStructuredSelector({
    ourState
})

export default connect(mapStateToProps, mapDispatchToProps)(Field);