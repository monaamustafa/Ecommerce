import React from "react";
import { NavLink } from "react-router-dom";
import LocationPanner from "./LocationPanner";

export default function Blog() {
  return (
    <div className="blog">
      <LocationPanner loc="blog" path="blog"/>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="blog-details">
            <div className="blog-img">
              <img src="https://m2.alothemes.com/safira/media/magefan_blog/blog-furniture-3.jpg" />
              <div className="blog-date">
                <p>03</p>
                <p>JAN</p>
              </div>
            </div>
            <div className="blog-content">
              <h3>Daughter Celebrity Opens Up About Having Her</h3>
              <p>
                People are constantly changing things about themselves--- from
                their hair styles to their clothes, to even the way they
                physically look.
              </p>
              <NavLink to={""}> Read More</NavLink>
            </div>
          </div>
          <div className="blog-details">
            <div className="blog-img">
              <img src="https://m2.alothemes.com/safira/media/magefan_blog/blog-furniture-3.jpg" />
              <div className="blog-date">
                <p>03</p>
                <p>JAN</p>
              </div>
            </div>
            <div className="blog-content">
              <h3>Daughter Celebrity Opens Up About Having Her</h3>
              <p>
                People are constantly changing things about themselves--- from
                their hair styles to their clothes, to even the way they
                physically look.
              </p>
              <NavLink to={""}> Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
