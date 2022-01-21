import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove, onModify, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onModify={onModify} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
}

export default DiaryList;