import React from 'react';
import Tag from '../../../../components/Tag/Tag';
import CommentSection from '../../components/CommentSection/CommentSection';
import ReplyForm from '../../components/ReplyForm/ReplyForm';
import SocialShare from '../../components/SocialShare/SocialShare';
import ReactHtmlParser from 'react-html-parser';

const BlogDetailContent = ({ blog }) => {
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
                <div className='blog-description'>
                    {ReactHtmlParser(blog?.description)}
                </div>

                <SocialShare />

                <ReplyForm
                    blogId={blog?._id}
                />

                <div className='blog-comments d-flex flex-column mt-5'>
                    <h3 className='mt-3'>Comments</h3>
                    {
                        blog?.comment &&
                        blog?.comment.length !== 0 ?
                        blog?.comment.map(comment => (
                            <CommentSection
                                key={comment?._id}
                                comment={comment}
                            />
                        )) :
                        <div className='comment-card mt-4'>
                            <h5>No Comments</h5>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogDetailContent
