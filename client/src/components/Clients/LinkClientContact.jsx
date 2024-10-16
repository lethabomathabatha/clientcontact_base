import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LinkClientContact() {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit clicked')
  };

  return (
    <form onSubmit={handleSubmit} className="m-5 p-3 border">
      <h3>Link Client and Contact</h3>
      
      <button type="submit" className="btn btn-primary">Link</button>
    </form>
  );
}
