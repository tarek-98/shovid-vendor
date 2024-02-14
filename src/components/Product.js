import React, { useEffect, useRef, useState } from "react";
import "./product.css";
import "./singleProduct.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

function Product({ product, setVideoRef, autoplay, sound }) {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [option, setOption] = useState(false);
  const [social, setSocial] = useState(false);
  const [des, setDes] = useState(false);
  const [img, setImg] = useState(false);
  const [comment, setComment] = useState(false);
  const [changeBackground, setChangeBackground] = useState(0);

  function disableOption() {
    setDes(false);
    setImg(false);
    setOption(false);
    setSocial(false);
    setComment(false);
  }
  function desToggel() {
    setDes((des) => !des);
    setImg(false);
    setOption(false);
    setSocial(false);
  }
  function desToggel2() {
    setImg((img) => !img);
    setDes(false);
    setOption(false);
    setSocial(false);
  }
  // Function to convert likes count to a number
  const parseLikesCount = (count) => {
    if (typeof count === "string") {
      if (count.endsWith("K")) {
        return parseFloat(count) * 1000;
      }
      return parseInt(count);
    }
    return count;
  };


  const videoRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      videoRef.current.play();
    }
  }, [autoplay]);

  function onVideoPress() {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  useEffect(() => {
    if (comment || img || des || option || social) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div className="content">
      <div className="card-content" onClick={() => disableOption()}>
        <video
          onClick={() => onVideoPress()}
          id={`vdo${product.id}`}
          className="player"
          ref={(ref) => {
            videoRef.current = ref;
            setVideoRef(ref);
          }}
          loop
          preload="none"
          autoPlay
          muted={sound}
          mediaGroup="video"
          // controls={true}
        >
          <source
            src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="description">
        <div className="description-btn">
          <p className="" onClick={() => desToggel()}>
            التفاصيل
          </p>
          <p className="" onClick={() => desToggel2()}>
            الصور
          </p>
        </div>
      </div>
      <div className={des ? "des-info" : "hide"}>
        <div className="close" onClick={() => setDes((des) => !des)}>
          <IoIosCloseCircleOutline />
        </div>
        <h3 className="text-center">{product.title}</h3>
        <p>{product.description}</p>
      </div>
      <div className={img ? "product-image" : "hide"}>
        <div className="close" onClick={() => setImg((img) => !img)}>
          <IoIosCloseCircleOutline />
        </div>
        <div className="product-info p-2">
          <div className="image">
            <img src={product.images[changeBackground]} alt="" />
          </div>
        </div>
        <div className="product-slider-img">
          {product.images.map((image, index) => {
            return (
              <div onClick={() => setChangeBackground(index)}>
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
