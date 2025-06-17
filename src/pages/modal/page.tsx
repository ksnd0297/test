import { useState, useRef, useEffect, useLayoutEffect } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

export default function ModalPage() {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef(null);

  useEffect(() => {
    if (window.kakao) {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
      });
    }
  });

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <div
        id="map"
        style={{
          width: 500,
          height: 400,
        }}
      ></div>
      <BottomSheet open={open} ref={sheetRef} onDismiss={() => setOpen(false)}>
        <DaumPostcodeEmbed />
      </BottomSheet>
    </>
  );
}
