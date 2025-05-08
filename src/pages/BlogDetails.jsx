import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBlogDetails } from '../redux/actions/blogActions';

const BlogDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch();

    const blogDetails = useSelector((state) => state.blogDetails);
    const { loading, error, blog } = blogDetails;

    useEffect(() => {
        dispatch(fetchBlogDetails(id))
    }, [dispatch, id]);

    if (loading) return <p>Loading...</p>;

    
    if (error) return <p>Error: {error}</p>;

    if (!blog) return <p className="text-center text-gray-500">No blog details available.</p>;
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
            <p className="text-gray-700 mb-6">{blog.content}</p>
            <p className="text-gray-600 mb-2">
                <strong>Author:</strong> {blog.author}
            </p>
            <p className="text-gray-600">
                <strong>Published on:</strong> {blog.date}
            </p>
        </div>
    );
};

export default BlogDetails;