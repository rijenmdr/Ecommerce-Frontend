import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import axios from '../../../../helper/axios'
import Breadcrumbs from '../../container/Breadcrumb'
import BlogContent from './container/BlogContent/BlogContent'
import BlogHeader from './container/BlogHeader/BlogHeader'

const fetchBlogByPage = async (parameter) => {
    console.log(parameter.queryKey)
    const [key, currentPage, category, archive] = parameter.queryKey
    console.log(key)
    const data = await axios.get(`/blog/get-blogs?page=${currentPage}${category ? `&categoryId=${category}` : ''}${archive ? `&archive=${archive}` : ''}`)
    return data;
}

const Blogs = () => {
    const { search } = useLocation();
    const allQueryParam = new URLSearchParams(search)
    const archive = allQueryParam.get('archive');
    const category = allQueryParam.get('category');

    const [blogCount, setBlogCount] = useState(0);
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const { status } = useQuery(['blogs', currentPage, category, archive], fetchBlogByPage, {
        keepPreviousData: true,
        enabled: !!currentPage || !!archive || !!category,
        retry: false,
        onSuccess: (res) => {
            const result = {
                status: res.status + "-" + res.statusText,
                headers: res.headers,
                data: res.data,
            };
            setBlogs(result.data.blogs);
            setBlogCount(result.data.blogCount)
        }
    });

    const [blog] = useState({
        id: 1,
        title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
        cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
        tag: {
            name: "Vegetable",
            link: "/"
        },
        avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
        author: "Rijen Manandhar",
        published_date: "15. 6. 2020"
    });

    return (
        <div className='blogs-search'>
            <Breadcrumbs />
            <div className='blog-search-header section-margin'>
                <BlogHeader
                    blogs={blogs}
                    blog={blog}
                    search={search}
                    archive={archive}
                    category={category}
                />
            </div>
            <div className='blog-search-content section-margin'>
                <BlogContent
                    blogs={blogs}
                    setBlogs={setBlogs}
                    blogCount={blogCount}
                    setBlogCount={setBlogCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    status={status}
                />
            </div>
        </div>
    )
}

export default Blogs
