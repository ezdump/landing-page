import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <section className="blog" id="blog">
      {/* Container Starts */}
      <div className="container">
        {/* Main Heading Starts */}
        <div className="text-center top-text">
          <h1>
            <span>Blog</span> Posts
          </h1>
          <h4>Latest Articles</h4>
        </div>
        {/* Main Heading Starts */}
        {/* Divider Starts */}
        <div className="divider text-center">
          <span className="outer-line"></span>
          <span className="fa fa-comments" aria-hidden="true"></span>
          <span className="outer-line"></span>
        </div>
        {/* Divider Ends */}
        <div className="row latest-posts-content">
          {/* Article Starts */}
          <div className="col-sm-12 col-md-4 col-xs-12">
            <div className="latest-post">
              {/* Featured Image Starts */}
              <a className="img-thumb" href="blog-post.html">
                <Image
                  className="img-fluid"
                  src="http://via.placeholder.com/720x477"
                  alt="img"
                />
              </a>
              {/* Featured Image Ends */}
              {/* Article Content Starts */}
              <div className="post-body">
                <h4 className="post-title">
                  <a href="blog-post.html">how to be a good freelancer ?</a>
                </h4>
                <div className="post-text">
                  <p>
                    incididunt ut labore et dolore magna aliqua. Ut enim aminim
                    veniam, quis nostrud...
                  </p>
                </div>
              </div>
              {/* Post Date Starts */}
              <div className="post-date">
                <span>18</span>
                <span>AUG</span>
              </div>
              {/* Post Date Ends */}
              {/* Article Content Ends */}
            </div>
          </div>
          {/* Article Ends */}
          {/* Article Starts */}
          <div className="col-sm-12 col-md-4 col-xs-12">
            <div className="latest-post">
              {/* Featured Image Starts */}
              <a className="img-thumb" href="blog-post.html">
                <Image
                  className="img-fluid"
                  src="http://via.placeholder.com/720x477"
                  alt="img"
                />
              </a>
              {/* Featured Image Ends */}
              {/* Article Content Starts */}
              <div className="post-body">
                <h4 className="post-title">
                  <a href="blog-post.html">Collaboration with Envato</a>
                </h4>
                <div className="post-text">
                  <p>
                    incididunt ut labore et dolore magna aliqua. Ut enim aminim
                    veniam, quis nostrud...
                  </p>
                </div>
              </div>
              {/* Post Date Starts */}
              <div className="post-date">
                <span>23</span>
                <span>JUN</span>
              </div>
              {/* Post Date Ends */}
              {/* Article Content Ends */}
            </div>
          </div>
          {/* Article Ends */}
          {/* Article Starts */}
          <div className="col-sm-12 col-md-4 col-xs-12">
            <div className="latest-post">
              {/* Featured Image Starts */}
              <a className="img-thumb" href="blog-post.html">
                <Image
                  className="img-fluid"
                  src="http://via.placeholder.com/720x477"
                  alt="img"
                />
              </a>
              {/* Featured Image Ends */}
              {/* Article Content Starts */}
              <div className="post-body">
                <h4 className="post-title">
                  <a href="blog-post.html">why themeforest is best ?</a>
                </h4>
                <div className="post-text">
                  <p>
                    incididunt ut labore et dolore magna aliqua. Ut enim aminim
                    veniam, quis nostrud...
                  </p>
                </div>
              </div>
              {/* Post Date Starts */}
              <div className="post-date">
                <span>01</span>
                <span>JAN</span>
              </div>
              {/* Post Date Ends */}
              {/* Article Content Ends */}
            </div>
          </div>
          {/* Article Ends */}
          <div className="mx-auto">
            <a className="custom-button link-blog" href="blog.html">
              See all Posts
            </a>
          </div>
        </div>
        {/* Latest Blog Posts Ends */}
      </div>
    </section>
  );
};

export default Blog;
