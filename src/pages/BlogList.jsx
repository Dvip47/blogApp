import React, { use, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchBlogsRequest } from '../store/actions/blogActions';
import SortBlogs from '../components/sort';
import Filter from '../components/Filter';

const BlogList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.blogs);
console.log(blogs);
  const [sortedBlogs, setSortedBlogs] = React.useState([]);
  useEffect(() => {
    if (blogs?.length > 0) {
      setSortedBlogs(blogs.data);
    }
  }, [blogs]);



  const handleSort = () => {
    const sorted = [...blogs].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.title.localeCompare(b.title);
        } else {
            return b.title.localeCompare(a.title);
        }
    });
    setSortedBlogs(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
};


  useEffect(() => {
    dispatch(fetchBlogsRequest());
  }, [dispatch]);

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Blog List</h1>
        <Filter/>
        <SortBlogs onSortChange={handleSort} />
        {sortedBlogs.loading && <p className="text-blue-500">Loading...</p>}
        {sortedBlogs.error && <p className="text-red-500">Error: {sortedBlogs.error}</p>}
        <ul className="space-y-4">
          {sortedBlogs?.data?.map((blog) => (
            <li
              key={blog.id}
              onClick={() => handleBlogClick(blog.id)}
              className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer"
            >
              {blog.title}
            </li>
          ))}
        </ul>
      </div>
  
  );
};

export default BlogList;

// Tailwind CSS styles can be applied directly to the JSX elements in the component.
// For example, you can update the JSX elements with Tailwind classes like this:

