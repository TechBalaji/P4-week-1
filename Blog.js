import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";

const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blog);

  const dispatch = useDispatch();
  useEffect(() => {
    getblogs();
  }, []);
  const getblogs = () => {
    dispatch(getAllBlogs());
  };

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogState &&
                blogState?.map((item, index) => {
                  return (
                    <div className="col-6 mb-3" key={index}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        description={item?.description}
                        image={item?.images[0]?.url}
                        date={moment(item?.createdAt).format(
                          "MMMM Do YYYY, h:mm a"
                        )}
                      />
                    </div>
                  );
                })}
              {/* Example Blog Entries */}
              <div className="col-6 mb-3">
                <BlogCard
                  id="1"
                  title="The Future of E-Commerce: Trends to Watch"
                  description="Explore the latest trends in e-commerce and how they are shaping the future of online shopping."
                  image="/images/blog-future.jpg"
                  date="October 10, 2023"
                />
              </div>
              <div className="col-6 mb-3">
                <BlogCard
                  id="2"
                  title="How to Optimize Your E-Commerce Website for SEO"
                  description="Learn the best practices for optimizing your e-commerce website to improve search engine rankings and drive more traffic."
                  image="/images/blog-seo.jpg"
                  date="October 15, 2023"
                />
              </div>
              <div className="col-6 mb-3">
                <BlogCard
                  id="3"
                  title="Top 10 Tips for a Successful E-Commerce Business"
                  description="Discover the top 10 tips that can help you build and grow a successful e-commerce business."
                  image="/images/blog-tips.jpg"
                  date="October 20, 2023"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;