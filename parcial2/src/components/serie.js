import React from "react";

const Serie = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.channel}</td>
      <td>{props.offer.seasons}</td>
      <td>{props.offer.episodes}</td>
      <td>{props.offer.release}</td>
    </tr>
  );
};

export default Serie;