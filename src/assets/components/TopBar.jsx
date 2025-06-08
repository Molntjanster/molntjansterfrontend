import React from 'react';

const TopBar = () => {
  return (
<header id="header">
  <h2 className="h4">Events</h2>

  <div className="header-actions">
    {/* Notification */}
    <div className="circle-btn">
      <i className="fa-solid fa-bell"></i>
      <span className="dot dot-pink"></span>
    </div>

    {/* Settings */}
    <div className="circle-btn">
      <i className="fa-solid fa-gear"></i>
    </div>

    {/* Account */}
    <div id="account-container">
      <div className="account-name">
        <img src="/images/icons/grey-avatar.svg" alt="User Avatar" />
        <div>
          <div>Orlando Laurentius</div>
          <small>Admin</small>
        </div>
      </div>
    </div>
  </div>
</header>
  );
};

export default TopBar;