import React from "react";

const CustomersReview = () => {
  return (
    <div>
      <div className="container">
        <div className="row bootstrap snippets bootdeys">
          <div className="col-md-8 col-sm-12">
            <div className="comment-wrapper">
              <div className="panel panel-info">
                <div className="panel-heading">Review panel</div>
                <div className="panel-body">
                  <textarea
                    className="form-control"
                    placeholder="write a Review..."
                    rows="3"
                  ></textarea>
                  <br />
                  <button type="button" className="btn btn-primary pull-right">
                    Post
                  </button>
                  <div className="clearfix"></div>
                  <hr />

                  <ul className="media-list">
                    <div className="row">
                      <h6 className="mt-1">Total Review 6</h6>
                      <hr />
                    </div>

                    <li className="media">
                      <div className="media-body">
                        <div className="commenterName">
                          <span>
                            <strong className="text-success">
                              @MartinoMont
                            </strong>
                          </span>
                          <span className="text-muted pull-right">
                            <small className="text-muted">30 min ago</small>
                          </span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor sit amet,{" "}
                        </p>
                      </div>
                    </li>
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
