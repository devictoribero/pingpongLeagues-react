import React, { Component } from 'react';
import glamorous from 'glamorous';


const Image = glamorous.img({
	borderRadius: 500,
  width: 150,
  height: 150
});

const Avatar = ( props ) => {
  return (
    <figure>
      <Image src = { props.avatar } big />
    </figure>
  );
}

export default Avatar;
