import React from "react";
import A from "../../atoms/a/a";

const linkGroup = props => {
  var links = [];
  if (props.links !== undefined && props.links.length > 0) {
    links = props.links.map((link, index) => (
      <A
        key={index}
        type={link.type !== undefined ? link.type : "notype"}
        text={link.text !== undefined ? link.text : "notext"}
        href={link.href !== undefined ? link.href : "nohref"}
      />
    ));
  }
  return <React.Fragment>{links}</React.Fragment>;
};

export default linkGroup;
