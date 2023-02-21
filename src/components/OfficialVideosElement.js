import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const OfficialVideosElement = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {data.length === 0 ? ( <div>{null}</div> ) : ( <h2 className="movieinfo">Official videos</h2> )}

      <section className=" ofvideos">
        <section>
          {data.map((Videos) => {
            // eslint-disable-next-line no-lone-blocks
            {
              return Videos.key === null ? (
                <div>{null}</div>
              ) : (
                <figure key={Videos.key} className="video-div">
                  <img
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="thumbnail"
                    alt={Videos.name}
                    src={`https://img.youtube.com/vi/${Videos.key}/mqdefault.jpg`}
                  />
                  <img
                    key={"Placeholder"}
                    alt="play-button"
                    className="play-btn"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiklEQVR4nO2WvUoDQRSFF2wtbCz8idj5CJYiVoKKT6FofnwFS1s7RbGw1DrqI4g2dkZ8Azuju9lzJ+HIbGJckcxfVrTIhYFhmZlvztk7MzeKRvHfgkkyR5EqgRuKNAi8Z63b198qTJJSccA4nqHIMYE2RWhsQIciF2y15oeDpukmgTcr8OcGmkzTjTCoyF5PgR/0u/paiNJOMDQPd1XOOJ4NstdkexxPu1h8Vhj0q53Yj4wte5VazjLXT3VbO2lSW7Mtkhu7SODWYwPlwWDg2hWcjSfHKLJF4MVBdd2k+NkHnNvAOIF9AqlhbsOkuBkC7s9P0wUCd4OyO/pl8L0/WOQp0OoJAgcWqx+LTq7tIpKr4nGclijy4HGcdgaDk6TkcIGsUOTSA6jVKuMF0lNy6rWoG/jICO0//A7Z7QF9JTllBWdwpVadKg63Z3HdCZqzvFZAIVD1gn6GfsSDbNf2KrUWDRMkJwkcZpnppvLc+Z86VyYiZQJX+hbKqpRupaL7dYrsWo/MKKI/iA8ZhsCHQ+yEiQAAAABJRU5ErkJggg=="
                  />
                  <ModalVideo
                    key={Videos.name}
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId={Videos.key}
                    onClose={() => setOpen(false)}
                  />
                </figure>
              );
            }
          })}
        </section>
      </section>
    </div>
  );
};

export default OfficialVideosElement;
