document.addEventListener('DOMContentLoaded', () => {
    const terminalContent = document.getElementById('terminal-content');
    
    const lines = [
      'Initializing hacker simulation...',
      'Connecting to the target server...',
      'Bypassing firewall...',
      'Gaining access...',
      'Access granted!',
      'Fetching data...',
      'Data fetched successfully!',
      'Simulation complete.'
    ];
  
    let lineIndex = 0;
  
    const addLine = () => {
      if (lineIndex < lines.length) {
        const line = document.createElement('div');
        line.textContent = lines[lineIndex];
        terminalContent.appendChild(line);
        lineIndex++;
        setTimeout(addLine, 1000);
      }
    };
  
    addLine();
  });
  