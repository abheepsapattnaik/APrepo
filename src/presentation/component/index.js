import {connect} from "react-redux";
import {compose} from "redux";
import {withStyles} from "@material-ui/core";
import {Home} from "./Home";
import {tabSelectionAction} from "../../redux/tabReducer";

const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});

const mapStateToProps = (state) => ({
  tab: state.userTab,
});

const mapDispatchToProps = (dispatch) => ({
  tabSelection: (newTab) => dispatch(tabSelectionAction(newTab)),
});

export default compose(withStyles(useStyles), connect(mapStateToProps,mapDispatchToProps))(Home);