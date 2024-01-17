import React, { useEffect, useState } from 'react';
import { auth } from '../firebase_auth';
import { getUsername} from './username_auth';



const Navbar = ({ onLogout }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const fetchedUsername = await getUsername(uid);
        setUsername(fetchedUsername);
      }
    };

    fetchUsername();
  }, []);

  const logo = {
    // justifyContent: 'space-between',

  };
  const nav = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const logoutAndUsername = {
    
    // marginTop: '50px',
    // alignItems:'flex-end',
    // margin: 'auto',
    // borderRadius: '5px',
    
    // display: 'flex',
    // alignContent: 'center',
    // padding: '20px',
    // border: '1px solid #ccc',
    // textAlign: 'center',

    display: 'flex',
    padding: '20px',
    margin: '0 50px 0 0',
    textAlign:'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    alignContent: 'stretch',
  };

  const buttonStyle = {
    backgroundColor: '#a4c59a',
    margin: '8px',
    color: '#252525',
    borderRadius: ' 50px',
    padding: '12px 17px',
    fontSize:'24px',
    fontWeight:'500'
  };
  const usernameP = {
    color: '#ddd',
    margin:'0 20px 0 0',
    fontSize:'24px',
    fontWeight:'500'
  };


  return (
    <>
      <nav style={nav}>
        <div style={logo} className="logo">
        <div style={{ display: 'flex', alignItems: 'center' ,justifyContent: 'center' }}>
          <svg
            width="400"
            height="100"
            viewBox="0 0 230 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.65 41.7C11.4833 41.7 7.45 40.2833 4.55 37.45C1.65 34.6167 0.2 30.6 0.2 25.4V6H10.1V25.1C10.1 28.1 10.6833 30.25 11.85 31.55C13.05 32.85 14.6833 33.5 16.75 33.5C18.8167 33.5 20.4333 32.85 21.6 31.55C22.7667 30.25 23.35 28.1 23.35 25.1V6H33.1V25.4C33.1 30.6 31.65 34.6167 28.75 37.45C25.85 40.2833 21.8167 41.7 16.65 41.7ZM57.0066 13.45C59.1066 13.45 61.0066 13.8833 62.7066 14.75C64.4066 15.5833 65.74 16.8833 66.7066 18.65C67.7066 20.4167 68.2066 22.7 68.2066 25.5V41H58.7066V27.05C58.7066 25.1167 58.3066 23.7167 57.5066 22.85C56.74 21.95 55.6566 21.5 54.2566 21.5C53.2566 21.5 52.34 21.7333 51.5066 22.2C50.6733 22.6333 50.0233 23.3167 49.5566 24.25C49.09 25.1833 48.8566 26.4 48.8566 27.9V41H39.3566V13.9H48.4066V21.6L46.6566 19.35C47.69 17.3833 49.1066 15.9167 50.9066 14.95C52.7066 13.95 54.74 13.45 57.0066 13.45Z"
              fill="#EDF1D6"
            />
            <path
              d="M84.0211 41.45C81.7211 41.45 79.4711 41.1833 77.2711 40.65C75.1044 40.1167 73.3544 39.45 72.0211 38.65L74.8711 32.15C76.1378 32.9167 77.6211 33.5333 79.3211 34C81.0211 34.4333 82.6878 34.65 84.3211 34.65C85.9211 34.65 87.0211 34.4833 87.6211 34.15C88.2544 33.8167 88.5711 33.3667 88.5711 32.8C88.5711 32.2667 88.2711 31.8833 87.6711 31.65C87.1044 31.3833 86.3378 31.1833 85.3711 31.05C84.4378 30.9167 83.4044 30.7667 82.2711 30.6C81.1378 30.4333 79.9878 30.2167 78.8211 29.95C77.6878 29.65 76.6378 29.2167 75.6711 28.65C74.7378 28.05 73.9878 27.25 73.4211 26.25C72.8544 25.25 72.5711 23.9833 72.5711 22.45C72.5711 20.7167 73.0711 19.1833 74.0711 17.85C75.1044 16.4833 76.6044 15.4167 78.5711 14.65C80.5378 13.85 82.9378 13.45 85.7711 13.45C87.6711 13.45 89.5878 13.65 91.5211 14.05C93.4878 14.4167 95.1378 14.9833 96.4711 15.75L93.6211 22.2C92.2878 21.4333 90.9544 20.9167 89.6211 20.65C88.2878 20.35 87.0211 20.2 85.8211 20.2C84.2211 20.2 83.0878 20.3833 82.4211 20.75C81.7878 21.1167 81.4711 21.5667 81.4711 22.1C81.4711 22.6333 81.7544 23.05 82.3211 23.35C82.8878 23.6167 83.6378 23.8333 84.5711 24C85.5378 24.1333 86.5878 24.2833 87.7211 24.45C88.8544 24.5833 89.9878 24.8 91.1211 25.1C92.2878 25.4 93.3378 25.85 94.2711 26.45C95.2378 27.0167 96.0044 27.8 96.5711 28.8C97.1378 29.7667 97.4211 31.0167 97.4211 32.55C97.4211 34.2167 96.9044 35.7167 95.8711 37.05C94.8711 38.3833 93.3711 39.45 91.3711 40.25C89.4044 41.05 86.9544 41.45 84.0211 41.45ZM118.565 41.45C116.265 41.45 114.298 40.95 112.665 39.95C111.032 38.9167 109.782 37.3833 108.915 35.35C108.082 33.2833 107.665 30.65 107.665 27.45C107.665 24.2167 108.065 21.5833 108.865 19.55C109.665 17.4833 110.865 15.95 112.465 14.95C114.098 13.95 116.132 13.45 118.565 13.45C121.032 13.45 123.265 14.0333 125.265 15.2C127.298 16.3333 128.898 17.95 130.065 20.05C131.265 22.1167 131.865 24.5833 131.865 27.45C131.865 30.3167 131.265 32.8 130.065 34.9C128.898 37 127.298 38.6167 125.265 39.75C123.265 40.8833 121.032 41.45 118.565 41.45ZM101.515 50.7V13.9H110.565V18.5L110.515 27.45L111.015 36.45V50.7H101.515ZM116.565 33.9C117.632 33.9 118.582 33.65 119.415 33.15C120.282 32.65 120.965 31.9167 121.465 30.95C121.998 29.9833 122.265 28.8167 122.265 27.45C122.265 26.0833 121.998 24.9167 121.465 23.95C120.965 22.9833 120.282 22.25 119.415 21.75C118.582 21.25 117.632 21 116.565 21C115.498 21 114.532 21.25 113.665 21.75C112.832 22.25 112.148 22.9833 111.615 23.95C111.115 24.9167 110.865 26.0833 110.865 27.45C110.865 28.8167 111.115 29.9833 111.615 30.95C112.148 31.9167 112.832 32.65 113.665 33.15C114.532 33.65 115.498 33.9 116.565 33.9ZM149.88 41.45C146.914 41.45 144.28 40.85 141.98 39.65C139.68 38.45 137.864 36.8 136.53 34.7C135.23 32.5667 134.58 30.1333 134.58 27.4C134.58 24.6667 135.23 22.25 136.53 20.15C137.864 18.05 139.68 16.4167 141.98 15.25C144.28 14.05 146.914 13.45 149.88 13.45C152.847 13.45 155.48 14.05 157.78 15.25C160.114 16.4167 161.93 18.05 163.23 20.15C164.53 22.25 165.18 24.6667 165.18 27.4C165.18 30.1333 164.53 32.5667 163.23 34.7C161.93 36.8 160.114 38.45 157.78 39.65C155.48 40.85 152.847 41.45 149.88 41.45ZM149.88 33.9C150.98 33.9 151.947 33.65 152.78 33.15C153.647 32.65 154.33 31.9167 154.83 30.95C155.33 29.95 155.58 28.7667 155.58 27.4C155.58 26.0333 155.33 24.8833 154.83 23.95C154.33 22.9833 153.647 22.25 152.78 21.75C151.947 21.25 150.98 21 149.88 21C148.814 21 147.847 21.25 146.98 21.75C146.147 22.25 145.464 22.9833 144.93 23.95C144.43 24.8833 144.18 26.0333 144.18 27.4C144.18 28.7667 144.43 29.95 144.93 30.95C145.464 31.9167 146.147 32.65 146.98 33.15C147.847 33.65 148.814 33.9 149.88 33.9ZM169.581 41V13.9H179.081V41H169.581ZM174.331 10.9C172.598 10.9 171.198 10.4167 170.131 9.45C169.065 8.48333 168.531 7.28333 168.531 5.85C168.531 4.41666 169.065 3.21666 170.131 2.25C171.198 1.28333 172.598 0.799999 174.331 0.799999C176.065 0.799999 177.465 1.26667 178.531 2.2C179.598 3.1 180.131 4.26667 180.131 5.7C180.131 7.2 179.598 8.45 178.531 9.45C177.498 10.4167 176.098 10.9 174.331 10.9ZM185.255 41V3.9H194.755V41H185.255ZM212.729 41.45C210.262 41.45 208.012 40.8833 205.979 39.75C203.979 38.5833 202.379 36.9667 201.179 34.9C199.979 32.8 199.379 30.3 199.379 27.4C199.379 24.5333 199.979 22.0667 201.179 20C202.379 17.9 203.979 16.2833 205.979 15.15C208.012 14.0167 210.262 13.45 212.729 13.45C215.062 13.45 217.029 13.95 218.629 14.95C220.262 15.95 221.496 17.4833 222.329 19.55C223.162 21.6167 223.579 24.2333 223.579 27.4C223.579 30.6333 223.179 33.2833 222.379 35.35C221.579 37.4167 220.379 38.95 218.779 39.95C217.179 40.95 215.162 41.45 212.729 41.45ZM214.729 33.9C215.796 33.9 216.746 33.65 217.579 33.15C218.446 32.65 219.129 31.9167 219.629 30.95C220.129 29.95 220.379 28.7667 220.379 27.4C220.379 26.0333 220.129 24.8833 219.629 23.95C219.129 22.9833 218.446 22.25 217.579 21.75C216.746 21.25 215.796 21 214.729 21C213.629 21 212.646 21.25 211.779 21.75C210.946 22.25 210.279 22.9833 209.779 23.95C209.279 24.8833 209.029 26.0333 209.029 27.4C209.029 28.7667 209.279 29.95 209.779 30.95C210.279 31.9167 210.946 32.65 211.779 33.15C212.646 33.65 213.629 33.9 214.729 33.9ZM220.679 41V36.35L220.729 27.4L220.229 18.45V3.9H229.729V41H220.679Z"
              fill="#609966"
            />
          </svg>
          </div>
        </div>
        <div style={logoutAndUsername}>
          {/* <ul> */}
          {/* Other navigation items */}
          {/* </ul> */}
          {username && <p style={usernameP}>Welcome, {username} !</p>}
          <button onClick={onLogout} style={buttonStyle}>Logout</button>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
