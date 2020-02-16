import React from "react";
import A from "../../atoms/a/a";
import Icon from "../../atoms/icon/icon";

const socialLinks = props => {
  var links = [];
  if (props.links !== undefined && props.links.length > 0) {
    links = props.links.map((link, index) => (
      <A
        key={index}
        type={link.type !== undefined ? link.type : "notype"}
        href={link.href !== undefined ? link.href : "nohref"}
        text={<Icon name={link.icon !== undefined ? link.icon : "noicon"} />}
      />
    ));
  }
  return <div className="hw-social">{links}</div>;
};

export default socialLinks;
