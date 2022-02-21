import { useEffect, useState } from "react";

function HomePage() {
  const [file, setFile] = useState("");

  /*useEffect(() => {
    fetch("http://localhost:5000/audio/NocXEwsJGOQ").then((res) =>
      res
        .blob()
        .then((blob) => URL.createObjectURL(blob))
        .then((url) => setFile(url))
    );
  }, []);*/
  return (
    <div className="mx-auto">
      <audio controls src={file}>
        audio
      </audio>
    </div>
  );
}

export default HomePage;
