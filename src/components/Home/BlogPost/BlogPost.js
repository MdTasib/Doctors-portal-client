import React from 'react';

const BlogPost = (props) => {
    const { title, description, author, authorImg, date } = props.blog;
    return (
        <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
                <div className="card-header d-flex  align-items-center">
                    <img className="mx-3" src={authorImg} alt="" width={60} />
                    <div>
                        <h6 className="text-info">{author}</h6>
                        <p className="m-0">{date}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5>{title}</h5>
                    <small className="card-text text-secondary">{description}</small>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;