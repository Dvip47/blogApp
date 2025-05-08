import { call, put, takeLatest } from 'redux-saga/effects';
import {blogApiUrl} from '../../api/Api';
import { FETCH_BLOGS_REQUEST, fetchBlogsSuccess, fetchBlogsFailure } from '../actions/blogActions';

function* fetchBlogsSaga() {

    try {
        const blogs = yield fetch(blogApiUrl);
        yield put(fetchBlogsSuccess(blogs));
    } catch (error) {
        yield put(fetchBlogsFailure(error.message));
    }
}

export default function* blogSaga() {
    yield takeLatest(FETCH_BLOGS_REQUEST, fetchBlogsSaga);
}