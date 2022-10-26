


function PostElement({text, title}) {


    return (
        <div className="post-element">
            <h3>{title}</h3>
            <h5> {text}</h5>
            
        </div>
    );
}

export default PostElement;