function setTheme() {
    // root node reference (<html> element)
    const root = document.documentElement; 
    // check the value of .className property
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
    document.querySelector('.theme-name').textContent = newTheme;
  }
  
  document.querySelector('.theme-toggle').addEventListener('click', setTheme)