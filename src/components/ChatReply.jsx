import React, { useState } from "react";

import { v4 as uuidV4 } from "uuid";
const ChatReply = () => {
  const [isclick, setIsclick] = useState(false);
  const [mes, setMes] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [block, setBlock] = useState([]);

  function addreply(id) {}

  return (
    <div>
      <div>baskar</div>
      <div>hi , hello</div>
      <button onClick={() => setIsclick(true)}>Reply</button>

      {isclick && (
        <div>
          {" "}
          <p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </p>
          <div>
            <button
              onClick={() => {
                setBlock([...block, { name: name, comment: comment }]);
                setIsclick(false);
              }}
            >
              post
            </button>{" "}
            <button onClick={() => setIsclick(false)}>cancle</button>
          </div>
        </div>
      )}
      {block.map((e) => {
        return <div></div>;
      })}
    </div>
  );
};

export default ChatReply;
