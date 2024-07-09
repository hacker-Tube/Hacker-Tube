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
    'Simulation complete.',
    'Pinging target server...'
  ];

  const pingOutput = [
    'Pinging 192.168.1.1 with 32 bytes of data:',
    'Reply from 192.168.1.1: bytes=32 time=8ms TTL=64',
    'Reply from 192.168.1.1: bytes=32 time=7ms TTL=64',
    'Reply from 192.168.1.1: bytes=32 time=6ms TTL=64',
    'Reply from 192.168.1.1: bytes=32 time=8ms TTL=64',
    'Ping statistics for 192.168.1.1:',
    '    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),',
    'Approximate round trip times in milli-seconds:',
    '    Minimum = 6ms, Maximum = 8ms, Average = 7ms'
  ];

  let lineIndex = 0;

  const addLine = (line) => {
    const div = document.createElement('div');
    div.textContent = line;
    terminalContent.appendChild(div);
    terminalContent.scrollTop = terminalContent.scrollHeight;
  };

  const simulatePing = () => {
    let pingIndex = 0;
    const pingInterval = setInterval(() => {
      if (pingIndex < pingOutput.length) {
        addLine(pingOutput[pingIndex]);
        pingIndex++;
      } else {
        clearInterval(pingInterval);
      }
    }, 1000);
  };

  const typeLine = () => {
    if (lineIndex < lines.length) {
      addLine(lines[lineIndex]);
      if (lines[lineIndex] === 'Pinging target server...') {
        setTimeout(simulatePing, 1000);
      }
      lineIndex++;
      setTimeout(typeLine, 1000);
    }
  };

  typeLine();
});
