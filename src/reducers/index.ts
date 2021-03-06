import { combineReducers } from "redux";

// Reducers
import songListRequest from './songListReducer';
import sortOrder from './sortOrderReducer';
import searchStr from './searchStringReducer';
import view from './viewReducer';
import currentSongRequest from './currentSongReducer';
import lyricViewConfig from './lyricViewConfigReducer';
import snackbar from './snackbarReducer';

export default combineReducers({
    songListRequest,
    sortOrder,
    searchStr,
    view,
    currentSongRequest,
    lyricViewConfig,
    snackbar
});