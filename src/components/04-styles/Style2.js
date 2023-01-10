import React from "react";

const Style2 = () => {

    const styleTitle={
        fontSize:"2rem",
        fontWeight:"bold",
        color:"red",
        textAlign:"center"
    }


  return (
    <div>
      <h2 style={styleTitle}>Jsx Loops</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet veniam
        rerum fugiat excepturi aliquam natus laboriosam, ipsa deserunt
        dignissimos ullam nemo, laudantium rem provident ad vero voluptatem
        inventore. Tempora, deleniti?
      </p> 
        <h2 style={{...styleTitle, color:"blue"}}>Component Props</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet veniam
        rerum fugiat excepturi aliquam natus laboriosam, ipsa deserunt
        dignissimos ullam nemo, laudantium rem provident ad vero voluptatem
        inventore. Tempora, deleniti?
      </p>
    </div>
  );
};

export default Style2;
