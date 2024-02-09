import { Input } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

const FileChild = ({ child, deleteChild, updateFolder, setChilds }) => {
  const [show, setShow] = useState(false);
  const [showChilds, setShowChilds] = useState(false);
  const [name, setName] = useState("");
  const [create, setCreate] = useState(false);
  const [dir, setDir] = useState(false);
  const [subchilds, setSubchilds] = useState([]);

  const btnStyle = {
    marginRight: ".4rem",
    border: "none",
    backgroundColor: "transparent",
  };

  const handleOver = (e) => {
    setShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dir) {
      setSubchilds((old) => {
        const t = [
          ...old,
          { id: v4(), name: name, isDir: true, children: [], isEdit: false },
        ];

        updateFolder(child.id, t, false);
        return t;
      });
      setCreate(false);

      setName("");
    } else {
      setSubchilds((old) => {
        const t = [
          ...old,
          { id: v4(), name: name, isDir: false, children: null, isEdit: false },
        ];
        updateFolder(child.id, t, false);
        return t;
      });
      setCreate(false);
      setName("");
    }
  };

  const handleFolder_ = (id, data, method) => {
    if (method) {
      setSubchilds((old) => {
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
      setSubchilds((old) => {
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
  const handleDelte_ = (id) => {
    setSubchilds(subchilds.filter((c) => c.id !== id));
    updateFolder(child.id, subchilds, true);
  };

  useEffect(() => {
    updateFolder(child.id, subchilds, false);
  }, [subchilds]);

  return (
    <>
      <div
        style={{
          margin: "2rem",
          display: "flex",
          cursor: "pointer",
          gap: "10px",
        }}
        onMouseOver={handleOver}
        onMouseLeave={() => setShow(false)}
      >
        <span onClick={() => setShowChilds(!showChilds)}>
          {child.isDir ? (showChilds ? "📂" : "📁") : "📄"} {child.name}
        </span>
        {show && (
          <>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              onClick={() => {
                child.isEdit = true;
                updateFolder(child.id, subchilds);
              }}
            >
              ✏️
            </button>

            {child.isDir && (
              <div>
                <button
                  style={btnStyle}
                  onClick={() => {
                    setShowChilds(true);
                    setCreate(!create);
                    setDir(true);
                  }}
                >
                  🗂
                </button>
                <button
                  style={btnStyle}
                  onClick={() => {
                    setCreate(!create);
                    setShowChilds(true);
                    setDir(false);
                  }}
                >
                  📄
                </button>
              </div>
            )}

            <button style={btnStyle} onClick={() => deleteChild(child.id)}>
              🗑️
            </button>
          </>
        )}
      </div>
      <div style={{ margin: "3rem" }}>
        {showChilds &&
          child.children.map((child) => {
            return (
              <div>
                {" "}
                {child.isEdit ? (
                  <form
                    action=""
                    onSubmit={(e) => {
                      e.preventDefault();
                      child.isEdit = false;
                      updateFolder(child.id, subchilds);
                    }}
                  >
                    <input
                      type="text"
                      value={child.name}
                      onChange={(e) => {
                        child.name = e.target.value;
                        updateFolder(child.id, setChilds);
                      }}
                    />
                  </form>
                ) : (
                  <FileChild
                    key={child.id}
                    child={child}
                    deleteChild={handleDelte_}
                    updateFolder={handleFolder_}
                  ></FileChild>
                )}
              </div>
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

export default FileChild;
