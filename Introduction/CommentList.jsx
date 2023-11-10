import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "장희정",
        comment: "안녕하세요~ 처음뵙겠습니다",
    },
    {
        name: "홍길동",
        comment: "리액트 실습하는 중",
    },
    {
        name: "김철수",
        comment: "여행가고 싶다",
    },
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;
