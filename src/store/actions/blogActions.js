import { takeLatest, call, put } from 'redux-saga/effects';
import {blogApiUrl} from '../../api/Api';

// Action Types
export const FETCH_BLOGS_REQUEST = 'FETCH_BLOGS_REQUEST';
export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_FAILURE = 'FETCH_BLOGS_FAILURE';

// Action Creators
export const fetchBlogsRequest = () => ({
    type: FETCH_BLOGS_REQUEST,
});

export const fetchBlogsSuccess = (blogs) => ({
    type: FETCH_BLOGS_SUCCESS,
    payload: blogs,
});

export const fetchBlogsFailure = (error) => ({
    type: FETCH_BLOGS_FAILURE,
    payload: error,
});

// Saga Worker

function* fetchBlogsSaga() {
    try {
        const blogs = yield fetch(blogApiUrl.fetchBlogsApi);
        yield put(fetchBlogsSuccess(blogs));
    } catch (error) {
        yield put(fetchBlogsFailure(error.message));
    }
}

// Saga Watcher
export function* watchFetchBlogs() {
    yield takeLatest(FETCH_BLOGS_REQUEST, fetchBlogsSaga);
}