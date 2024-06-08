'use client';

import './SignupWidget.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SignupWidget = ({ title, content, simulateNetworkRequestTime = 2000 }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className={'signup-widget'} onSubmit={handleSubmit} autoComplete={'false'}>
      <h2>{title}</h2>
      {isSubscribed && (
        <p className={'message'}>
          {message}
        </p>
      )}
      {!isSubscribed && (
        <>
          <p>{content}</p>
          <div className={'input-row'}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              disabled={busy}
              className="input"
              id = "signup-email"
            ></input>
            <button type="submit" disabled={busy} className="button">
              {busy ? 'Joining...' : 'Join'}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

export default SignupWidget;
