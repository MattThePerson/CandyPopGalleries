import './Post.css';

type PostProps = {
    image: string;
}

function Post({image}: PostProps) {

    return (
        <div className="Post">
            <h2 className="date-uploaded">12-13-2024</h2>
            <div className="tag-bar upper-tag-bar">
                <div className="tag creator">Creator123</div>
                <div className="tag source">Twitter</div>
                <div className="tag character">Luna Snow</div>
                <div className="tag media">Marvel Rivals</div>
            </div>
            <div className="tag-bar lower-tag-bar">
                <div className="tag general">fanart</div>
                <div className="tag general">video game</div>
                <div className="tag general">illustration</div>
            </div>
            <img src={image} alt="" />
        </div>
    )
}
export default Post;
