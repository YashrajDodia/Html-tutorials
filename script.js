document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.getElementById('gameArea');
    const snake = document.getElementById('snake');
    const food = document.getElementById('food');
  
    let snakeX = 200;
    let snakeY = 200;
    let foodX;
    let foodY;
    let dx = 0;
    let dy = 0;
    const snakeSize = 20;
    let snakeLength = 1;
    const speed = 100;
  
    function randomFoodPosition() {
      foodX = Math.floor(Math.random() * 20) * snakeSize;
      foodY = Math.floor(Math.random() * 20) * snakeSize;
      food.style.left = foodX + 'px';
      food.style.top = foodY + 'px';
    }
  
    function moveSnake() {
      snakeX += dx;
      snakeY += dy;
      if (snakeX < 0 || snakeX >= gameArea.clientWidth || snakeY < 0 || snakeY >= gameArea.clientHeight) {
        gameOver();
        return;
      }
      snake.style.left = snakeX + 'px';
      snake.style.top = snakeY + 'px';
      checkFoodCollision();
    }
  
    function checkFoodCollision() {
      if (snakeX === foodX && snakeY === foodY) {
        snakeLength++;
        randomFoodPosition();
      }
    }
  
    function gameOver() {
      alert('Game Over!');
      snakeX = 200;
      snakeY = 200;
      snakeLength = 1;
      dx = 0;
      dy = 0;
      snake.style.left = snakeX + 'px';
      snake.style.top = snakeY + 'px';
      randomFoodPosition();
    }
  
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowUp':
          if (dy !== snakeSize) {
            dx = 0;
            dy = -snakeSize;
          }
          break;
        case 'ArrowDown':
          if (dy !== -snakeSize) {
            dx = 0;
            dy = snakeSize;
          }
          break;
        case 'ArrowLeft':
          if (dx !== snakeSize) {
            dx = -snakeSize;
            dy = 0;
          }
          break;
        case 'ArrowRight':
          if (dx !== -snakeSize) {
            dx = snakeSize;
            dy = 0;
          }
          break;
      }
    });
  
    randomFoodPosition();
    setInterval(moveSnake, speed);
  });
  