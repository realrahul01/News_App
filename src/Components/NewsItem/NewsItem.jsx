/* eslint-disable react/prop-types */
import styles from './NewsItem.module.css'

const NewsItem = ({ title, url, image, description, author, date }) => {

  return (
    <div className="container my-3">
      <div className="card">
      <div className={styles.badge_style}>
        <span className="badge rounded-pill bg-danger">
            {author}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <img src={image? image: "data:image/png;base64,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"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <b className="text-body-secondary">
              Published on {new Date(date).toGMTString()} By {author ? author : "unknow"}
            </b>
          </p>
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
