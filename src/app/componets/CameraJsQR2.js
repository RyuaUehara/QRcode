import React, { useRef, useEffect, useState } from "react";
import jsQR from "jsqr-es6";

const CameraJsQR2 = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [qrCodeText, setQrCodeText] = useState("");

  const resetQrCodeText = () => {
    setQrCodeText("");
  };

  useEffect(() => {
    const scanQRCode = () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
            const context = canvasRef.current.getContext("2d");
            const scan = () => {
              if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
                canvasRef.current.height = videoRef.current.videoHeight;
                canvasRef.current.width = videoRef.current.videoWidth;
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
                const imageData = context.getImageData(
                  0,
                  0,
                  canvasRef.current.width,
                  canvasRef.current.height
                );
                const code = jsQR(imageData.data, imageData.width, imageData.height, {
                  inversionAttempts: "dontInvert",
                });
                if (code) {
                  setQrCodeText(code.data);
                  // QRコードの読み取り結果がURLの場合はリダイレクトする
                  if (isValidURL(code.data)) {
                    window.location.href = code.data;
                  }
                } else {
                  setQrCodeText("");
                  requestAnimationFrame(scan);
                }
              } else {
                setQrCodeText("");
                requestAnimationFrame(scan);
              }
            };
            scan();
          })
          .catch((error) => {
            console.error("Error accessing the camera: ", error);
          });
      } else {
        console.error("getUserMedia not supported");
      }
    };

    scanQRCode();
  }, []);

  const isValidURL = (url) => {
    // 簡単なURLのバリデーション
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return pattern.test(url);
  };

  return (
    <div className="flex flex-col w-1/2 items-center border-2">
      <p className="text-center w-full font-bold text-xl pb-2">QRコードを読み込んでください</p>
      <video ref={videoRef} style={{ display: "none" }} />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <div>
        <video ref={videoRef} width="320" height="240" autoPlay />
      </div>
      <p className="p-5 text-center w-full pt-5 h-20">{qrCodeText}</p>
      <button
        onClick={resetQrCodeText}
        className="bg-red-900 text-white px-2 py-1 mb-2"
      >
        戻る
      </button>
    </div>
  );
};

export default CameraJsQR2;
