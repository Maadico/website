import React, { useState } from "react";

const CustomersReview = ({ comments, onSubmitComment }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    onSubmitComment(comment);
    setComment("");
  };
  console.log(comments);
  return (
    <div>
      <div className="container customersReview my-2">
        <div className="row bootstrap snippets bootdeys">
          <div className="col-md-8 col-sm-12">
            <div className="comment-wrapper">
              <div className="panel panel-info">
                <div className="panel-heading">Review panel</div>
                <div className="panel-body">
                  <textarea
                    className="form-control"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Write your Review here..."
                    rows="3"
                  ></textarea>
                  <br />
                  <button
                    type="button"
                    className="btn btn-primary pull-right"
                    onClick={handleSubmitComment}
                  >
                    Post
                  </button>
                  <div className="clearfix"></div>
                  <hr />

                  <ul className="media-list">
                    <div className="row">
                      <h6 className="mt-1">Total Review {comments?.length}</h6>
                      <hr />
                    </div>
                    {comments?.map((c, i) => (
                      <li className="media" key={c?._id}>
                        <div className="media-body">
                          <div className="commenterName">
                            <span>
                              <strong className="text-success">
                                {c?.reviewByUser?.name}
                              </strong>
                            </span>
                            <span className="text-muted pull-right">
                              {/* <small className="text-muted">30 min ago</small> */}
                            </span>
                          </div>
                          <p>{c.reviews}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersReview;
