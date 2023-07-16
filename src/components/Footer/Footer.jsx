import "./Footer.scss";

export const Footer = ({ items }) => {
  if (!items.length)
    return (
      <p className="footer">Start adding some items to your packing list</p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems).toFixed(2) * 100;

  return (
    <footer className="footer">
      <em>
        {percentage === 100
          ? "You got everyting! Ready to go ~"
          : `You have ${numItems} item on your list, and you already packed
          ${numPacked} item (${percentage}%)`}
      </em>
    </footer>
  );
};
