import React from "react";
import A from "../../atoms/a/a";
import Icon from "../../atoms/icon/icon";
import Error from "./../../atoms/error/error";
import { validateProps } from "./../../../functions/validations/props";

const socialLinks = props => {
  const keys = ["links"];
  if (validateProps(props, keys)) {
    return (
      <div className="hw-social">
        {props.links.map((link, index) => (
          <A
            key={index + link.type + link.href}
            type={link.type}
            href={link.href}
            text={<Icon name={link.icon} />}
          />
        ))}
      </div>
    );
  } else {
    return <Error id={1} />;
  }
};

export default socialLinks;
