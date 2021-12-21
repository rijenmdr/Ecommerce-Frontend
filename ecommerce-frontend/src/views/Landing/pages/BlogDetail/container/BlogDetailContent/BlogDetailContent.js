import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Tag from '../../../../components/Tag/Tag';
import CommentSection from '../../components/CommentSection/CommentSection';
import ReplyForm from '../../components/ReplyForm/ReplyForm';
import SocialShare from '../../components/SocialShare/SocialShare';

const BlogDetailContent = () => {
    const tags = [
        {
            id: 1,
            name: "Food",
            link: "/"
        },
        {
            id: 2,
            name: "Vegetable",
            link: "/"
        },
        {
            id: 3,
            name: "Receipt",
            link: "/"
        },
        {
            id: 4,
            name: "Fresh",
            link: "/"
        }
    ]

    const content =
        `
            <p>There’s nothing like a warm cup of tea to start your morning—or maybe you’re all about an iced hibiscus on a sunny Saturday afternoon. Whether you’re just craving chamomile or are looking to ditch your coffee dependency, here’s our go-to guide on incorporating a few new teas into your daily routine!</p>
            <br/>
            <h5>Morning Ritual // 9:00 AM</h5>
            <p>Want that extra morning energy without the caffeine jitters? Switch out your morning mug of coffee for a warm, energizing cup of earl grey. Serve as is or stir in some milk and honey for extra coziness. If you want to spice things up, try chai tea instead! The combination of cinnamon, cardamom, and ginger smells amazing and gives you that nice little flavor kick to start your day off right.</p>
            <br/>
            <h5>Mid-day Boost // 2:00 PM</h5>
            <p>If you’re feeling a little sluggish post-lunch, beat the afternoon slump with some lemon ginger green tea. Green tea can be a great alternative to coffee in the afternoon when you want that little boost of energy. An added benefit: lemon and ginger work together to aid digestion which is especially helpful after lunch. </p>
            <p>If you’re not into hot drinks, opt-in for a fruity iced green tea instead. Steep some honeydew or peach green tea in hot water for a few minutes and then pour over ice until it’s nice and cool. Enjoy with a slice of lemon, and you’ll feel refreshed and ready to tackle any task. </p>
            <br/>
            <h5>Evening Calm // 8:00 PM</h5>
            <p>Slip on some fuzzy socks, light your favorite candles, and fire up the kettle—it’s time to wind down after a long day. Grab yourself a soothing cup of lavender chamomile tea and indulge in some well-deserved self-love. </p>
        `

    const comments = [
        {
            id: 1,
            name: "Ram Maharjan",
            profile_image: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
            date: "22. 6. 2020",
            comment: `
                Hi everyone, 
                we have been working hard with the team bringing a new articles. It has passed a few months till we released it in case of traveling and shooting, hopefully you’ll love it.
            `
        },
        {
            id: 2,
            name: "Ram Maharjan",
            profile_image: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
            date: "22. 6. 2020",
            comment: `
                Hi everyone, 
                we have been working hard with the team bringing a new articles. It has passed a few months till we released it in case of traveling and shooting, hopefully you’ll love it.
            `
        }
    ]
    return (
        <div className='d-flex w-100 justify-content-center blog-content'>
            <div className='blog-tags w-20'>
                <h4 className="mb-4">Tags</h4>
                {
                    tags.map(tag => (
                        <Tag
                            tag={tag}
                            primary={true}
                        />
                    ))
                }
            </div>
            <div className='blog-center-content w-50'>
                <div className='blog-description'>
                    {ReactHtmlParser(content)}
                </div>

                <SocialShare />

                <ReplyForm />

                <div className='blog-comments d-flex flex-column mt-5'>
                    <h3 className='mt-3'>Comments</h3>
                    {comments.map(comment => (
                        <CommentSection
                            comment={comment}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogDetailContent
