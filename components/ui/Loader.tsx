import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <Image
      src="/images/Loader2.svg"
      width={60}
      height={60}
      objectFit={"fill"}
    />
  );
};

export default Loader;
