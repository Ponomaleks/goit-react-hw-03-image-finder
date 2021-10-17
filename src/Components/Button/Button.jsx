export default function Button() {
  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      Load more
    </button>
  );
}
