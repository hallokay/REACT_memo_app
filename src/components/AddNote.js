import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charcterLimit = 500;

  const onChange = (e) => {
      const value = e.target.value;
    //   만약 리밋이 넘으면 못치게 하는거
    // 남은 글자가 더 0보다 클때 벨류를 받고 아니면 안받음
    if(charcterLimit - value.length >= 0 ) {
        setNoteText(value);
    }
  };

  const onClick = () => {
    //   공백일떄는 제출이 안됨
    if(noteText.trim().length > 0){
        handleAddNote(noteText);

        // 입력 후에는 빈칸으로 만들어줌
        setNoteText('');
    }

  };

  return (
    <div className="note new">
      <textarea
        name=""
        id=""
        cols="10"
        rows="8"
        placeholder="메모를 입력하세요"
        value={noteText}
        onChange={onChange}
      ></textarea>
      <div className="note_footer">
        <small>{charcterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={onClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
