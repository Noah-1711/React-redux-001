import React, { useContext } from "react";
import { Mycontext } from "../App";
import "./Content.css";

const dark = { color: "white", backgroundColor: "#0f172a" };
const light = { color: "black", backgroundColor: "white", width: "100%" };


export const Content = () => {
  const context = useContext(Mycontext);
  return (
    <div className="content" style={context.theme ? dark : light}>
      <div className="para">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
          distinctio nulla accusamus, quisquam et provident molestiae magni
          quasi laborum velit repellendus nihil quidem doloribus assumenda
          maiores architecto eligendi facere rem? Sapiente exercitationem
          nesciunt distinctio, labore accusamus iure, quaerat, alias quasi
          dolorum suscipit officia? Explicabo, hic officia, velit fugit
          consequatur, deleniti nostrum cum neque quos eligendi cumque aliquid!
          Quis eum omnis non. Soluta doloremque, quasi impedit quo iste minima
          nam natus atque corrupti dolorum accusamus sapiente numquam, maiores
          vitae laborum itaque magni praesentium esse. Dolore reprehenderit
          aliquid esse voluptatem ea illo magnam atque. Ab, libero magnam
          nesciunt tenetur ipsam unde quis porro nemo tempore totam. Ut impedit
          iusto perspiciatis dolorem tenetur ab repellat aliquam iste! Magnam
          iusto sequi consequuntur, hic dolore quam explicabo placeat
          dignissimos earum dolorem nam nisi dolor magni, possimus excepturi
          itaque expedita qui autem recusandae quaerat quasi sapiente quisquam
          eum. Suscipit ut cumque id quam labore repellat ullam?
        </p>
      </div>
    </div>
  );
};
