import React, { useState } from 'react';
import Tag from '../../../../components/Tag/Tag';
import CommentSection from '../../components/CommentSection/CommentSection';
import ReplyForm from '../../components/ReplyForm/ReplyForm';
import SocialShare from '../../components/SocialShare/SocialShare';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import axios from '../../../../../../helper/axios';

const fetchBlogComment = async (parameter) => {
    console.log(parameter.queryKey)
    const [key, id, limit] = parameter.queryKey
    console.log(key)
    const data = await axios.get(`/blog/get-blog-comment/${id}?limit=${limit}`)
    return data;
}

const BlogDetailContent = ({ blog }) => {
    const [totalComments, setTotalComments] = useState(0);
    const [blogComments, setBlogComments] = useState([]);
    const [commentLimit, setCommentLimit] = useState(5);

    useQuery(['blogComment', blog?._id, commentLimit], fetchBlogComment, {
        enabled: !!commentLimit,
        refetchInterval: 10000,
        refetchOnWindowFocus: false,
        onSuccess: (res) => {
            const result = {
                status: res.status + "-" + res.statusText,
                headers: res.headers,
                data: res.data,
            };
            setTotalComments(result.data.totalComments);
            setBlogComments(result.data.comments);
        }
    });

    return (
        <div className='d-flex w-100 justify-content-center blog-content'>
            <div className='blog-tags w-20'>
                <h4 className="mb-4">Tags</h4>
                {
                    blog?.tags?.map(tag => (
                        <Tag
                            tag={tag}
                            primary={true}
                        />
                    ))
                }
            </div>
            <div className='blog-center-content w-50'>
                <div className='content-description'>
                    {ReactHtmlParser(blog?.description)}
                </div>

                <SocialShare />

                <ReplyForm
                    blogId={blog?._id}
                    blogComments={blogComments}
                    setBlogComments={setBlogComments}
                />

                <div className='blog-comments d-flex flex-column mt-5'>
                    <h3 className='mt-3'>Comments({blogComments.length})</h3>
                    {
                        totalComments &&
                            blogComments.length !== 0 ?
                            <div className=''>
                                {
                                    blogComments.map(comment => (
                                        <CommentSection
                                            key={comment?._id}
                                            comment={comment}
                                        />
                                    ))
                                }
                                {
                                    blogComments.length !== totalComments &&
                                    <h5
                                        onClick={() => setCommentLimit(prevVal => prevVal + 5)}
                                        className="cursor-pointer ml-md mt-4 text-center"
                                    >
                                        View More
                                    </h5>
                                }
                            </div>
                            :
                            <div className='comment-card mt-4'>
                                <h5>No Comments</h5>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

BlogDetailContent.propTypes = {
    blog: PropTypes.object.isRequired
}

export default BlogDetailContent
