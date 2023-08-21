import React, { Component } from 'react'

interface wordForAlert {
    word: string;
    onClose: () => void;
}
const AlertForButton = ({word, onClose}: wordForAlert) => {
    return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{word}</strong> OMG! You clicked!
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
    )
  }

export default AlertForButton
