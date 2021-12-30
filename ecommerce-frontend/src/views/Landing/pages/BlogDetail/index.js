import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../container/Breadcrumb'
import BlogDetailHeader from './container/BlogDetailHeader/BlogDetailHeader';

import './BlogDetail.scss';
import BlogDetailContent from './container/BlogDetailContent/BlogDetailContent';
import RelatedBlogs from './container/RelatedBlogs/RelatedBlogs';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from '../../../../helper/axios';
import Loading from '../../components/Loading';
import NoData from '../../components/NoData';

const fetchBlogDetail = async (parameter) => {
    console.log(parameter.queryKey)
    const [key, id] = parameter.queryKey
    console.log(key)
    const data = await axios.get(`/blog/get-blog-detail/${id}`)
    return data;
}

const BlogDetail = () => {
    const {id} = useParams();

    const [blog, setBlog] = useState({});
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 210)
    }, [id]);

    const { status } = useQuery(['blogs', id], fetchBlogDetail, {
        keepPreviousData: true,
        enabled: !!id,
        retry: false,
        refetchOnWindowFocus: false,
        onSuccess: (res)=>{
            const result = {
                status: res.status + "-" + res.statusText,
                headers: res.headers,
                data: res.data,
              };
            setBlog(result.data.blog);
            setRelatedBlogs(result.data.relatedBlogs);
        }
    });

    return (
        <div className='blog-details'>
            <Breadcrumbs
                title="Apple"
            />
            {
                status === "loading" &&
                <Loading/>
            }
             {
                status === "error" &&
                <NoData/>
            }
            {status ===  "success" && 
                <>
                    <div className='section-margin blog-detail-header'>
                    <BlogDetailHeader 
                        blog={blog}
                    />
                    </div>
                    <div className='section-margin d-flex justify-content-center blog-detail-content'>
                        <BlogDetailContent 
                            blog={blog}
                        />
                    </div>
                    {
                        relatedBlogs && relatedBlogs.length !== 0 &&
                            <div className='section-padding related-blogs mt-5'>
                                <RelatedBlogs 
                                    blogs= {relatedBlogs}
                                />
                            </div>
                    }
                    
                </>
            }
            
        </div>
    )
}

export default BlogDetail
