<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Basics</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, sans-serif;
      max-width: 480px;
      margin: 2rem auto;
      padding: 0 1rem;
      line-height: 1.5;
    }

    section {
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #ddd;
    }

    section:last-of-type {
      border-bottom: none;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      color: #fff;
    }

    #colorBtn {
      background-color: #3498db;
    }

    #greetBtn {
      background-color: #2ecc71;
    }

    #calcBtn {
      background-color: #9b59b6;
    }

    input[type="number"] {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    #result {
      margin-top: 0.75rem;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>JavaScript Basics</h1>

  <section>
    <h2>1. Color-Changing Button</h2>
    <p>Click the button to cycle through different colors.</p>
    <button id="colorBtn" type="button">Click Me</button>
  </section>

  <section>
    <h2>2. Time-Based Greeting</h2>
    <p>Click to see a greeting based on the current time of day.</p>
    <button id="greetBtn" type="button">Show Greeting</button>
  </section>

  <section>
    <h2>3. Addition Calculator</h2>
    <p>Enter two numbers and click Add to see the sum.</p>
    <label for="num1">First number</label>
    <input type="number" id="num1" placeholder="Enter first number">
    <label for="num2">Second number</label>
    <input type="number" id="num2" placeholder="Enter second number">
    <button id="calcBtn" type="button">Add</button>
    <p id="result"></p>
  </section>

  <script src="javascript"></script>
</body>
</html>
