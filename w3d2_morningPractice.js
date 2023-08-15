const babyMonster = (baby) => {
    if (baby == "baby") {
        console.log("this is a monster")
    } else {
        console.log("this is not a baby monster")
    }
}

babyMonster("baby")



const greetMe = () => {
    console.log("hello there sir")
}

greetMe()


// const throwInTrash = () => {
//     for (i=0; i>=0; i++)
//     console.log("infinite trash")
// }

// throwInTrash()


//chatgbt function

function createTriforce(height) {
    let result = '';
    
    for (let i = 0; i < height; i++) {
      result += ' '.repeat(height - i - 1);
      result += '/'.repeat(i + 1);
      result += ' '.repeat(height - i - 1);
      
      result += ' '.repeat(height - i - 1);
      result += '\\'.repeat(i + 1);
      result += ' '.repeat(height - i - 1);
      
      result += '\n';
    }
    
    return result;
  }
  
  const triforceHeight = 5;
  const triforce = createTriforce(triforceHeight);
  console.log(triforce);
  

  function createTriforce(height) {
    let result = '';
  
    for (let i = 0; i < height; i++) {
      result += ' '.repeat(height - i - 1);
  
      result += '*'.repeat(2 * i + 1);
      
      result += '\n';
    }
    
    return result;
  }
  
  function drawTriforce(size) {
    const topHeight = Math.ceil(size / 2);
    const bottomHeight = size - topHeight;
    
    const topTriforce = createTriforce(topHeight);
    const bottomTriforce = createTriforce(bottomHeight);
  
    const middleLine = '*'.repeat(size);
  
    console.log(topTriforce + middleLine + bottomTriforce);
  }
  
  const triforceSize = 9;
  drawTriforce(triforceSize);
  