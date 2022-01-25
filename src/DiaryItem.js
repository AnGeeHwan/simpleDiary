import React, { useState, useRef, useEffect, useContext } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({
  id,
  author,
  content,
  created_date,
  emotion,
}) => {

  const { onRemove, onModify } = useContext(DiaryDispatchContext);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  }

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  }

  const handleModify = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`정말로 수정하겠습니까?`)) {
      onModify(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">
          {new Date(created_date).toLocaleString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)} />
          </>
        ) : (
          <>
            {content}
          </>
        )}
      </div>

      {isEdit ? (<>
        <button onClick={handleQuitEdit}> 수정 취소 </button>
        <button onClick={handleModify}> 수정 완료 </button>
      </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
}

export default React.memo(DiaryItem);