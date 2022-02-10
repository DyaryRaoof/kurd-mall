import comment from '../mock-data/comment';
import makeid from '../Shared/methods/makeid';
import Comment from '../Shared/Comment';

const Comments = () => (
  <div>
    <h3 className="orange m-2">Comments</h3>
    {Array(5).fill(0).map(() => (
      <Comment key={makeid(10)} comment={comment} />
    ))}
  </div>
);

export default Comments;
