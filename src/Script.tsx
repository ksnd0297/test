import { useLayoutEffect, useState, type ReactElement } from "react";

const Script = ({ children }: { children: ReactElement }) => {
  const [onLoad, setOnLoad] = useState(false);

  useLayoutEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=89c054cff184ac44e5531ed02809082a&autoload=false";
    script.async = true;
    document.body.appendChild(script);

    setOnLoad(true);
  }, []);

  return <>{onLoad && children}</>;
};

export default Script;
