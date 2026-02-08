const nodes = [
  { top: "10%", left: "12%", size: 8, delay: "0s", duration: "6s" },
  { top: "22%", left: "78%", size: 10, delay: "0.6s", duration: "7s" },
  { top: "35%", left: "52%", size: 7, delay: "1.2s", duration: "5.5s" },
  { top: "48%", left: "20%", size: 9, delay: "1.8s", duration: "7.4s" },
  { top: "60%", left: "72%", size: 6, delay: "2.2s", duration: "5.8s" },
  { top: "72%", left: "38%", size: 11, delay: "2.8s", duration: "8s" },
  { top: "82%", left: "88%", size: 8, delay: "3.2s", duration: "6.6s" },
];

export function BackendSystemBackground() {
  return (
    <div aria-hidden="true" className="backend-bg">
      <div className="backend-bg__glow" />
      <div className="backend-bg__grid" />

      {nodes.map((node, index) => (
        <span
          key={`node-${index}`}
          className="backend-bg__node"
          style={{
            top: node.top,
            left: node.left,
            width: `${node.size}px`,
            height: `${node.size}px`,
            animationDelay: node.delay,
            animationDuration: node.duration,
          }}
        />
      ))}
    </div>
  );
}
