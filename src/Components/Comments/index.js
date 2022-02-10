import comment from '../mock-data/comment';
import makeid from '../Shared/methods/makeid';
import Comment from '../Shared/Comment';

const Comments = () => (
  <div>

    <h3 className="orange m-2">Comments</h3>
    <div className="mx-4 mt-5">
      <input type="text" className="form-control p-3" placeholder="Write a comment" onKeyPress={(e) => e.key === 'Enter' && (() => { })} />
    </div>
    {Array(5).fill(0).map(() => (
      <Comment key={makeid(10)} comment={comment} />
    ))}
  </div>
);

export default Comments;
