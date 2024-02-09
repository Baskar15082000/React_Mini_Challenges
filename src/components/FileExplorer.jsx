import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import FileChild from "./FileChild";

const FileExplorer = () => {
  const [show, setShow] = useState(false);
  const [showChilds, setShowChilds] = useState(false);
  const [name, setName] = useState("");
  const [create, setCreate] = useState(false);
  const [dir, setDir] = useState(false);
  const [childs, setChilds] = useState([
    {
      id: v4(),
      name: "public",
      isDir: true,
      children: [],
      isEdit: false,
    },
    {
      id: v4(),
      name: "src",
      isDir: true,
      children: [],
      isEdit: false,
    },
    {
      id: v4(),
      name: "music",
      isDir: true,
      children: [],
      isEdit: false,
    },
  ]);
  const handleOver = (e) => {
    setShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dir) {
      setChilds((old) => {
        return [
          ...old,
          { id: v4(), name: name, isDir: true, children: [], isEdit: false },
        ];
      });
      setCreate(false);
      setName("");
    } else {
      setChilds((old) => {
        return [
          ...old,
          { id: v4(), name: name, isDir: false, children: null, isEdit: false },
        ];
      });
      setCreate(false);
      setName("");
    }
  };

  const handleFolder = (id, data, method) => {
    if (method) {
      setChilds((old) => {
        var curr = old.map((c) => {
          if (c.id === id) {
            return {
              ...c,
              children: data,
            };
          }
          return c;
        });
        return curr;
      });
    } else {
      setChilds((old) => {
        var curr = old.map((c) => {
          if (c.id === id && data.length != 0) {
            return {
              ...c,
              children: data,
            };
          }
          return c;
        });
        return curr;
      });
    }
  };

  const handleDelte = (id) => {
    setChilds(childs.filter((c) => c.id !== id));
  };
  function handleEdit(id, newName) {}

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "1.5rem ",
          boxShadow: "2px 2px 2px black",
          padding: "1.3rem",
        }}
      >
        File Explorer
      </div>
      <div
        style={{
          margin: "2rem",
          display: "flex",
          cursor: "pointer",
          gap: "10px",
        }}
        onMouseOver={handleOver}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShowChilds(!showChilds)}
      >
        {showChilds ? "📂" : "📁"} root
        {show && (
          <>
            <button
              onClick={() => {
                setShow(true);
                setCreate(!create);
                setDir(true);
              }}
            >
              📁
            </button>{" "}
            <button
              onClick={() => {
                setShow(true);
                setCreate(!create);
                setDir(false);
              }}
            >
              📄
            </button>
          </>
        )}
      </div>
      <div style={{ margin: "3rem" }}>
        {showChilds &&
          childs.map((child) => {
            return (
              <FileChild
                key={child.id}
                child={child}
                deleteChild={handleDelte}
                updateFolder={handleFolder}
                setChilds={setChilds}
              ></FileChild>
            );
          })}
        <div>
          {showChilds && create && (
            <form onSubmit={handleSubmit}>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </form>
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default FileExplorer;
