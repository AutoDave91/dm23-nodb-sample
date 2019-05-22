import React from "react";
import axios from "axios";

function Wish(props) {
  return (
    <article className="wish">
      <img
        src={props.wish.image}
        alt={props.wish.name}
        style={{
          border: "5px dashed purple"
        }}
      />
      <section style={{ display: "flex", flexDirection: "column" }}>
        <h3>{props.wish.name}</h3>
        <button
          onClick={() => {
            axios.delete("/api/wishes/" + props.wish.name).then(response => {
              props.updateWishes(response.data);
            });
          }}
        >
          Delete
        </button>
      </section>
    </article>
  );
}

export default Wish;
