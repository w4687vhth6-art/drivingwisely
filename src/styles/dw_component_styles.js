import { css } from "lit";

export const sharedStyles = [
  css`
    body {
      font: arial;
    }
    .dw-wrapper {
      margin: 1rem;
    }
    h1 {
      color: red;
    }
    button {
      background-color: red;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      height: 40px;
      width: 200px;
      border-radius: 8px;
    }
    .center-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      gap: 20px;
    }
    .center-form input {
      width: 300px;
      padding: 12px 15px;
      font-size: 18px;
    }
  `,
];
