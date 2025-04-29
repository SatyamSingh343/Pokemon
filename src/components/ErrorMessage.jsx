import '../styles/ErrorMessage.css';

function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h2 className="error-title">Oops! Something went wrong</h2>
      <p className="error-message">{message}</p>
      <button 
        className="error-retry-button"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
}

export default ErrorMessage;